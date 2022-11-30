import React from "react";
import VarietiesPng from "../images/varieties.png";

function VarietiesSection() {
  return (
    <div className="varieties-section-container">
      <div className="varieties-section-text-div">
        <h3>Explore varieties</h3>
        <h2>Shop for your favorites meal as e dey hot.</h2>
        <h4>
          Shop for your favorite meals or drinks and enjoy while doing it.
        </h4>
      </div>
      <div className="varieties-section-image-div">
        <img
          className="varieties-image"
          src={VarietiesPng}
          alt="varieties"
        ></img>
      </div>
    </div>
  );
}

export default VarietiesSection;
