import React from "react";
import "./LearnMoreBtn.css"

const BlackButton = ({ children, onClick }) => (
  <button className="black-button" onClick={onClick}>
    {children}
  </button>
);

export default BlackButton;
