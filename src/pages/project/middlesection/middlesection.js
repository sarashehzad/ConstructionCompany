import React from "react";
import "./middlesection.css";
import { Container, Container as Fluid } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import line from "../../../assets/images/line.svg";
import con1 from "../../../assets/images/con1.svg";
import con2 from "../../../assets/images/con2.svg";
import con3 from "../../../assets/images/con3.svg";

function AboutProject() {
  return (
    <Container>
      <Row style={{ justifyContent: "center", marginTop: "69px" }}>
        <Col lg={6}>
          <h2
            className="b-heading"
            //  style={{fontWeight:'bold'}}
          >
            About this Project
          </h2>
          <img src={line} alt="Vector Image" className="vector-img" />
          <p
            className="projectSectionCustomMargin"
            // style={{marginTop:'17px'}}
          >
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus.
          </p>
          <ul>
            <li>Maecenas ornare nisl</li>
            <li> A tortor ultrices bibendum</li>
            <li> Nulla fermentum</li>
            <li> Metus quis</li>
            <li> Sodales tristique</li>
          </ul>
        </Col>

        <Col lg={4}>
          <img src={con1} alt="Vector Image" className="construction-img" />
        </Col>
        <Col lg={10} style={{ margin: "50px" }}>
          <img src={con2} alt="Vector Image" className="construction-img" />
        </Col>
        <Row style={{ justifyContent: "center" }}>
          <Col lg={3}>
            <img src={con3} alt="Vector Image" className="construction-img" />
          </Col>
          <Col lg={7} className="project-middle-sec-custom-p">
            <p>
              Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
              erat, consectetur eu sapien eget rhoncus consectetur sem.
            </p>
            <p>
              {" "}
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum. Nulla fermentum, metus quis sodales
              tristique, augue mauris molestie augue non feugiat ligula neque
              nec felis.
            </p>

            <p>
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum. Nulla fermentum, metus quis sodales
              tristique, augue mauris molestie augue, non feugiat ligula neque
              nec felis.
            </p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
export default AboutProject;
