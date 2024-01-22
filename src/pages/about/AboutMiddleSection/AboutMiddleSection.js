import React from "react";
import "./AboutMiddleSection.css";
import { Container, Container as Fluid } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import YellowBoxWithContent from "../../../components/Box/ReuableBox";
import DoubleArrow from "../../../assets/images/DoubleArrow.svg";
import Button from "../../../components/Buttons/Button";
import tower from "../../../assets/images/tower.svg";

function AboutMiddleSection() {
  return (
    <>
      <Container
        fluid
        className="block-bg"
        // style={{backgroundColor:'#F7F7F7'}}
      >
        <Row>
          <Col
            className="aboutMiddleSectionContent"
            // style={{marginTop:'97px'}}
            lg={4}
          >
            <div>
              <h4
                className="aboutMiddleSectionContentHeading"
                //  style={{ fontWeight: "bold" , margin: "1px 10px" , padding: "17px 11px" }}
              >
                Only the Best
              </h4>
              <div
                className="aboutMiddleSectionContentBox"
                // style={{padding:'17px 8px'}}
              >
                <YellowBoxWithContent
                  logo={DoubleArrow}
                  title="Eco Friendly Construction"
                  content="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
                />
              </div>
              <div
                className="aboutMiddleSectionContentBox"
                //    style={{padding:'17px 8px'}}
              >
                <YellowBoxWithContent
                  logo={DoubleArrow}
                  title="The Newest Technology Repairs"
                  content="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
                />
              </div>
              <div
                className="aboutMiddleSectionContentBox"
                //    style={{padding:'17px 8px'}}
              >
                <YellowBoxWithContent
                  logo={DoubleArrow}
                  title="High Quality Construction Management"
                  content="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
                />
              </div>
              <div
                className="aboutMiddleSectionContentButton"
                //    style={{marginTop:'40px', marginRight:'30px' , display:'flex', justifyContent:'end'}}
              >
                <Button
                  style={{
                    color: "#FFB400",
                    padding: "10px 40px",
                    border: "4px solid #FFB400",
                    fontWeight: "bold",
                    backgroundColor: "#F7F7F7",
                  }}
                  onClick={() => console.log("Button clicked!")}
                  value="FREE QUOTE"
                ></Button>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <Col lg={12}>
              <img src={tower} className="tower-img"></img>
            </Col>

            <Row
              className="m-0"
              // style={{margin: '0px'}}
            >
              <Col lg={6} className="p-0">
                <div className="yellow-bg">
                  <h3 className="b-heading">12</h3>
                  <p className="b-heading">YEARS ESTABLISHED</p>
                </div>
              </Col>
              <Col lg={6} className="p-0">
                <div className="black-bg">
                  <h3 className="b-heading">250</h3>
                  <p className="b-heading">COMPLETED PROJECTS</p>
                </div>
              </Col>
            </Row>

            <Row
              className="m-0"
              // style={{margin: '0px'}}
            >
              <Col lg={6} className="p-0">
                <div
                  className="aboutSectionBoxes mt-4 mb-2"
                  // style={{margin:'8px 0px' , textAlign:'center'}}
                >
                  <h3 className="b-heading">24</h3>
                  <p className="b-heading">FIELD WORKERS</p>
                </div>
              </Col>
              <Col lg={6} className="p-0">
                <div
                  className="aboutSectionBoxes mt-4 mb-2"
                  //  style={{margin:'8px 0px' , textAlign:'center'}}
                >
                  <h3 className="b-heading">18</h3>
                  <p className="b-heading">OFFICE STAFF</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row
          className="mt-5"
          // style={{marginTop:'65px'}}
        >
          <div
            className="text-center"
            //  style={{textAlign:'center'}}
          >
            <h3 className="b-heading">
              “Suspendisse neque erat, imperdiet <br /> ac non, sollicitudin
              accumsan lacus.
              <br /> Vestibulum ac ex rutrum,
              <br /> pellentesque purus et, lacinia mi.
              <br /> Nullam maximus lectus libero.”
            </h3>
            <p
              className="text-secondary mt-5 mb-5"
              // style={{color:'#666666' , marginTop:'30px' , marginBottom:'65px'}}
            >
              JOHN SMITH – CEO
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
}
export default AboutMiddleSection;
