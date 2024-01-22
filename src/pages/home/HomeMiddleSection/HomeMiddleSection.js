import React from "react";
import "./HomeMiddleSection.css";
import { Container, Container as Fluid } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import YellowBoxWithContent from "../../../components/Box/ReuableBox";

import Button from "../../../components/Buttons/Button";
import whiteArrow from "../../../assets/images/whiteArrow.svg";

function HomeMiddleSection() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            className="homeMiddleSection"
            // style={{marginTop:'40px', backgroundColor:'#FFB400'}}
            lg={4}
          >
            <div className="home-middle-sec-custom-p">
              <h4
                className="homeMiddleSectionHeading"
                // style={{ fontWeight: "bold" , margin: "1px 10px" , padding: "17px 11px" }}
              >
                Only the Best
              </h4>
              <div
                className="homeMiddleSectionContentBox"
                // style={{padding:'0px 3px'}}
              >
                <YellowBoxWithContent
                  logo={whiteArrow}
                  title="Eco Friendly Construction"
                  content="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
                />
              </div>
              <div
                className="homeMiddleSectionContentBox"
                //   style={{padding:'0px 3px'}}
              >
                <YellowBoxWithContent
                  logo={whiteArrow}
                  title="The Newest Technology Repairs"
                  content="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
                />
              </div>
              <div
                className="homeMiddleSectionContentBox"
                //    style={{padding:'0px 3px'}}
              >
                <YellowBoxWithContent
                  logo={whiteArrow}
                  title="High Quality Construction Management"
                  content="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
                />
              </div>
            </div>
          </Col>

          <Col lg={8} className="p-0 home-cutom-middle-section">
            <Row
              className="project-p mt-5 p-0"
              // style={{margin: '13px'}}
            >
              <h2 className="b-heading">No Project Too Big Or Too Small</h2>

              <Col lg={6} className="home-custom-paragraph">
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.
                  Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque
                  lorem posuere iaculis nunc amet phasellus.
                </p>

                <p className="text-secondary mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.{" "}
                </p>
              </Col>
              <Col lg={6} className="home-custom-paragraph-1">
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.
                  Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque
                  lorem posuere iaculis nunc amet phasellus.
                </p>
              </Col>
            </Row>

            <Row
              className="m-0"
              //  style={{margin: '0px'}}
            >
              <Col className="p-0">
                <div
                  // style={{display:'flex', justifyContent:'space-evenly'}}
                  className="black-bg-1"
                >
                  <h3
                    className="b-heading mt-3 mb-3"
                    // style={{ fontWeight: 'bold' , margin:'17px 0px'}}
                  >
                    Get Free Consultation
                  </h3>
                  <Button
                    style={{
                      color: "#FFB400",
                      padding: "8px 55px",
                      border: "4px solid #FFB400",
                      backgroundColor: "#2A2A2A",
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
    </>
  );
}
export default HomeMiddleSection;
