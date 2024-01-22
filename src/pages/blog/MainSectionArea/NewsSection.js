import React from "react";
import "./NewsSection.css";

import { Container, Container as Fluid } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import main from "../../../assets/images/main.svg";

function NewsSection() {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0" lg={12}>
          <div className="news-img">
            <div className="news-main-section-text">
              <h1 className="vectorr">News</h1>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NewsSection;
