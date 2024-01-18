import React from 'react';
import './footer.css';

const Footer = ({
  heading,
  imageSrc,
  placeholderName,
  placeholderEmail,

  placeholderMessage
}) => {
  return (
    <footer className="footer">
    <div style={{padding: '0px 44px'}}>
      <h2 style={{ fontWeight: 'bold' }}>{heading}</h2>
      <img src={imageSrc} alt="vector-img" />
</div>
      <div style={{justifyContent:'center'}} className="input-group">
        <input type="text" placeholder={placeholderName} className='custom-input-text' />
        <input type="email" placeholder={placeholderEmail} className='custom-input-email'/>
      </div>

<div style={{justifyContent:'center'}} className="input-group">
      <input type="text" placeholder={placeholderMessage} className='custom-input'/>
</div>
    </footer>
  );
};

export default Footer;
