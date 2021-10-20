// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb-z0UBTFGsdy5FHVtNi74h5uymmtQEdk",
  authDomain: "revent-ebbcc.firebaseapp.com",
  projectId: "revent-ebbcc",
  storageBucket: "revent-ebbcc.appspot.com",
  messagingSenderId: "423839557394",
  appId: "1:423839557394:web:eccb4fe01fb8af8c9cf5cb",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
