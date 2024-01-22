import React from "react";
import "./about.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from "../../../components/Buttons/Button";
import line from "../../../assets/images/line.svg";

function AboutUs() {
  return (
    <Container fluid>
      <Row>
        <Col
          lg={4}
          // style={{backgroundColor:'#2A2A2A', color:'white' , padding: '51px 27px', height:'606px'}}
          className="about-sec"
        >
          <h2 className="b-heading">
            We’ve Been <br /> Building For Over <br /> 10 Years
          </h2>

          <img src={line} alt="line Image" className="vector-img" />
          <p
            className="custom-margin-p"
            // style={{margin: '42px 0px'}}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
            dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut
            quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis
            nunc amet phasellus.
          </p>
          <div>
            <Button
              style={{
                color: "#FFB400",
                padding: "10px 25px",
                backgroundColor: "#2A2A2A",
                border: "4px solid #FFB400",
              }}
              onClick={() => console.log("Button clicked!")}
              value="LEARN MORE"
            ></Button>
          </div>
        </Col>

        <Col lg={8} style={{ padding: "0px" }}>
          <div
            className="video-link"
            //    style={{height:'500px'}}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/4BzjUq921Y4?si=ciRbHYyph-HtZ7H2"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <Row className="m-0">
            <Col lg={6} className="p-0">
              <div className="yellow-bg">
                <h3 className="b-heading">Call for a Quote</h3>
                <p className="b-heading">(346) 234-6973</p>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div
                className="online-estimate-btn"
                //  style={{ display: 'flex',padding: '29px 0px', justifyContent:'center'}}
              >
                <Button
                  style={{
                    color: "black",
                    padding: "10px 25px",
                    backgroundColor: "white",
                    border: "4px solid black",
                  }}
                  onClick={() => console.log("Button clicked!")}
                  value="ONLINE ESTIMATE FORM"
                ></Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default AboutUs;
