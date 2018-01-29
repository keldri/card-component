// src/firebase.js
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA__bQ6mCahxwCfIF-c52nHARP4MCw_Irk",
    authDomain: "card-component.firebaseapp.com",
    databaseURL: "https://card-component.firebaseio.com",
    projectId: "card-component",
    storageBucket: "",
    messagingSenderId: "451889731728"
  };
  firebase.initializeApp(config);
  export default firebase;