import { React, useState } from "react";
import nav_logo from "../images/logo.png";
import icon from "../images/icon.png";

function Navbar() {
  const [toggle, settoggle] = useState(false);
  function toggle_change() {
    settoggle(!toggle);
  }

  return (
    <div className="navbar">
      <div className="logo_div">
        <img className="nav_image" src={nav_logo} alt="logo" />
        <img
          onClick={toggle_change}
          src={icon}
          alt="togl"
          className="navbar-icon"
        />
        {toggle && (
          <div className="menu">
            <ul className="menu-list">
              <li>Home</li>
              <li>Product</li>
              <li>Faq</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
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
