// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "@firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  databaseURL: "https://quick-eb593-default-rtdb.firebaseio.com/",
  apiKey: "AIzaSyC2kppkD9v2vRj8GwXB1I7Xca5AVIM33Jw",
  authDomain: "quick-eb593.firebaseapp.com",
  projectId: "quick-eb593",
  storageBucket: "quick-eb593.appspot.com",
  messagingSenderId: "467926853749",
  appId: "1:467926853749:web:07f22fe53cf4f72a26f03c",
  measurementId: "G-24RQMDNPXT",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db, app };
