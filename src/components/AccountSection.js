import React from "react";
import CreateAccountImage from "../images/account_create.png";

function AccountSection() {
  return (
    <div className="account-section-container">
      <div className="create-account-image-div">
        <img
          className="signin-image"
          src={CreateAccountImage}
          alt="Screens"
        ></img>
      </div>
      <div className="create-account-text-div">
        <h3>Create an account</h3>
        <h2>Create/login to an existing account to get started</h2>
        <h4>An account is created with your email and a desired password</h4>
      </div>
    </div>
  );
}

export default AccountSection;
