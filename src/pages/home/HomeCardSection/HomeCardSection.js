import React from "react";
import './HomeCardSection.css'
import { Container, Container as Fluid } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import YellowButton from "../../../components/Buttons/ReusableButton";

import line from '../../../assets/images/line.svg'


import con from '../../../assets/images/con.svg'

function HomeCardSection() {
    return(
    <Container fluid>
   <Row>
    <Col className="p-0" lg={12}>
<img src={con} alt="Container Image" className="construction-img" /> 
<div style={{textAlign:'center'}} className="content-overlay-home">
<img src={line} alt="line Image" className="vector-img" />
<h1 style={{ fontWeight: "bold" , marginTop:'20px'}}>We’ve Been Building For <br/> Over 20 years</h1>
<p style={{margin: "43px 0px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.</p>


<YellowButton onClick={() => console.log("Button clicked!")}>ABOUT US</YellowButton>

</div>

    </Col>

   
   </Row>

  

  
        </Container>
    )

}

export default HomeCardSection;

