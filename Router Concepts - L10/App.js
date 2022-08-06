// Q1- Making a simple single page application

import React from "react";
import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { useNavigate , rest } from "react-router-dom";

function App() {
  const history = useNavigate();
  return (
    <div className="App">
      <button>
        <Link to="/about"> About Us </Link>
      </button>
      <button onClick={() => history("/contact")}> Contact Us </button>
      <button onClick={() => history("/home")}> Home Page </button>
      <Routes>
        <Route exact path="/about" render={(props) => <About {...props} />} />                //dont know but this is not sgowing the content of about contact and home pages
        <Route exact path="/contact" render={(props) => <Contact {...props} />} />
        <Route exact path="/home" render={(props) => <Home {...props} />} />

      </Routes>
    </div>
  );
}

export default App;
