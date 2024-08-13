import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgoBGBn81cEHN8vkMfhEelY7gk_H3u2oY",
  authDomain: "donation-abc86.firebaseapp.com",
  projectId: "donation-abc86",
  storageBucket: "donation-abc86.appspot.com",
  messagingSenderId: "775299662296",
  appId: "1:775299662296:web:38d6e35778aa9e37e972ad",
  measurementId: "G-XG56TPCNKD"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };