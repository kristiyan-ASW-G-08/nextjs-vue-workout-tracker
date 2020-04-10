import firebase from "firebase";
import firestore from "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyA1URHX3pSyZN1SojsLuOoiwSLdTwL8ZUI",
  authDomain: "vue-tvshows-85cee.firebaseapp.com",
  databaseURL: "https://vue-tvshows-85cee.firebaseio.com",
  projectId: "vue-tvshows-85cee",
  storageBucket: "vue-tvshows-85cee.appspot.com",
  messagingSenderId: "823836585842",
  appId: "1:823836585842:web:ffc9716a3f3c68853537eb",
  measurementId: "G-QPT77SE9KH"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
