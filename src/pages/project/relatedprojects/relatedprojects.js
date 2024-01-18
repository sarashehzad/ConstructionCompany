import React from "react";
import "./relatedprojects.css";
import { Container} from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ImageCard from "../../../components/Card/ReuseableCard";
import con4 from '../../../assets/images/con4.svg';
import con5 from '../../../assets/images/con5.svg';
import con6 from '../../../assets/images/con6.svg';
import Button from "../../../components/Buttons/Button";
import line from '../../../assets/images/line.svg';

function RelatedProject(){
    return(
        <Container>
        <div style={{textAlign:'center',  margin:'36px'}}>
            <h2 style={{ fontWeight: 'bold'}}>Related Projects</h2>
            <img src={line} alt="Vector Image" className="vector-img" /> 

</div>
<Row style={{justifyContent:'center'}}>
<Col lg ={3} className="latest-project">
            <ImageCard 
  imageSrc={con4}
  title="Service Title"
  text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
  buttonText="LEARN MORE"
  onClick={() => { /* handle click */ }}
/>
</Col>

<Col lg ={3} className="latest-project">
            <ImageCard
  imageSrc ={con5}
  title="Service Title"
  text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
  buttonText="LEARN MORE"
  onClick={() => { /* handle click */ }}
/>
</Col>

<Col lg ={3} className="latest-project">
            <ImageCard
  imageSrc={con6}
  title="Service Title"
  text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
  buttonText="LEARN MORE"
  onClick={() => { /* handle click */ }}
/>
</Col>
 

</Row>

<div style={{display: 'flex', margin: '32px' , justifyContent:'center'}}>

<Button style={{color:'black', padding:'10px 40px' , backgroundColor:'white', border: "4px solid black", fontWeight:'bold'  }} onClick={() => console.log("Button clicked!")} value="VIEW ALL"></Button>
</div>
        </Container>
        
    )
}

export default RelatedProject;