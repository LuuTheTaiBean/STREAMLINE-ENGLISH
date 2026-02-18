// Import Firebase
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwL3hbKMaYI6mc7FzNzHt_blk3UsXY1Xw",
  authDomain: "english-learning-web-4c678.firebaseapp.com",
  projectId: "english-learning-web-4c678",
  storageBucket: "english-learning-web-4c678.firebasestorage.app",
  messagingSenderId: "1059305498094",
  appId: "1:1059305498094:web:50546ba54c43654daa9aff",
  measurementId: "G-RM46SE83GH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
