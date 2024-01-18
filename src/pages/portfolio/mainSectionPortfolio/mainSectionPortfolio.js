import React from "react";
import "./mainSectionPortfolio.css";
import { Container, Container as Fluid } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";





function PortfolioMain() {
    return(
    <Container fluid className="p-0 m-0">
   <Row>
   <Col lg={12}>
 <div className="portfolio-img">
  <div className="main-section-portfolio">
    <h1 style={{color:'white', fontWeight:'800'}} className="vectorr">Our Construction <br/> Projects</h1>
    <p style={{color:'white', marginTop:'30px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis <br/> egestas pellentesque libero dolor in diam consequat ut. </p>
  </div>
</div>

   </Col>
    {/* <Col className="p-0" lg={12}>
<img src={portfolio} alt="Container Image" className="construction-img" /> 
<div className="text-overlay-3">
<h1 className="vector" style={{ fontWeight: "bold" }}>Our Construction <br/> Projects</h1>
<p style={{margin: "43px 0px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.</p>

</div>

    </Col> */}

   </Row>

        </Container>
    )

}

export default PortfolioMain;

