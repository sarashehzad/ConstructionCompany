import React from "react";
import './ServiceMiddleSection.css'
import { Container} from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from "../../../components/Buttons/Button";
import line from '../../../assets/images/line.svg';


function ServiceAboutUs(){
    return(
        <Container fluid>
        <Row>
            <Col className="middle-sec-custom-p" lg={4} >
            <h2 style={{fontWeight:'bold'}}>About Process</h2>

            <img src={line} alt="line Image" className="vector-img" /> 
            <p style={{margin: '18px 0px'}}>Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. </p>
            <ul>
<li> Maecenas ornare nisl</li>
<li> A tortor ultrices bibendum</li>
<li>Nulla fermentum</li>
<li>Metus quis</li>
<li>Sodales tristique</li>
</ul>
          
           </Col>

            <Col lg={8} style={{padding:'0px'}}>
       <div style={{height:'500px'}}>
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/IjlYXtI2-GU?si=1-Vcy0WeGx9JrA5B"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<Row style={{margin: '0px'}}>
<Col lg={6} className="p-0">
    <div className="yellow-bg">
        <h3 style={{ fontWeight: 'bold'}}>Call for a Quote</h3>
        <p style={{ fontWeight: 'bold'}}>(346) 234-6973</p>
    </div>
</Col>
<Col lg={6} className="p-0">
<div style={{ display: 'flex',padding: '29px 0px', justifyContent:'center'}}>
<Button style={{color:'black', padding:'10px 25px' , backgroundColor:'white', border: "4px solid black",  }} onClick={() => console.log("Button clicked!")} value="ONLINE ESTIMATE FORM"></Button>
            </div>
</Col>
</Row>
            </Col>

            
        </Row>

        </Container>
    )
}
export default ServiceAboutUs;