
import React from "react";

const Blocks = ({ heading, imageSrc, paragraphText, style }) => {
  return (
    <div style={style}>
    
      <h3 style={{fontWeight:'bold', marginTop:'30px'}}>{heading}</h3>
      <img className="block-img" style={{margin:'14px 0px'}} src={imageSrc} />
      <p style={{marginTop:'18px'}}>{paragraphText}</p>
     
      
    </div>
  );
};

export default Blocks;

