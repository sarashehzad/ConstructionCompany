import React from "react";
import "./HomeMainSection.css";
import { Container, Container as Fluid } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import YellowBoxWithContent from "../../../components/Box/ReuableBox";
import home1 from "../../../assets/images/home1.svg";
import home2 from "../../../assets/images/home2.svg";
import home3 from "../../../assets/images/home3.svg";
import home4 from "../../../assets/images/home4.svg";
import home5 from "../../../assets/images/home5.svg";
import home6 from "../../../assets/images/home6.svg";
import Button from "../../../components/Buttons/Button";

import line from "../../../assets/images/line.svg";

function HomeMainSection() {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0" lg={12}>
          <div className="home-img">
            <div className="home-main-section-text">
              <img src={line} alt="Vector Image" className="vector-img" />
              <h1 className="b-heading mb-3">Construction Inc</h1>
              <p
                className="mt-3 mb-3"
                // style={{margin:'20px 0px'}}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                lectus erat <br /> consectetur eu sapien eget, rhoncus
                consectetur sem.{" "}
              </p>
              <Button
                style={{
                  color: "white",
                  padding: "10px 40px",
                  backgroundColor: "#FFB400",
                  border: "none",
                  fontWeight: "bold",
                }}
                onClick={() => console.log("Button clicked!")}
                value="VIEW OUR WORK"
              ></Button>
            </div>
          </div>
        </Col>
      </Row>

      <Row
        className="homeMainSectionContent"
        // style={{justifyContent:'center', marginTop:'40px'}}
      >
        <Col lg={3}>
          <YellowBoxWithContent
            logo={home1}
            title="Building Construction"
            content="Lorem ipsum dolor sit consectetur adipiscing elit."
          />
        </Col>
        <Col lg={3}>
          <YellowBoxWithContent
            logo={home2}
            title="Building Construction"
            content="Lorem ipsum dolor sit consectetur adipiscing elit."
          />
        </Col>
        <Col lg={3}>
          <YellowBoxWithContent
            logo={home3}
            title="Building Construction"
            content="Lorem ipsum dolor sit consectetur adipiscing elit."
          />
        </Col>
      </Row>

      <Row
        className="homeMainSectionContent-2"
        // style={{justifyContent:'center', marginTop:'26px' , marginBottom:'50px'}}
      >
        <Col lg={3}>
          <YellowBoxWithContent
            logo={home4}
            title="Building Construction"
            content="Lorem ipsum dolor sit consectetur adipiscing elit."
          />
        </Col>
        <Col lg={3}>
          <YellowBoxWithContent
            logo={home5}
            title="Building Construction"
            content="Lorem ipsum dolor sit consectetur adipiscing elit."
          />
        </Col>
        <Col lg={3}>
          <YellowBoxWithContent
            logo={home6}
            title="Building Construction"
            content="Lorem ipsum dolor sit consectetur adipiscing elit."
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeMainSection;
