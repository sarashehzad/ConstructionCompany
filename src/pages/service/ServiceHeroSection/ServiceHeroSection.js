import React from "react";
import "./ServiceHeroSection.css";
import { Container, Container as Fluid } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import YellowBoxWithContent from "../../../components/Box/ReuableBox";
import group1 from "../../../assets/images/group1.svg";
import group2 from "../../../assets/images/group2.svg";
import group3 from "../../../assets/images/group3.svg";
import Button from "../../../components/Buttons/Button";

function ServiceHeroSection() {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0" lg={12}>
          <div className="service-img">
            <div className="service-main-section-text">
              <h1 className="vectorr">Framing</h1>
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
                value="GET A QUOTE"
              ></Button>
            </div>

            <div className="service-box">
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
          {/* <img src={con} alt="Container Image" className="construction-img" /> 


<div className="text-overlay-service">
<h1 className="vector" style={{ fontWeight: "bold" }}>Framing</h1>
<p className="p-hero-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. </p>
<Button style={{color:'white', padding:'10px 40px' , backgroundColor:'#FFB400', border: "none", fontWeight:'bold'  }} onClick={() => console.log("Button clicked!")} value="GET A QUOTE"></Button>
</div>


<div className="content-overlay">
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
        className="service-paragrapgh-section"
        //  style={{justifyContent:'center', marginTop:'70px' , color:'#666666', marginBottom:'56px'}}
      >
        <Col lg={5} className="hero-custom-p">
          <p
            className="service-p"
            // style={{paddingRight:'34px'}}
          >
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum. Nulla fermentum, metus quis sodales
            tristique, augue mauris molestie augue, non feugiat ligula neque nec
            felis.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam
            blandit est in eros elementum, quis vehicula est suscipit. Proin
            cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
            commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
            ultrices bibendum.{" "}
          </p>
        </Col>
        <Col lg={5} className="hero-custom-p">
          <p
            className="service-p"
            //  style={{paddingRight:'34px'}}
          >
            Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
            erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
            cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
            commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
            ultrices bibendum. Nulla fermentum, metus quis sodales tristique,
            augue mauris molestie augue non feugiat ligula neque nec felis.
          </p>

          <p
            className="service-p"
            // style={{paddingRight:'34px'}}
          >
            {" "}
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum.{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceHeroSection;
