import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";

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
const analytics = getAnalytics(app);

console.log("✅ Firebase Connected Successfully");
