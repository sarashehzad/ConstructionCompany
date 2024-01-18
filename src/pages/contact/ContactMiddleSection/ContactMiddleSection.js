import React from "react";
import './ContactMiddleSection.css';
import { Container } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import line from '../../../assets/images/line.svg'
import Button from "../../../components/Buttons/Button";
import LastFooter from "../../../components/footer/footer2";
import CustomAccordian from "../../../components/Accordian/accordian";
import Map from '../../../assets/images/Map.svg'

function ContactGetInTouch(){
    return(
        <Container fluid style={{backgroundColor:' #F7F7F7'}}>
            <Row>
                <Col className="contact-footer" style={{margin:'34px 2px'}} lg={6}>

                <LastFooter 
  heading=" Get In Touch"
  imageSrc={line}
  placeholderName="Name"
  placeholderEmail="Email"
  placeholderMessage="Message"
/>
<div style={{justifyContent:'end', marginRight:'110px',
    display: 'flex',  marginBottom:'30px'}}>
<Button style={{color:'black', padding:'8px 45px'  , border: "4px solid black"  }} onClick={() => console.log("Button clicked!")} value="SEND MESSAGE"></Button>
</div>

                </Col>

                <Col style={{marginTop:'93px' , marginLeft:'26px', marginBottom:'20px'}} lg={5} md={11} sm={10} xs={10}>
<CustomAccordian title="Donec rutrum congue leo eget malesuada?" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. " />

<CustomAccordian title="Vivamus suscipit tortor eget felis porttitor volutpat?" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. " />

<CustomAccordian title="Curabitur non nulla sit amet nisl tempus?" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. " />

<CustomAccordian title="Pellentesque in ipsum id orci porta dapibus?" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. " />

<CustomAccordian title="Curabitur non nulla sit amet nisl?" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. " />
</Col>
 <Col className="map-section" style={{padding:'0px'}} lg={12} md={12} sm={12}>
                    <img style={{width:'100%'}} src={Map} alt="map-img" className="map-img"></img>
                </Col>

            </Row>

            
               
           
        </Container>
    )
}

export default ContactGetInTouch;