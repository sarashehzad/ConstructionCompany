import React from "react";
import "./project.css";
import { Container} from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ImageCard from "../../../components/Card/ReuseableCard";
import image1 from '../../../assets/images/image1.svg';
import image2 from '../../../assets/images/image2.svg';
import image3 from '../../../assets/images/image3.svg';
import BlackButton from "../../../components/Buttons/LearnMoreBtn";

function LatestProject(){
    return(
        <Container>
        <div>
            <h2 style={{textAlign:'center' , fontWeight: 'bold', margin:'36px'}}>Latest Projects</h2>

</div>
<Row style={{justifyContent:'center'}}>
<Col xl={3} lg ={4} className="latest-project">
            <ImageCard 
  imageSrc={image1}
  title="Project Title"
  text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
  buttonText="VIEW PROJECT"
  onClick={() => { /* handle click */ }}
/>
</Col>

<Col xl={3} lg ={4} className="latest-project">
            <ImageCard
  imageSrc ={image2}
  title="Project Title"
  text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
  buttonText="VIEW PROJECT"
  onClick={() => { /* handle click */ }}
/>
</Col>

<Col xl={3} lg ={4} className="latest-project">
            <ImageCard
  imageSrc={image3}
  title="Project Title"
  text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
  buttonText="VIEW PROJECT"
  onClick={() => { /* handle click */ }}
/>
</Col>
 

</Row>

<div style={{display: 'flex', margin: '32px' , justifyContent:'center'}}>

<BlackButton onClick={() => console.log("Button clicked!")}>VIEW ALL</BlackButton>
</div>
        </Container>
        
    )
}

export default LatestProject;