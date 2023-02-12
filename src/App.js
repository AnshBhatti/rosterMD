import logo from './logo.svg';
import './App.css';
import '../src/landing.css';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import {
  //BrowserRouter,
  //Routes,
  //Route
 //} from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import LandingPage from './LandingPage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="Main_App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign_up" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route index element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
