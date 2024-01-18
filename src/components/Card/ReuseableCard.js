import React from 'react';
import './ReuseableCard.css';

const ImageCard = ({ imageSrc, title, text, buttonText, onClick }) => {
  return (
    <div className="image-card">
      <img src={imageSrc} alt={title} />
      <div className="card-content">
        <h4>{title}</h4>
        <p style={{marginTop:'31px'}}>{text}</p>
        <button style={{marginTop:'96px', color: '#666666', border: '1px solid #666666', fontWeight:'bold', backgroundColor:'white', padding:'3px 16px'}} onClick={onClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default ImageCard;
