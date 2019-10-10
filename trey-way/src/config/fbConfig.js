import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAz-oTOAH2HnIcshUKm2d1RRcy0p_E_mL8",
  authDomain: "tre-way.firebaseapp.com",
  databaseURL: "https://tre-way.firebaseio.com",
  projectId: "tre-way",
  storageBucket: "tre-way.appspot.com",
  messagingSenderId: "523210996317",
  appId: "1:523210996317:web:3e5a18cbeea470e8622bb4",
  measurementId: "G-065JLZZHW6"
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
