import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Booking from "./components/Booking";
import Experience from "./components/Experience";
import Login from "./components/Login";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import "./App.css";
import Home from "./components/Home";
import img from "./Images/logo1.png";
import menu from "./Images/menu.png";

const App = () => {
  function handleClick() {
    const slider = document.getElementById("slider");
    const links = document.getElementById("links");
    slider.style.transition = "0.5s";
    slider.classList.toggle("slider2");
    links.classList.toggle("links2");
    links.style.transition = "1s";
  }

  return (
    <Router>
      <div className="app">
        <div id="slider"></div>
        <header id="header">
          <div className="logo-title">
            <img src={img} alt="The Airliner Logo" className="logo" />
            <span className="title">
              <i>
                AIR<span className="liner">LINER</span>
              </i>
            </span>
          </div>
          <span className="menu" id="menu">
            <img
              src={menu}
              onClick={() => handleClick()}
            />
          </span>
          <div className="navBar">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/booking">Booking</Link>
                </li>
                <li>
                  <Link to="/experience">Experience</Link>
                </li>
                
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
