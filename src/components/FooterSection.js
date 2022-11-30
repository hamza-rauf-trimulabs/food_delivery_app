import React from "react";
import logo from "../images/logo.png";
import fb from "../images/fb.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
function FooterSection() {
  return (
    <div className="footer-section">
      <div className="logo_div">
        <img className="nav_image" src={logo} alt="logo" />
      </div>
      <div className="social-media-div">
        <img className="fb" src={fb} alt="logo" />
        <img className="fb" src={twitter} alt="logo" />
        <img className="fb" src={instagram} alt="logo" />
      </div>
      <div className="para-div">
        <p>Copywright 2020 Bella Onojie.com</p>
      </div>
    </div>
  );
}

export default FooterSection;
