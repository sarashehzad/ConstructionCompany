import React from "react";
import './ServiceQuestionSection.css';
import { Container} from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import line from '../../../assets/images/line.svg'
import Button from "../../../components/Buttons/Button";
import CustomAccordian from "../../../components/Accordian/accordian";

function ServiceQuestionSection(){
    return(
<Container fluid style={{backgroundColor:'#F7F7F7'}}>
    <Row style={{justifyContent:'center'}}>
<Col lg={4} className="text-md-center-service">
    <h2 style={{fontWeight:'bold', marginTop:'70px', marginBottom:'12px'}}>F.A.Q.</h2>

    <img src={line} alt="Vector Image" className="vector-img" /> 
    <p style={{color: '#666666', margin:'30px 0px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. </p>
    <div>
    <Button style={{color:'#FFB400', padding:'10px 25px' , backgroundColor:'white', border: "4px solid #FFB400",  }} onClick={() => console.log("Button clicked!")} value="GET IN TOUCH"></Button>
    </div>
</Col>

<Col style={{marginTop:'93px' , marginLeft:'26px' , marginBottom:'80px'}} lg={5} md={11} sm={10} xs={10}>
<CustomAccordian title="Donec rutrum congue leo eget malesuada?" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. " />

<CustomAccordian title="Vivamus suscipit tortor eget felis porttitor volutpat?" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. " />

<CustomAccordian title="Curabitur non nulla sit amet nisl tempus?" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. " />

<CustomAccordian title="Pellentesque in ipsum id orci porta dapibus?" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. " />

<CustomAccordian title="Curabitur non nulla sit amet nisl?" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. " />
</Col>
    </Row>

    
</Container>
    )
}

export default ServiceQuestionSection;