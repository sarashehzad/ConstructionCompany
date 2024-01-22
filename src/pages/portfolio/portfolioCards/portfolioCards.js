import React from "react";
import "./portfolioCards.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ImageCard from "../../../components/Card/ReuseableCard";
import con4 from "../../../assets/images/con4.svg";
import con5 from "../../../assets/images/con5.svg";
import con6 from "../../../assets/images/con6.svg";

function PortfolioCards() {
  return (
    <Container>
      <Row
        className="porfolio-section-cards"
        //  style={{justifyContent:'center', marginTop:'78px'}}
      >
        <Col xl={3} lg={4} className="latest-project">
          <ImageCard
            imageSrc={con4}
            title="Service Title"
            text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
            buttonText="LEARN MORE"
            onClick={() => {
              /* handle click */
            }}
          />
        </Col>

        <Col xl={3} lg={4} className="latest-project">
          <ImageCard
            imageSrc={con5}
            title="Service Title"
            text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
            buttonText="LEARN MORE"
            onClick={() => {
              /* handle click */
            }}
          />
        </Col>

        <Col xl={3} lg={4} className="latest-project">
          <ImageCard
            imageSrc={con6}
            title="Service Title"
            text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
            buttonText="LEARN MORE"
            onClick={() => {
              /* handle click */
            }}
          />
        </Col>
      </Row>

      <Row
        className="porfolio-section-cards"
        // style={{justifyContent:'center' , marginTop:'50px'}}
      >
        <Col xl={3} lg={4} className="latest-project">
          <ImageCard
            imageSrc={con4}
            title="Service Title"
            text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
            buttonText="LEARN MORE"
            onClick={() => {
              /* handle click */
            }}
          />
        </Col>

        <Col xl={3} lg={4} className="latest-project">
          <ImageCard
            imageSrc={con5}
            title="Service Title"
            text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
            buttonText="LEARN MORE"
            onClick={() => {
              /* handle click */
            }}
          />
        </Col>

        <Col xl={3} lg={4} className="latest-project">
          <ImageCard
            imageSrc={con6}
            title="Service Title"
            text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
            buttonText="LEARN MORE"
            onClick={() => {
              /* handle click */
            }}
          />
        </Col>
      </Row>

      <Row
        className="porfolio-section-cards"
        //  style={{justifyContent:'center' ,  marginTop:'50px'}}
      >
        <Col xl={3} lg={4} className="latest-project">
          <ImageCard
            imageSrc={con4}
            title="Service Title"
            text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
            buttonText="LEARN MORE"
            onClick={() => {
              /* handle click */
            }}
          />
        </Col>

        <Col xl={3} lg={4} className="latest-project">
          <ImageCard
            imageSrc={con5}
            title="Service Title"
            text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
            buttonText="LEARN MORE"
            onClick={() => {
              /* handle click */
            }}
          />
        </Col>

        <Col xl={3} lg={4} className="latest-project">
          <ImageCard
            imageSrc={con6}
            title="Service Title"
            text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
            buttonText="LEARN MORE"
            onClick={() => {
              /* handle click */
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default PortfolioCards;
