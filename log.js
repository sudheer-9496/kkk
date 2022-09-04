<script type="module">
function validates()
{
    
         import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
          import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
          
          import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
          import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
          
          // TODO: Add SDKs for Firebase products that you want to use
          // https://firebase.google.com/docs/web/setup#available-libraries
        
          // Your web app's Firebase configuration
          // For Firebase JS SDK v7.20.0 and later, measurementId is optional
          const firebaseConfig = {
            apiKey: "AIzaSyAdO1240EGQj0s2HgEuLulySHlBBzm2fcc",
            authDomain: "g-b-d2.firebaseapp.com",
            databaseURL: "https://g-b-d2-default-rtdb.firebaseio.com",
            projectId: "g-b-d2",
            storageBucket: "g-b-d2.appspot.com",
            messagingSenderId: "852601687667",
            appId: "1:852601687667:web:8444d014a7c78ca0b3a406",
            measurementId: "G-NYJPSEE4PZ"
          };
        
          // Initialize Firebase
          const app = initializeApp(firebaseConfig);
          const database = getDatabase(app);
          const auth = getAuth();
        
        signup.addEventListener('click',(e) => {
        
          const email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          var username = document.getElementById('username').value;
          var age = document.getElementById('age').value;
          var bg = document.getElementById('bg').value;
        
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
             // Signed in 
              const user = userCredential.user;
        
              set(ref(database, 'users/' + user.uid),{
                  username: username,
                  email: email
              })
        
              alert('user created!');
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
        
              alert(errorMessage);
            // ..
            });
        
        });
        
         login.addEventListener('click',(e)=>{
           var email = document.getElementById('lemail').value;
           var password = document.getElementById('lpassword').value;
        
              signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
        
                const dt = new Date();
                 update(ref(database, 'users/' + user.uid),{
                  last_login: dt,
                })
        
                 alert('User loged in!');
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
        
                alert(errorMessage);
          });
        
         });
        
        const user = auth.currentUser;
        onAuthStateChanged(auth, (user) => {
          if (user)
          {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            //bla bla bla
            // ...
          }
          else
          {
            // User is signed out
            // ...
            //bla bla bla
          }
        });
        
    }
    </script>
    