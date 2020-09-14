import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSMe8XwJKyua9Dg3aMwIqv9oLQROrFvLw",
  authDomain: "planday-e0fe3.firebaseapp.com",
  databaseURL: "https://planday-e0fe3.firebaseio.com",
  projectId: "planday-e0fe3",
  storageBucket: "planday-e0fe3.appspot.com",
  messagingSenderId: "749321174974",
  appId: "1:749321174974:web:f7f663baaf78b0b99b83ef",
  measurementId: "G-FW7NGLTBG6"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;