import React from "react";
import "./ReusableButton.css"

const YellowButton = ({ children, onClick }) => (
  <button className="yellow-button" onClick={onClick}>
    {children}
  </button>
);

export default YellowButton;
