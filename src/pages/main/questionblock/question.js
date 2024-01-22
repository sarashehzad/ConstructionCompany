import React from "react";
import "./question.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import line from "../../../assets/images/line.svg";
import Button from "../../../components/Buttons/Button";
import CustomAccordian from "../../../components/Accordian/accordian";
import TestimonialCard from "../../../components/Testimonial/testimonial";
import stars from "../../../assets/images/stars.svg";
import Clients from "../../../assets/images/Clients.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function QuestionBlock() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Container fluid className="block-bg"
    // style={{ backgroundColor: "#F7F7F7" }}
    >
      <Row className="services-block-section-2"
      // style={{ justifyContent: "center" }}
      >
        <Col lg={4} className="question-sec">
          <h2
            className="questionSectionHeading"
            // style={{fontWeight:'bold', marginTop:'70px', marginBottom:'33px'}}
          >
            Let’s Build
            <br />
            Something <br />
            Together
          </h2>

          <img src={line} alt="Vector" className="vector-img" />
          <p
            className="questionSectionParagrapgh"
            // style={{color: '#666666', margin:'30px 0px'}}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
            dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut
            quam sed mauris proin feugiat.{" "}
          </p>
          <div>
            <Button
              style={{
                color: "#FFB400",
                padding: "10px 25px",
                backgroundColor: "white",
                border: "4px solid #FFB400",
              }}
              onClick={() => console.log("Button clicked!")}
              value="GET IN TOUCH"
            ></Button>
          </div>
        </Col>

        <Col
          className="accordians"
          // style={{marginTop:'93px' , marginLeft:'26px'}}
          lg={5}
          md={11}
          sm={10}
          xs={10}
        >
          <CustomAccordian
            title="Donec rutrum congue leo eget malesuada?"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. "
          />

          <CustomAccordian
            title="Vivamus suscipit tortor eget felis porttitor volutpat?"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. "
          />

          <CustomAccordian
            title="Curabitur non nulla sit amet nisl tempus?"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. "
          />

          <CustomAccordian
            title="Pellentesque in ipsum id orci porta dapibus?"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. "
          />

          <CustomAccordian
            title="Curabitur non nulla sit amet nisl?"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. "
          />
        </Col>
      </Row>

      <Row
        className="testimonial-sec"
        // style={{justifyContent:'space-evenly'}}
      >
        <div
          className="testimonial-headings"
          // style={{textAlign:'center' , margin:'50px'}}
        >
          <h2 className="b-heading">Client Testimonials</h2>
          <img src={line} alt="Vector" className="vector-img" />
        </div>
        <Slider
          {...sliderSettings}
          className="slider-setting"
          // style={{ width: '81%' , display:'flex', justifyContent:'center'}}
        >
          <Col
            className="t-1"
            lg={4}
            //  style={{width:'311px' , height:'305px' , backgroundColor:'white', justifyContent:'center'}}
          >
            <TestimonialCard
              imageSrc={stars}
              paragraphText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.”"
              headingText="John Smith"
            />
          </Col>

          <Col
            className="t-1"
            //  lg={4} style={{width:'311px' , height:'305px' , backgroundColor:'white'}}
          >
            <TestimonialCard
              className="t-1"
              imageSrc={stars}
              paragraphText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.”"
              headingText="John Smith"
            />
          </Col>
          <Col
            className="t-1"
            //  lg={4} style={{width:'311px' , height:'305px' , backgroundColor:'white'}}
          >
            <TestimonialCard
              imageSrc={stars}
              paragraphText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.”"
              headingText="John Smith"
            />
          </Col>

          <Col
            className="t-1"
            // className="t-1" lg={4} style={{width:'311px' , height:'305px' , backgroundColor:'white', justifyContent:'center'}}
          >
            <TestimonialCard
              imageSrc={stars}
              paragraphText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.”"
              headingText="John Smith"
            />
          </Col>
        </Slider>
        <Col
          lg={8}
          md={7}
          sm={6}
          xs={6}
          className="logos-images"
          // style={{margin:'60px'}}
        >
          <img src={Clients} alt="Logos" className="logo-img" />
        </Col>
      </Row>
    </Container>
  );
}

export default QuestionBlock;
