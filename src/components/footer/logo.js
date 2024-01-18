import React from 'react';

const LogoWithText = ({ logoSrc, text }) => {
  return (
    <div style={{margin: '16px 0px'}} className="logo-text-container">
      <img src={logoSrc} alt='logo' className="logo-text" />
      <p style={{fontWeight:'bold'}} className="text">{text}</p>
    </div>
  );
};

export default LogoWithText;
