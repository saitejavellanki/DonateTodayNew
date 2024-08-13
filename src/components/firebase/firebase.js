import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqXoKKuTETlOT31f8z_jjUSgIvT5AvirE",
  authDomain: "donatetoday-2a5f6.firebaseapp.com",
  projectId: "donatetoday-2a5f6",
  storageBucket: "donatetoday-2a5f6.appspot.com",
  messagingSenderId: "687975052881",
  appId: "1:687975052881:web:ec66a796fbb859f469ea70",
  measurementId: "G-XM4JG297G4"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };