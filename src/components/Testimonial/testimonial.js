import React from 'react';

const TestimonialCard = ({ imageSrc, paragraphText, headingText }) => {
  return (
   
      <div className="card-testimonial">
      <img src={imageSrc} alt="stars image" className="star-image" />
      <div className='custom-content'>
        <p className='custom-p'>{paragraphText}</p>
        <h5 className='custom-h' style={{fontWeight:'bold'}}>{headingText}</h5>
        </div>
      </div>
   
  );
};

export default TestimonialCard;
