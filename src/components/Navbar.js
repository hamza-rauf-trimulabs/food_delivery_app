import React from "react";
import nav_logo from "../images/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo_div">
        <img className="nav_image" src={nav_logo} alt="logo" />
      </div>
      <div className="list_div">
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>Faq</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
