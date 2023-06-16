// import firebase from 'firebase'
import { initializeApp } from "firebase/app";
var firebaseConfig = {
    apiKey: "AIzaSyB2QiRjcROMkg6teVHWXb02z1WeFjBWyMA",
    authDomain: "automartzpushnotfication.firebaseapp.com",
    projectId: "automartzpushnotfication",
    storageBucket: "automartzpushnotfication.appspot.com",
    messagingSenderId: "71058103144",
    appId: "1:71058103144:web:2e08a1215c92d8090094dd"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
export default ini