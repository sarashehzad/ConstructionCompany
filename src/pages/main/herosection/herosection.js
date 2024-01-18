import React from "react";
import "./herosection.css";
import { Container, Container as Fluid } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import YellowBoxWithContent from "../../../components/Box/ReuableBox";
import img1 from '../../../assets/images/img1.svg'
import img2 from '../../../assets/images/img2.svg'
import img3 from '../../../assets/images/img3.svg'
import Button from "../../../components/Buttons/Button";
import WhiteButton from "../../../components/Buttons/LightBtnReuse";


import con from '../../../assets/images/con.svg'

function HeroSection() {
    return(
    <Container fluid className="p-0 m-0">
   <Row>
   <Col className="p-0" lg={9}>

<div className="contact-img">
<div className="contact-main-section-text">
<h1 className="vectorr" style={{ fontWeight: "bold" }}>Construction</h1>
<p style={{margin:'30px 0px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio. </p>

<Button style={{color:'white', padding:'10px 40px' , backgroundColor:'#FFB400', border: "none", fontWeight:'bold'  }} onClick={() => console.log("Button clicked!")} value="VIEW OUR WORK"></Button>
</div>
</div>
</Col>

    <Col  lg={3} className="yellow-box">
    <div>
    <h4 style={{ fontWeight: "bold" , margin: "1px 10px" , padding: "17px 11px" }}>Our Services</h4>
    <YellowBoxWithContent
            logo={img1}
            title ="Building Construction"
            content="Lorem ipsum dolor sit consectetur adipiscing elit."
          />

<YellowBoxWithContent
            logo={img2}
            title ="Foundation Work"
            content="Lorem ipsum dolor sit consectetur adipiscing elit."
          />

<YellowBoxWithContent
            logo={img3}
            title ="Site Management"
            content="Lorem ipsum dolor sit consectetur adipiscing elit."
          />
          </div>
    </Col>
   </Row>

   <Row>
    <div className="lower-section">
        <h2 style={{ fontWeight: "bold"}}>Get a Quote For Your Project</h2>
        <div>
        <WhiteButton onClick={() => console.log("Button clicked!")}>FREE QUOTE</WhiteButton>
        </div>
    </div>
   </Row>
        </Container>
    )

}

export default HeroSection;

