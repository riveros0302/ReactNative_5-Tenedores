import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1ntZ9Zxp5IR5FCCAirbvMePHk1eC0kHM",
  authDomain: "tenedores-da2b7.firebaseapp.com",
  projectId: "tenedores-da2b7",
  storageBucket: "tenedores-da2b7.appspot.com",
  messagingSenderId: "802038051813",
  appId: "1:802038051813:web:a632ee7e0539f88ac0f50c",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
