import React from "react";
import Sigin from "../images/account_create.png";

function AccountSection() {
  return (
    <div className="account-section">
      <div>
        <img className="signin-image" src={Sigin} alt="Screens"></img>
      </div>
      <div>{/* <h3></h3> */}</div>
    </div>
  );
}

export default AccountSection;
