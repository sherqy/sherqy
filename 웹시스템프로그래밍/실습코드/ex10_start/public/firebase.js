// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'frebase/firebase-database';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const oFirebase = firebase.initializeApp({
  //apiKey: "AIzaSyDbA79OHuuDQadM1PFmsSvFrwiRcAWn2Ig",
  //authDomain: "pwa-camera-892bd.firebaseapp.com",
  databaseURL: "https://pwa-camera-892bd-default-rtdb.firebaseio.com",
  //projectId: "pwa-camera-892bd",
  storageBucket: "pwa-camera-892bd.appspot.com",
  //messagingSenderId: "398669720313",
  //appId: "1:398669720313:web:f6942151da266cabf75028"
});

const oDB = oFirebase.database();
export const oPicturesinDB = oDB.ref('pictures');
export const oStorage = oFirebase.storage();
// Initialize Firebase
//const app = initializeApp(firebaseConfig);