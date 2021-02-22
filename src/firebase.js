import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa0J0kIj45nl3Cnm-SHEQ2X1LGRA10knA",
  authDomain: "project-slack-2.firebaseapp.com",
  projectId: "project-slack-2",
  storageBucket: "project-slack-2.appspot.com",
  messagingSenderId: "961922725405",
  appId: "1:961922725405:web:05d3119db66ec0f34b38f4",
  measurementId: "G-WVV7MB83EF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
