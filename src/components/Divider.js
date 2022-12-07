import React from "react";
import phones from "../images/grpimg.png";
function Divider() {
  return (
    <div className="image-container">
      <div>
        <img className="img-phones" src={phones} alt="Screens" />
      </div>
      <div className="line-break-div">
        <hr className="line" />
        <p className="app-works-para">How the app works</p>
      </div>
    </div>
  );
}

export default Divider;
