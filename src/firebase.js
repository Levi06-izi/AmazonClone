// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDuUo54GGTJB_CGGqt6gh6Xfaehpzh1DpQ",
    authDomain: "let-s-start-up-6a0ea.firebaseapp.com",
    projectId: "let-s-start-up-6a0ea",
    storageBucket: "let-s-start-up-6a0ea.appspot.com",
    messagingSenderId: "714825579521",
    appId: "1:714825579521:web:b7b03b8ee50d69d41bd400",
    measurementId: "G-B88KG7PP4L"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth=firebase.auth();

    export { db, auth};