import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";


import HomePage from "./landing_page/home/HomePage";
import SignUp from "./landing_page/signup/Signup";
import Login from "./landing_page/Login/Login";
import Products from "./landing_page/products/Products";
import About from "./landing_page/about/About";
import Pricing from "./landing_page/pricing/Princing";
import Support from "./landing_page/support/Support";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="Signup" element={<SignUp />} />
      <Route path="Login" element={<Login />} />
      <Route path="About" element={<About />} />
      <Route path="Products" element={<Products />} />
      <Route path="Pricing" element={<Pricing />} />
      <Route path="Support" element={<Support />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>,
);
