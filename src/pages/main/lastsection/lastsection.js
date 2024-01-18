import React from "react";
import "./lastsection.css";
import { Container } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import blackline from '../../../assets/images/blackline.svg'
import Footer from "../../../components/footer/footer";
import Button from "../../../components/Buttons/Button";
import social from '../../../assets/images/social.svg'
import location from '../../../assets/images/location.svg';
import phone from '../../../assets/images/phone.svg';
import mail from '../../../assets/images/mail.svg';
import LogoWithText from "../../../components/footer/logo";

function LastSection(){
    return(
        <Container fluid>
            <Row>
                <Col lg={6} style={{backgroundColor:'#FFB400'}}>
                <Footer
  heading="Contact Us"
  imageSrc={blackline}
  placeholderName="Name"
  placeholderEmail="Email"
  placeholderMessage="Message"
/>
<div style={{justifyContent:'end', marginRight:'79px',
    display: 'flex',  marginBottom:'30px'}}>
<Button style={{color:'white', padding:'8px 55px' , backgroundColor:'#FFB400', border: "4px solid #FFFFFF",  }} onClick={() => console.log("Button clicked!")} value="SEND MESSAGE"></Button>
</div>

                </Col>

                <Col lg={6}>
                    <Row style={{backgroundColor:'#2A2A2A'}}>
                    <div style={{justifyContent:'center' , height:'114px', display:'flex'}}>
                    <img style={{width:'41%'}} src={social} alt="Social icons" className="social-icons" /> 
                    </div>
                    </Row>
   
<div style={{padding: '62px 71px'}}>
<LogoWithText logoSrc={location} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." ></LogoWithText>
<LogoWithText logoSrc={phone} text="+00 123 456 78" ></LogoWithText>
<LogoWithText logoSrc={mail} text="constractioninc@gmail.com" ></LogoWithText>
</div>
                </Col>


            </Row>
        </Container>
    )
}

export default LastSection;