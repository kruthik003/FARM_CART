import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCh61OUSoqM-Pzs0VBTkzIKSMcW2dGHAuw",
  authDomain: "farm-cart-eb0ce.firebaseapp.com",
  projectId: "farm-cart-eb0ce",
  storageBucket: "farm-cart-eb0ce.appspot.com",
  messagingSenderId: "367389776687",
  appId: "1:367389776687:web:a807a98b7355c0dff6dfda",
  measurementId: "G-ZZ3HKLXWLC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
