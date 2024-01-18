import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import minus from '../../assets/images/minus.svg';
import plus from '../../assets/images/plus.svg';
import './accordian.css';

const CustomAccordian = ({ title, paragraph, style, onClick }) => {
  const [expanded, setExpanded] = useState(false); 

  return (
    <Accordion style={style}> 
      <Accordion.Item style={{padding:'6px'}} eventKey="0">
      
      <Accordion.Header  className="custom-header" onClick={() => setExpanded(!expanded)}>
  {title}
  <img src={expanded ? minus : plus} alt="Expand/Collapse" />
</Accordion.Header>


        <Accordion.Body>
          {paragraph}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default CustomAccordian;
