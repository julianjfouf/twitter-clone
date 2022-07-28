import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAAEebSoGk3WDOH2hYuRNcswBi4W8QZWVI",
  authDomain: "twitter-clone-90ab7.firebaseapp.com",
  projectId: "twitter-clone-90ab7",
  storageBucket: "twitter-clone-90ab7.appspot.com",
  messagingSenderId: "664873038414",
  appId: "1:664873038414:web:42e7b2ae6093966ecf491f",
  measurementId: "G-8W2FFFTBNM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
