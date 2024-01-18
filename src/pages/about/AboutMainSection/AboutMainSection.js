import React from "react";
import './AboutMainSection.css';
import { Container, Container as Fluid } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import YellowBoxWithContent from "../../../components/Box/ReuableBox";
import group1 from '../../../assets/images/group1.svg';
import group2 from '../../../assets/images/group2.svg';
import group3 from '../../../assets/images/group3.svg';
import Button from "../../../components/Buttons/Button";
import line from '../../../assets/images/line.svg'



import con from '../../../assets/images/con.svg'

function AboutMainSection() {
    return(
    <Container fluid>
   <Row>

   <Col className="p-0" lg={12}>

<div className="service-img">
<div className="service-main-section-text">
<h1 className="vectorr" style={{ fontWeight: "bold" }}>About Our <br/> Construction <br/> Company</h1>
<p style={{margin:'20px 0px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. </p>

<Button style={{color:'white', padding:'10px 40px' , backgroundColor:'#FFB400', border: "none", fontWeight:'bold'  }} onClick={() => console.log("Button clicked!")} value="GET A FREE QUOTE"></Button>
</div>

<div className="service-box">
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
      
</div>

</div>
</Col>
    {/* <Col className="p-0" lg={12}>
<img src={con} alt="Container Image" className="construction-img" /> 


<div className="text-overlay-service-1">
<h1 className="vector" style={{ fontWeight: "bold", padding:'3px 20px'}}>About Our <br/> Construction <br/> Company</h1>
<p className="about-custom-p">Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Ut quis  egestas pellentesque libero dolor in diam consequat ut. </p>
<Button style={{color:'white', padding:'10px 40px' , backgroundColor:'#FFB400', border: "none", fontWeight:'bold'  }} onClick={() => console.log("Button clicked!")} value="GET A FREE QUOTE"></Button>
</div>


<div className="content-overlay-1">
<h3 className="about-main-heading-box">What We Do</h3>
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
          </div>
</Col> */}

 

   </Row>
   <Row style={{justifyContent:'center', marginTop:'70px' ,  marginBottom:'56px'}}>

   <div style={{textAlign:'center' , marginBottom:'37px'}}>
    <h2 style={{fontWeight:'bold' , margin:'13px 0px'}}>About Divi Construction</h2>
    <img src={line} alt="vector-img" className="vector-img"></img>
   </div>
    <Col style={{color:'#666666',}} lg={5}>
        <p className="hero-custom-p">Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin  cursus, dolor a mollis consectetur, risus dolor fermentum massa, a  commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. </p>
    </Col>
    <Col style={{color:'#666666',}} lg={5}>
        <p className="hero-custom-p">Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.</p>

<p className="hero-custom-p"> Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. </p>
    </Col>
   </Row>

 
        </Container>
    )

}

export default AboutMainSection;

