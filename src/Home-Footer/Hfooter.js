import React from "react";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Navbaar from "../Navbaar/Navbaar"
import "./Hfooter.css";

export default function Hfooter() {
  return (
    <div className="home-container" id="header">
      <Navbaar/>
      <Home />
      <Footer />
    </div>
  );
}
