import React from 'react';

const ImageCardWithText = ({ imageSrc, heading, text, paragraph }) => {
  return (
    <div style={{border:'none'}} className="card">
      <img src={imageSrc} alt={heading} className="card-image" />
      <div style={{backgroundColor:'#FFFFFF', padding:'18px 20px'}} className="custom-card">
        <h6 style={{fontWeight:'bold' , color:'#666666'}} className="card-heading-1">{heading}</h6>
        <p style={{color:'#666666'}} className="card-text-1">{text}</p>
        <p style={{color:'#666666'}} className="card-paragraph-1">{paragraph}</p>
      </div>
    </div>
  );
};

export default ImageCardWithText;
