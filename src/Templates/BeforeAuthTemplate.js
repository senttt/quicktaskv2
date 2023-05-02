import React from "react";
import { Link } from "react-router-dom";
import "../Pages/Home.css";

function BeforeAuthTemplate() {
  return (
    <nav>
      <Link to="/">Homes</Link>
      <Link to="/login">Sign In</Link>
      <Link to="/register">Sign Up</Link>
    </nav>
  );
}

export default BeforeAuthTemplate;
