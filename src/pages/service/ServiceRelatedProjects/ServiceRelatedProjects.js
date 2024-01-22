import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ImageCard from "../../../components/Card/ReuseableCard";
import project1 from "../../../assets/images/project1.svg";
import project2 from "../../../assets/images/project2.svg";
import project3 from "../../../assets/images/project3.svg";
// import BlackButton from "../../../components/Buttons/LearnMoreBtn";
import Button from "../../../components/Buttons/Button";
import line from "../../../assets/images/line.svg";

function ServiceRelatedProjects() {
  return (
    <Container>
      <div
        className="custom-h2"
        //  style={{textAlign:'center',  margin:'36px' }}
      >
        <h2 className="b-heading mt-5">Latest Projects</h2>
        <img src={line} alt="Vector-img" className="vector-img"></img>
      </div>
      <Row
        className="imageCards-section"
        //  style={{justifyContent:'center'}}
      >
        <Col xl={3} lg={4} className="latest-project">
          <ImageCard
            imageSrc={project1}
            title="Service Title"
            text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
            buttonText="VIEW PROJECT"
            onClick={() => {
              /* handle click */
            }}
          />
        </Col>

        <Col xl={3} lg={4} className="latest-project">
          <ImageCard
            imageSrc={project2}
            title="Service Title"
            text="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas."
            buttonText="VIEW PROJECT"
            onClick={() => {
              /* handle click */
            }}
          />
        </Col>

        <Col xl={3} lg={4} className="latest-project">
          <ImageCard
            imageSrc={project3}
            title="Service Title"
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
        // style={{display: 'flex', margin: '32px' , justifyContent:'center'}}
      >
        {/* <BlackButton onClick={() => console.log("Button clicked!")}>VIEW ALL</BlackButton> */}
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

export default ServiceRelatedProjects;
