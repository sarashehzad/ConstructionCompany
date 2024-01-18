import React from "react";
import "./details.css";
import { Container} from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import building from '../../../assets/images/building.svg'
import BlackButton from "../../../components/Buttons/LearnMoreBtn";

function Details(){
    return (
        <Container fluid>
            <Row className="custom-bg">
                <Col className="p-0" lg={3}  >
                <img src={building} alt="Building Image" className="building-img" /> 
                
                </Col>


                <Col lg={9} className="p-0">
                    <Row className="mt-5 p-0" style={{margin: '13px'}}>
                        <h2 style={{ fontWeight: "bold" }}>No Project Too Big Or Too Small</h2>

                        <Col className="detail-sec" lg={6}>
                     <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.</p>


                    <p className="text-secondary mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.  </p>
                    </Col>
                    <Col className="detail-sec-1" lg={6}>
                        <p className="text-secondary" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.</p>
                       <div className="custom-m">
                        <BlackButton onClick={() => console.log("Button clicked!")}>LEARN MORE</BlackButton>
</div>


                        </Col>


                    </Row>

                   
                    <Row style={{margin: '0px'}}>
<Col lg={6} className="p-0">
    <div className="yellow-bg">
        <h3 style={{ fontWeight: 'bold'}}>12</h3>
        <p style={{ fontWeight: 'bold'}}>YEARS ESTABLISHED</p>
    </div>
</Col>
<Col lg={6} className="p-0">
<div className="black-bg">
        <h3 style={{ fontWeight: 'bold'}}>250</h3>
        <p style={{ fontWeight: 'bold'}}>COMPLETED PROJECTS</p>
    </div>
</Col>
</Row>
                </Col>

                

            </Row>
            </Container>
    )
}

export default Details;