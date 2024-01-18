import React from "react";
import "./mainherosection.css";
import { Container, Container as Fluid } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import con from '../../../assets/images/con.svg';

function FirstSection(){
return(
    <Container fluid>
    <Row>
     {/* <Col className="p-0" lg={12}>
 <img src={con} alt="Container Image" className="construction-img" /> 
 <div className="text-overlay-2">
 <h1 className="vector" style={{ fontWeight: "bold" }}>Monarch HQ Project</h1>
 <div className="main-block">

 <p className="project-custom-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis <br/> egestas pellentesque libero dolor in diam consequat ut. </p>
 <div className="block-2">
    <p>Date: 12 April 2018</p>
<p>Client: Monarch Group</p>
<p>Project Type: Building Renovation</p>
</div>

 </div>
 </div>

 
 
     </Col> */}
     <Col className="p-0" lg={12}>

<div className="project-img">
<div className="project-main-section-text">
<h1 className="vectorr" style={{ fontWeight: "bold" }}>Monarch HQ Project</h1>
<p style={{margin:'20px 0px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis <br/> egestas pellentesque libero dolor in diam consequat ut.  </p>


</div>

<div className="block-2">
    <p>Date: 12 April 2018</p>
<p>Client: Monarch Group</p>
<p>Project Type: Building Renovation</p>
</div>
</div>
</Col>
    </Row>

         </Container>
)
}
export default FirstSection;