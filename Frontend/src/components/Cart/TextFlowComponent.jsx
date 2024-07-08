import React from "react";
import "./TextFlowComponent.css";
function TextFlowComponent({ message }) {
  return (
    <div className="container">
      <span className="txt anim-text-flow">{message} </span>
    </div>
  );
}

export default TextFlowComponent;
