import React from "react";
import { Container} from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ImageCard from "../../../components/Card/ReuseableCard";
import project4 from '../../../assets/images/project4.svg';
import project5 from '../../../assets/images/project5.svg';
import project3 from '../../../assets/images/project3.svg';
import BlackButton from "../../../components/Buttons/LearnMoreBtn";
import line from '../../../assets/images/line.svg';

function ServicesLatestProject(){
    return(
        <Container>
        <div style={{textAlign:'center', marginTop:'56px' }}>
            <h2 style={{ fontWeight: 'bold'}}>Latest Projects</h2>
            <img style={{margin:'25px 0px'}} src={line} alt="vector-img" className="vectr-img"></img>

</div>
<Row style={{justifyContent:'center'}}>
<Col xl={3} lg ={4} className="latest-project">
            <ImageCard 
  imageSrc={project5}
  title="Service Title"
  text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
  buttonText="VIEW PROJECT"
  onClick={() => { /* handle click */ }}
/>
</Col>

<Col xl={3} lg ={4} className="latest-project">
            <ImageCard
  imageSrc ={project4}
  title="Service Title"
  text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
  buttonText="VIEW PROJECT"
  onClick={() => { /* handle click */ }}
/>
</Col>

<Col xl={3} lg ={4} className="latest-project">
            <ImageCard
  imageSrc={project3}
  title="Service Title"
  text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
  buttonText="VIEW PROJECT"
  onClick={() => { /* handle click */ }}
/>
</Col>
 

</Row>

<div style={{display: 'flex', margin: '55px' , justifyContent:'center'}}>

<BlackButton onClick={() => console.log("Button clicked!")}>VIEW ALL</BlackButton>
</div>
        </Container>
        
    )
}

export default ServicesLatestProject;