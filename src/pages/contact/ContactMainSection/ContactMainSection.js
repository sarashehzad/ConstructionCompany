import React from "react";
import './ContactMainSection.css';
import { Container, Container as Fluid } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import YellowBoxWithContent from "../../../components/Box/ReuableBox";
import img1 from '../../../assets/images/img1.svg';
import img2 from '../../../assets/images/img2.svg';
import img3 from '../../../assets/images/img3.svg';
import Button from "../../../components/Buttons/Button";
import YellowButton from "../../../components/Buttons/ReusableButton";



import con from '../../../assets/images/con.svg'

function ContactMainSection() {
    return(
    <Container fluid>
   <Row>
   <Col className="p-0" lg={9}>

<div className="contact-img">
<div className="contact-main-section-text">
<h1 className="vectorr" style={{ fontWeight: "bold" }}>Contact Us</h1>
<p style={{margin:'20px 0px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio. </p>

<Button style={{color:'white', padding:'10px 40px' , backgroundColor:'#FFB400', border: "none", fontWeight:'bold'  }} onClick={() => console.log("Button clicked!")} value="SEND A MESSAGE"></Button>
</div>
</div>
</Col>

    <Col style={{backgroundColor:'#FFB400' ,padding:'35px 12px'}} lg={3}>
    <h4 style={{ fontWeight: "bold" , margin: "1px 10px" , padding: "17px 11px" }}>Contact Info</h4>
     <div style={{margin:'25px 23px'}}>
    <h6 style={{fontWeight:'bold'}}>Our Office</h6>
    <p>1234 Divi St. #1000, San Francisc, CA <br/> 93251</p>
    </div>
    <div style={{margin:'25px 23px'}}>
    <h6 style={{fontWeight:'bold'}}>Open Office Hours</h6>
    <p>M-F: 9am – 6pm <br/> S-S: 10am – 4pm</p>
    </div>
    <div style={{margin:'25px 23px'}}>
    <h6 style={{fontWeight:'bold'}}>Get in Touch</h6>
    <p>constructioninc.com <br/>
(346) 426-2351</p>
    </div>
    </Col>


   </Row>

   <Row style={{margin:'20px 0px'}}>
    <div className="lower-section">
    
    <h3 style={{ fontWeight: "bold" }}>
  <span style={{ color: "#FFB400" }}>Call: (541) 931-3526</span> <br />
  We Can't Wait to Make Your Ideas a Reality
</h3>
<div>
        <Button style={{color:'#FFB400', padding:'8px 19px'  , backgroundColor:'white', border: "4px solid #FFB400", fontWeight:'bold' , margin:'10px 0px' }} onClick={() => console.log("Button clicked!")} value="ONLINE ESTIMATE FORM"></Button>
        </div>
        </div>
        
  
   </Row>
        </Container>
    )

}

export default ContactMainSection;
