import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBIZ_Y5pa5f1yYDvhZ4Tu33yov8Ufzcc_E",
    authDomain: "chatapp-c7d91.firebaseapp.com",
    projectId: "chatapp-c7d91",
    storageBucket: "chatapp-c7d91.appspot.com",
    messagingSenderId: "927213986910",
    appId: "1:927213986910:web:8d34c3c8ff54bfffac00cf",
  })
  .auth();
