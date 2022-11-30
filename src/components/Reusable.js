import React from "react";

function Reusable(props) {
  const styled = {
    display: "flex",
    flexDirection: props.Direction,
  };
  return (
    <div className="account-section-container" style={styled}>
      <div className="create-account-image-div">
        <img className="signin-image" src={props.Obj.image} alt="Screens"></img>
      </div>
      <div className="create-account-text-div">
        <h3>{props.Obj.title}</h3>
        <h2>{props.Obj.text}</h2>
        <h4>{props.Obj.paragraph}</h4>
      </div>
    </div>
  );
}

export default Reusable;
