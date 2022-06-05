import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCURFv1V3YS_kqSKlX9X_KinVmt0cpWyYs",
  authDomain: "getama-industry.firebaseapp.com",
  projectId: "getama-industry",
  storageBucket: "getama-industry.appspot.com",
  messagingSenderId: "874634832596",
  appId: "1:874634832596:web:cd71b86a72ff711a92e941",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
