import React from "react";
import "./LightBtnReuse.css"

const WhiteButton = ({ children, onClick }) => (
  <button className="white-button" onClick={onClick}>
    {children}
  </button>
);

export default WhiteButton;
