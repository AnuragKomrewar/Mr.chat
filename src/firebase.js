// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbpBESJa96XNtP7_V3IP2zmKhD4bIZob0",
  authDomain: "chat-aaef6.firebaseapp.com",
  projectId: "chat-aaef6",
  storageBucket: "chat-aaef6.appspot.com",
  messagingSenderId: "101375897357",
  appId: "1:101375897357:web:6a7310114b4395258f8a44",
  measurementId: "G-Q4D9R58C7M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(); //calling auth() from firebase
export const storage = getStorage();
export const db = getFirestore()
const analytics = getAnalytics(app);