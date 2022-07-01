import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB9JIbSoTPYorbifyxpTllGQ89cTTX4CpQ",
    authDomain: "u-pay-shop.firebaseapp.com",
    projectId: "u-pay-shop",
    storageBucket: "u-pay-shop.appspot.com",
    messagingSenderId: "816960840166",
    appId: "1:816960840166:web:0535c34881b444c3bef627"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};