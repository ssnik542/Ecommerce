import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Login from "./components/Login";
import Signup from "./components/Signup";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDy1zQF7qMpsrdKz7JrwiIkXCNuseVHVbU",
  authDomain: "glmart-cd860.firebaseapp.com",
  projectId: "glmart-cd860",
  storageBucket: "glmart-cd860.appspot.com",
  messagingSenderId: "226826860363",
  appId: "1:226826860363:web:904db2bb2325eb8a641ace",
  measurementId: "G-HT3X0Q5J5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      
      </Routes>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
