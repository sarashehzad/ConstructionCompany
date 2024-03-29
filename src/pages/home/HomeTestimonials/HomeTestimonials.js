import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import line from "../../../assets/images/line.svg";
// import Button from "../../../components/Buttons/Button";
// import CustomAccordian from "../../../components/Accordian/accordian";
import TestimonialCard from "../../../components/Testimonial/testimonial";
import stars from "../../../assets/images/stars.svg";
import Clients from "../../../assets/images/Clients.svg";

function HomeTestimonials() {
  return (
    <Container
      fluid
      className="block-bg"
      //  style={{backgroundColor:'#F7F7F7'}}
    >
      <Row
        className="testimonial-sec"
        // style={{justifyContent:'space-evenly'}}
      >
        <div
          className="testimonial-headings"
          //  style={{textAlign:'center' , margin:'50px'}}
        >
          <h2 className="b-heading">Client Testimonials</h2>
          <img src={line} alt="Vector Image" className="vector-img" />
        </div>

        <Col
          className="t-1"
          lg={4}
          // style={{width:'311px' , height:'305px' , backgroundColor:'white', justifyContent:'center', margin:'10px'}}
        >
          <TestimonialCard
            imageSrc={stars}
            paragraphText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.”"
            headingText="John Smith"
          />
        </Col>
        <Col
          className="t-1"
          lg={4}
          // style={{width:'311px' , height:'305px' , backgroundColor:'white', margin:'10px'}}
        >
          <TestimonialCard
            imageSrc={stars}
            paragraphText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.”"
            headingText="John Smith"
          />
        </Col>
        <Col
          className="t-1"
          lg={4}
          // style={{width:'311px' , height:'305px' , backgroundColor:'white', margin:'10px'}}
        >
          <TestimonialCard
            imageSrc={stars}
            paragraphText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.”"
            headingText="John Smith"
          />
        </Col>

        <Col
          lg={8}
          md={7}
          sm={6}
          xs={6}
          className="logos-images"
          // style={{margin:'60px'}}
        >
          <img src={Clients} alt="Logos Image" className="logo-img" />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeTestimonials;
