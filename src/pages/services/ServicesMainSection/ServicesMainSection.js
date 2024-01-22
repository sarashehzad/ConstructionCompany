import React from "react";
import "./ServicesMainSection.css";
import { Container, Container as Fluid } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import YellowBoxWithContent from "../../../components/Box/ReuableBox";
import group1 from "../../../assets/images/group1.svg";
import group2 from "../../../assets/images/group2.svg";
import group3 from "../../../assets/images/group3.svg";
import Button from "../../../components/Buttons/Button";

function ServicesMainSection() {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0" lg={12}>
          <div className="service-img">
            <div className="service-main-section-text">
              <h1 className="vectorr">
                Our Construction <br /> Services
              </h1>
              <p
                className="custom-paragrapgh-margin"
                // style={{margin:'20px 0px'}}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
                egestas pellentesque libero dolor in diam consequat ut.{" "}
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
                value="GET A FREE QUOTE"
              ></Button>
            </div>

            <div className="service-box">
              <h3 className="heading-services-main">What We Do</h3>
              <YellowBoxWithContent
                logo={group1}
                title="Building Construction"
                content="Lorem ipsum dolor sit consectetur  adipiscing elit. Nullam lectus erat"
              />

              <YellowBoxWithContent
                logo={group2}
                title="Building Repairs"
                content="Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat"
              />
              <YellowBoxWithContent
                logo={group3}
                title="Custom Design"
                content="Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat"
              />
            </div>
          </div>
          {/* <Col className="p-0" lg={12}>
<img src={con} alt="Container Image" className="construction-img" /> 


<div className="text-overlay-service-1">
<h1 className="vector" style={{ fontWeight: "bold" }}>Our Construction <br/> Services</h1>
<p className="p-hero-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis  egestas pellentesque  libero dolor in diam consequat ut. </p>
<Button style={{color:'white', padding:'10px 40px' , backgroundColor:'#FFB400', border: "none", fontWeight:'bold'  }} onClick={() => console.log("Button clicked!")} value="GET A FREE QUOTE"></Button>
</div>


<div className="content-overlay-1">
<h3 className="heading-services-main" >What We Do</h3>

<YellowBoxWithContent
            logo={group1}
            title ="Building Construction"
            content="Lorem ipsum dolor sit consectetur  adipiscing elit. Nullam lectus erat"
          />
<YellowBoxWithContent
            logo={group2}
            title ="Building Repairs"
            content="Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat"
          />
          <YellowBoxWithContent
            logo={group3}
            title ="Custom Design"
            content="Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat"
          />
          </div> */}
        </Col>
      </Row>
      <Row
        className="row-shadow"
        //  style={{boxShadow:'2px 2px 5px 0px rgba(0, 0, 0, 0.6)', position:'relative'}}
      >
        <div className="lower-section">
          <h2
            className="lower-section-text"
            // style={{ fontWeight: "bold", justifyContent:'center', alignItems:'center', display:'flex'}}
          >
            Get a Quote For Your Project
          </h2>
          <div className="services-custom-button">
            <Button
              style={{
                color: "#FFB400",
                padding: "10px 25px",
                backgroundColor: "white",
                border: "4px solid #FFB400",
              }}
              onClick={() => console.log("Button clicked!")}
              value="FREE QUOTE"
            ></Button>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default ServicesMainSection;
