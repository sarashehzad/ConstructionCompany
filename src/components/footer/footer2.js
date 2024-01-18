import React from 'react';


const LastFooter = ({
  heading,
  imageSrc,
  placeholderName,
  placeholderEmail,

  placeholderMessage
}) => {
  return (
    <footer className="footer">
    <div style={{padding: '0px 48px'}}>
      <h2 style={{ fontWeight: 'bold' }}>{heading}</h2>
      <img src={imageSrc} alt="vector-img" />
</div>
      <div>
        <input type="text" placeholder={placeholderName} className='custom-input-2' />
    </div>

    <div>

        <input style={{marginLeft:'12px'}} type="email" placeholder={placeholderEmail} className='custom-input-2'/>

    </div>

    <div>

        <input style={{marginLeft:'12px'}} type="email" placeholder={placeholderMessage} className='custom-input-2'/>

    </div>
        
        
    
    </footer>
  );
};

export default LastFooter;
