import React from "react";
import "./ServicesBlockSection.css";
import { Container, Container as Fluid } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import line from "../../../assets/images/line.svg";
import Blocks from "../../../components/Block/Block";
import Button from "../../../components/Buttons/Button";

function ServicesBlockSection() {
  return (
    <>
      <Container fluid>
        <Row
          className="services-block-section"
          //  style={{justifyContent:'end'}}
        >
          <Col
            lg={9}
            className="block-bg"
            // style={{ backgroundColor:'#F7F7F7'}}
          >
            <Blocks
              style={{ padding: " 25px 42px" }}
              heading="Building Construction"
              imageSrc={line}
              paragraphText="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. "
            />
            <Row
              className="services-block-section-2"
              //   style={{justifyContent:'center'}}
            >
              <Col lg={3}>
                <ul
                  className="main-list"
                  // style={{marginBottom:'52px'}}
                >
                  <li className="list-p">Lectus erat consectetur</li>
                  <li className="list-p">Eu sapien eget</li>
                  <li className="list-p">Rhoncus consectetur</li>
                  <li className="list-p">Proin cursus</li>
                  <li className="list-p">Dolor a mollis consectetur</li>
                </ul>
              </Col>
              <Col
                lg={3}
                className="m-100"
                // style={{margin:' 0px 100px'}}
              >
                <ul className="main-list">
                  <li className="list-p">Risus dolor fermentum</li>
                  <li className="list-p">Massa a commodo</li>
                  <li className="list-p">Elit dui sit amet risus</li>
                  <li className="list-p">Maecenas ornare</li>
                  <li className="list-p">Nisl a tortor ultrices</li>
                </ul>
              </Col>
              <Col lg={3}>
                <ul className="main-list">
                  <li className="list-p">Bibendum nulla fermentum</li>
                  <li className="list-p">Metus quis sodales</li>
                  <li className="list-p">Tristique augue mauris</li>
                  <li className="list-p">Molestie augue non</li>
                  <li className="list-p">Feugiat ligula neque</li>
                </ul>
              </Col>

              <Row
                className="p-0 m-0"
                // style={{margin: '0px', padding:'0px'}}
              >
                <Col className="p-0">
                  <div className="custom-black-bg">
                    <Button
                      style={{
                        color: "white",
                        padding: "10px 40px",
                        backgroundColor: "#2A2A2A",
                        border: "4px solid white",
                        fontWeight: "bold",
                      }}
                      onClick={() => console.log("Button clicked!")}
                      value="GET A QUOTE"
                    ></Button>
                  </div>
                </Col>
                <Col className="p-0">
                  <div className="custom-yellow-bg">
                    <Button
                      style={{
                        color: "white",
                        padding: "10px 40px",
                        backgroundColor: "#FFB400",
                        border: "4px solid white",
                        fontWeight: "bold",
                      }}
                      onClick={() => console.log("Button clicked!")}
                      value="LEARN MORE"
                    ></Button>
                  </div>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row
          className="services-block-section-3"
          //  style={{justifyContent:'start'}}
        >
          <Col lg={9}>
            <Blocks
              style={{ margin: "40px" }}
              heading="Repairs & Installations"
              imageSrc={line}
              paragraphText="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. "
            />
            <Row
              className="sevices-block-section-2"
              //   style={{justifyContent:'center'}}
            >
              <Col lg={3}>
                <ul
                  className="main-list"
                  // style={{marginBottom:'52px'}}
                >
                  <li className="list-p">Lectus erat consectetur</li>
                  <li className="list-p">Eu sapien eget</li>
                  <li className="list-p">Rhoncus consectetur</li>
                  <li className="list-p">Proin cursus</li>
                  <li className="list-p">Dolor a mollis consectetur</li>
                </ul>
              </Col>
              <Col lg={3} className="m-100">
                <ul className="main-list">
                  <li className="list-p">Risus dolor fermentum</li>
                  <li className="list-p">Massa a commodo</li>
                  <li className="list-p">Elit dui sit amet risus</li>
                  <li className="list-p">Maecenas ornare</li>
                  <li className="list-p">Nisl a tortor ultrices</li>
                </ul>
              </Col>
              <Col lg={3}>
                <ul
                  className="main-list"
                  // style={{marginBottom:'52px'}}
                >
                  <li className="list-p">Bibendum nulla fermentum</li>
                  <li className="list-p">Metus quis sodales</li>
                  <li className="list-p">Tristique augue mauris</li>
                  <li className="list-p">Molestie augue non</li>
                  <li className="list-p">Feugiat ligula neque</li>
                </ul>
              </Col>

              <Row
                className="p-0 m-0"
                //  style={{margin: '0px', padding:'0px'}}
              >
                <Col className="p-0">
                  <div className="custom-black-bg">
                    <Button
                      style={{
                        color: "white",
                        padding: "10px 40px",
                        backgroundColor: "#2A2A2A",
                        border: "4px solid white",
                        fontWeight: "bold",
                      }}
                      onClick={() => console.log("Button clicked!")}
                      value="GET A QUOTE"
                    ></Button>
                  </div>
                </Col>
                <Col className="p-0">
                  <div className="custom-yellow-bg">
                    <Button
                      style={{
                        color: "white",
                        padding: "10px 40px",
                        backgroundColor: "#FFB400",
                        border: "4px solid white",
                        fontWeight: "bold",
                      }}
                      onClick={() => console.log("Button clicked!")}
                      value="LEARN MORE"
                    ></Button>
                  </div>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row
          className="services-block-section"
          // style={{justifyContent:'end'}}
        >
          <Col lg={9} style={{ backgroundColor: "#F7F7F7" }}>
            <Blocks
              style={{ margin: "40px" }}
              heading="Custom Design Projects"
              imageSrc={line}
              paragraphText="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. "
            />
            <Row
              className="sevices-block-section-2"
              style={{ justifyContent: "center" }}
            >
              <Col lg={3}>
                <ul className="main-list">
                  <li className="list-p">Lectus erat consectetur</li>
                  <li className="list-p">Eu sapien eget</li>
                  <li className="list-p">Rhoncus consectetur</li>
                  <li className="list-p">Proin cursus</li>
                  <li className="list-p">Dolor a mollis consectetur</li>
                </ul>
              </Col>
              <Col lg={3} className="m-100">
                <ul className="main-list">
                  <li className="list-p">Risus dolor fermentum</li>
                  <li className="list-p">Massa a commodo</li>
                  <li className="list-p">Elit dui sit amet risus</li>
                  <li className="list-p">Maecenas ornare</li>
                  <li className="list-p">Nisl a tortor ultrices</li>
                </ul>
              </Col>
              <Col lg={3}>
                <ul className="main-list">
                  <li className="list-p">Bibendum nulla fermentum</li>
                  <li className="list-p">Metus quis sodales</li>
                  <li className="list-p">Tristique augue mauris</li>
                  <li className="list-p">Molestie augue non</li>
                  <li className="list-p">Feugiat ligula neque</li>
                </ul>
              </Col>

              <Row
                className="p-0 m-0"
                // style={{margin: '0px', padding:'0px'}}
              >
                <Col className="p-0">
                  <div className="custom-black-bg">
                    <Button
                      style={{
                        color: "white",
                        padding: "10px 40px",
                        backgroundColor: "#2A2A2A",
                        border: "4px solid white",
                        fontWeight: "bold",
                      }}
                      onClick={() => console.log("Button clicked!")}
                      value="GET A QUOTE"
                    ></Button>
                  </div>
                </Col>
                <Col className="p-0">
                  <div className="custom-yellow-bg">
                    <Button
                      style={{
                        color: "white",
                        padding: "10px 40px",
                        backgroundColor: "#FFB400",
                        border: "4px solid white",
                        fontWeight: "bold",
                      }}
                      onClick={() => console.log("Button clicked!")}
                      value="LEARN MORE"
                    ></Button>
                  </div>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default ServicesBlockSection;
