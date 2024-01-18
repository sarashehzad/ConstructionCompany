
import React from "react";
import { Container, Container as Fluid } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import line from '../../../assets/images/line.svg';
import Blocks from "../../../components/Block/Block";
import Button from "../../../components/Buttons/Button";


function ServicesBlockSection(){
    return(
        <>
        <Container fluid>
            <Row style={{justifyContent:'end'}}>
           
                <Col lg={9} style={{ backgroundColor:'#F7F7F7'}}>
                <Blocks style={{padding:' 25px 42px'}}
            heading="Building Construction"
            imageSrc={line}
            paragraphText="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. "
         
          />
          <Row style={{justifyContent:'center'}}>
    <Col lg={3}
    >
        <ul style={{marginBottom:'52px'}}>
            <li style={{padding:'2px 5px'}}>Lectus erat consectetur</li>
            <li style={{padding:'2px 5px'}}>Eu sapien eget</li>
            <li style={{padding:'2px 5px'}}>Rhoncus consectetur</li>
            <li style={{padding:'2px 5px'}}>Proin cursus</li>
            <li style={{padding:'2px 5px'}}>Dolor a mollis consectetur
</li>
        </ul>
    </Col>
    <Col lg={3} style={{margin:' 0px 100px'}}>
        <ul style={{marginBottom:'52px'}}>
            <li style={{padding:'2px 5px'}}>Risus dolor fermentum</li>
            <li style={{padding:'2px 5px'}}>Massa a commodo</li>
            <li style={{padding:'2px 5px'}}>Elit dui sit amet risus</li>
            <li style={{padding:'2px 5px'}}>Maecenas ornare</li>
            <li style={{padding:'2px 5px'}}>Nisl a tortor ultrices</li>

        </ul>
    </Col>
    <Col lg={3}
    >
        <ul style={{marginBottom:'52px'}}>
            <li style={{padding:'2px 5px'}}>Bibendum nulla fermentum</li>
            <li style={{padding:'2px 5px'}}>Metus quis sodales</li>
            <li style={{padding:'2px 5px'}}>Tristique augue mauris</li>
            <li style={{padding:'2px 5px'}}>Molestie augue non</li>
            <li style={{padding:'2px 5px'}}>Feugiat ligula neque</li>

        </ul>
       
    </Col>
   
    <Row style={{margin: '0px', padding:'0px'}}>
<Col className="p-0">
    <div style={{padding:'26px'}} className="black-bg" >
    <Button style={{color:'white', padding:'10px 40px' , backgroundColor:'#2A2A2A', border: "4px solid white", fontWeight:'bold'  }} onClick={() => console.log("Button clicked!")} value="GET A QUOTE"></Button>
    </div>
</Col>
<Col className="p-0">
<div style={{padding:'26px'}} className="yellow-bg">
<Button style={{color:'white', padding:'10px 40px' , backgroundColor:'#FFB400', border: "4px solid white", fontWeight:'bold'  }} onClick={() => console.log("Button clicked!")} value="LEARN MORE"></Button>
    </div>
</Col>
</Row>
    </Row>

             
  
                </Col>
            </Row>
        </Container>

        <Container fluid>
            <Row style={{justifyContent:'start'}}>
           
                <Col lg={9}>
                <Blocks style={{margin:'40px'}}
            heading="Repairs & Installations"
            imageSrc={line}
            paragraphText="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. "
         
          />
          <Row style={{justifyContent:'center'}}>
    <Col lg={3}
    >
        <ul style={{marginBottom:'52px'}}>
            <li style={{padding:'2px 5px'}}>Lectus erat consectetur</li>
            <li style={{padding:'2px 5px'}}>Eu sapien eget</li>
            <li style={{padding:'2px 5px'}}>Rhoncus consectetur</li>
            <li style={{padding:'2px 5px'}}>Proin cursus</li>
            <li style={{padding:'2px 5px'}}>Dolor a mollis consectetur
</li>
        </ul>
    </Col>
    <Col lg={3} style={{margin:' 0px 100px'}}>
        <ul style={{marginBottom:'52px'}}>
            <li style={{padding:'2px 5px'}}>Risus dolor fermentum</li>
            <li style={{padding:'2px 5px'}}>Massa a commodo</li>
            <li style={{padding:'2px 5px'}}>Elit dui sit amet risus</li>
            <li style={{padding:'2px 5px'}}>Maecenas ornare</li>
            <li style={{padding:'2px 5px'}}>Nisl a tortor ultrices</li>

        </ul>
    </Col>
    <Col lg={3}
    >
        <ul style={{marginBottom:'52px'}}>
            <li style={{padding:'2px 5px'}}>Bibendum nulla fermentum</li>
            <li style={{padding:'2px 5px'}}>Metus quis sodales</li>
            <li style={{padding:'2px 5px'}}>Tristique augue mauris</li>
            <li style={{padding:'2px 5px'}}>Molestie augue non</li>
            <li style={{padding:'2px 5px'}}>Feugiat ligula neque</li>

        </ul>
       
    </Col>
   
    <Row style={{margin: '0px', padding:'0px'}}>
<Col className="p-0">
    <div style={{padding:'26px'}} className="black-bg" >
    <Button style={{color:'white', padding:'10px 40px' , backgroundColor:'#2A2A2A', border: "4px solid white", fontWeight:'bold'  }} onClick={() => console.log("Button clicked!")} value="GET A QUOTE"></Button>
    </div>
</Col>
<Col className="p-0">
<div style={{padding:'26px'}} className="yellow-bg">
<Button style={{color:'white', padding:'10px 40px' , backgroundColor:'#FFB400', border: "4px solid white", fontWeight:'bold'  }} onClick={() => console.log("Button clicked!")} value="LEARN MORE"></Button>
    </div>
</Col>
</Row>
    </Row>

             
  
                </Col>
            </Row>
        </Container>

        <Container fluid>
            <Row style={{justifyContent:'end'}}>
           
                <Col lg={9} style={{ backgroundColor:'#F7F7F7'}}>
                <Blocks style={{margin:'40px'}}
            heading="Custom Design Projects"
            imageSrc={line}
            paragraphText="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. "
         
          />
          <Row style={{justifyContent:'center'}}>
    <Col lg={3}
    >
        <ul style={{marginBottom:'52px'}}>
            <li style={{padding:'2px 5px'}}>Lectus erat consectetur</li>
            <li style={{padding:'2px 5px'}}>Eu sapien eget</li>
            <li style={{padding:'2px 5px'}}>Rhoncus consectetur</li>
            <li style={{padding:'2px 5px'}}>Proin cursus</li>
            <li style={{padding:'2px 5px'}}>Dolor a mollis consectetur
</li>
        </ul>
    </Col>
    <Col lg={3} style={{margin:' 0px 100px'}}>
        <ul style={{marginBottom:'52px'}}>
            <li style={{padding:'2px 5px'}}>Risus dolor fermentum</li>
            <li style={{padding:'2px 5px'}}>Massa a commodo</li>
            <li style={{padding:'2px 5px'}}>Elit dui sit amet risus</li>
            <li style={{padding:'2px 5px'}}>Maecenas ornare</li>
            <li style={{padding:'2px 5px'}}>Nisl a tortor ultrices</li>

        </ul>
    </Col>
    <Col lg={3}
    >
        <ul style={{marginBottom:'52px'}}>
            <li style={{padding:'2px 5px'}}>Bibendum nulla fermentum</li>
            <li style={{padding:'2px 5px'}}>Metus quis sodales</li>
            <li style={{padding:'2px 5px'}}>Tristique augue mauris</li>
            <li style={{padding:'2px 5px'}}>Molestie augue non</li>
            <li style={{padding:'2px 5px'}}>Feugiat ligula neque</li>

        </ul>
       
    </Col>
   
    <Row style={{margin: '0px', padding:'0px'}}>
<Col className="p-0">
    <div style={{padding:'26px'}} className="black-bg" >
    <Button style={{color:'white', padding:'10px 40px' , backgroundColor:'#2A2A2A', border: "4px solid white", fontWeight:'bold'  }} onClick={() => console.log("Button clicked!")} value="GET A QUOTE"></Button>
    </div>
</Col>
<Col className="p-0">
<div style={{padding:'26px'}} className="yellow-bg">
<Button style={{color:'white', padding:'10px 40px' , backgroundColor:'#FFB400', border: "4px solid white", fontWeight:'bold'  }} onClick={() => console.log("Button clicked!")} value="LEARN MORE"></Button>
    </div>
</Col>
</Row>
    </Row>

             
  
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default ServicesBlockSection;