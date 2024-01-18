import React from "react";


const Button = ({ value, style, onClick }) => (
  <button className="button" onClick={onClick} style={style}>
    {value}
  </button>
);

export default Button;
