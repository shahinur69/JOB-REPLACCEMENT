// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq0s7bxxUpUg9P5N3didDhMe9ldxIGLX0",
  authDomain: "job-replacement-b25d7.firebaseapp.com",
  projectId: "job-replacement-b25d7",
  storageBucket: "job-replacement-b25d7.appspot.com",
  messagingSenderId: "126632206680",
  appId: "1:126632206680:web:e3e58a2bf568648ff1452d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
