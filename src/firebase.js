// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBxEglEWMw8-_bR3cN_xwGANoH35dXjhZc",
  authDomain: "rostermd-4128f.firebaseapp.com",
  projectId: "rostermd-4128f",
  storageBucket: "rostermd-4128f.appspot.com",
  messagingSenderId: "846210360400",
  appId: "1:846210360400:web:4de421ff19482893a91d55",
  measurementId: "G-G5ZPVYL91K"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;