importScripts("https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/9.9.1/firebase-messaging.js")

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
  const analytics = getAnalytics(app);
  