import React from "react";
import "./project.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ImageCard from "../../../components/Card/ReuseableCard";
import image1 from "../../../assets/images/image1.svg";
import image2 from "../../../assets/images/image2.svg";
import image3 from "../../../assets/images/image3.svg";
// import BlackButton from "../../../components/Buttons/LearnMoreBtn";
import Button from "../../../components/Buttons/Button";

function LatestProject() {
  return (
    <Container>
      <div>
        <h2
          className="custom-h2"
          // style={{ textAlign: "center", fontWeight: "bold", margin: "36px" }}
        >
          Latest Projects
        </h2>
      </div>
      <Row
        className="imageCards-section"
        // style={{ justifyContent: "center" }}
      >
        <Col xl={3} lg={4} className="latest-project">
          <ImageCard
            imageSrc={image1}
            title="Project Title"
            text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
            buttonText="VIEW PROJECT"
            onClick={() => {
              /* handle click */
            }}
          />
        </Col>

        <Col xl={3} lg={4} className="latest-project">
          <ImageCard
            imageSrc={image2}
            title="Project Title"
            text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
            buttonText="VIEW PROJECT"
            onClick={() => {
              /* handle click */
            }}
          />
        </Col>

        <Col xl={3} lg={4} className="latest-project">
          <ImageCard
            imageSrc={image3}
            title="Project Title"
            text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
            buttonText="VIEW PROJECT"
            onClick={() => {
              /* handle click */
            }}
          />
        </Col>
      </Row>

      <div
        className=" view-all-btn"
        // style={{ display: "flex", margin: "32px", justifyContent: "center" }}
      >
        {/* <BlackButton onClick={() => console.log("Button clicked!")}>
          VIEW ALL
        </BlackButton> */}
        <Button
          style={{
            backgroundColor: "white",
            border: "5px solid black",
            padding: "10px 30px",
            fontWeight: "bold",
            color: "black",
          }}
          onClick={() => console.log("Button clicked!")}
          value="VIEW ALL"
        ></Button>
      </div>
    </Container>
  );
}

export default LatestProject;
