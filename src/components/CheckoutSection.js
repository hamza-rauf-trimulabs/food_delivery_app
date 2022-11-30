import React from "react";
import CheckoutSectionImage from "../images/account_create.png";

function CheckoutSection() {
  return (
    <div className="checkout-section-container">
      <div className="checkout-image-div">
        <img
          className="checkout-image"
          src={CheckoutSectionImage}
          alt="checkout"
        ></img>
      </div>
      <div className="checkout-text-div">
        <h3>Checkout</h3>
        <h2>When you done check out and get it delivered.</h2>
        <h4>When you done check out and get it delivered with ease.</h4>
      </div>
    </div>
  );
}

export default CheckoutSection;
