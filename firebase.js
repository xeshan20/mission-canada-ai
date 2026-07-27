import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyBhxz6I9qiK_7vEcwcNwmcgFPFG2-C5pRc",
  authDomain: "mission-canada-ai.firebaseapp.com",
  projectId: "mission-canada-ai",
  storageBucket: "mission-canada-ai.firebasestorage.app",
  messagingSenderId: "1095902374558",
  appId: "1:1095902374558:web:0d6760dccc43d3c941e98f",
  measurementId: "G-Q51THGCBG7"
};

const app = initializeApp(firebaseConfig);

getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
window.auth = auth;
window.db = db;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.signOut = signOut;
window.onAuthStateChanged = onAuthStateChanged;
console.log("✅ Firebase Connected");
