import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./homepage/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Story from "./pages/Story";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NgoLogin from "./pages/NgoLogin";
import NgoRegister from "./pages/NgoRegister";
import RestroLogin from "./pages/RestroLogin";
import RestroRegister from "./pages/RestroRegister";

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/story" element={<Story />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ngo-login" element={<NgoLogin />} />
          <Route path="/ngo-register" element={<NgoRegister />} />
          <Route path="/restro-login" element={<RestroLogin />} />
          <Route path="/restro-register" element={<RestroRegister />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
