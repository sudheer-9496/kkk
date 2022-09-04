import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";

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

  const messaging = firebase.messanging()

  function notifi(){
    Notification.requestPermission().then(Permission=>{
        console.log(Permission)
        if(Permission == "granted"){
            messaging.getToken({vapidKey:"BGaGMET4310T6sgw-Xq3Ic9qHp11_s5_sZ3OBAlEreBr7w1CEZVkaBk3OWRA4KFg514bI4D7Sf9RlPRXlXZz2Wg"}).then(currentToken=>{
                console.log(currentToken)
                document.getElementById('tokenId').innerHTML =
                currentToken
            })

        }
    })
  }

  messaging.onMessage(res=>{
    console.log(res)
  })


  function sendNotification(){
    const token =document.getElementById('token').value
    const title =document.getElementById('title').value
    const msg =document.getElementById('msg').value

    let body ={
        to: token,
        notification:{
            title:title,
            body:msg,
            icon:"",
            click_action:"https://g-b-d2.web.app/admin.html"
        }
        

    }
    let Option={
        method:"POST",
        headers:new Headers({
            Authorization: "key=AAAAxoMFTnM:APA91bGU8hCwo8tH7taK3Cv4ingK8hUv8Pl9l2Xvi1raHCsHVdu-FE94cYvqDSptC65WATKHq5KftGrGuPQu3BJz8PR71CWsHc1iq7-3g2FEiqJly1lUSbfSt9RxE_uMSyI1n-LxK_mc",
            "Content-type":"application/json"

        }),
        body:JSON.stringify(body)
    }

    fetch("https://g-b-d2.googleapis.com/g-b-d2/send",Option).then(res=>{
        console.log(res)
        console.log('SENT')
    }).catch(e=>console.log(e))

    console.log(body)

  }