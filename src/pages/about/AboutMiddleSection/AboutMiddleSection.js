import React from "react";
import './AboutMiddleSection.css'
import { Container, Container as Fluid } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import YellowBoxWithContent from "../../../components/Box/ReuableBox";
import DoubleArrow from '../../../assets/images/DoubleArrow.svg';
import Button from "../../../components/Buttons/Button";
import tower from '../../../assets/images/tower.svg';


function AboutMiddleSection(){
    return(
        <>
        <Container fluid style={{backgroundColor:'#F7F7F7'}}>
        <Row>
    <Col style={{marginTop:'97px'}} lg={4}>
    <div>
    <h4 style={{ fontWeight: "bold" , margin: "1px 10px" , padding: "17px 11px" }}>Only the Best</h4>
    <div style={{padding:'17px 8px'}}>
    <YellowBoxWithContent
            logo={DoubleArrow}
            title ="Eco Friendly Construction"
            content="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
          />
          </div>
          <div style={{padding:'17px 8px'}}>

<YellowBoxWithContent
            logo={DoubleArrow}
            title ="The Newest Technology Repairs"
            content="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
          />
          </div>
          <div style={{padding:'17px 8px'}}>
<YellowBoxWithContent
            logo={DoubleArrow}
            title ="High Quality Construction Management"
            content="Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. "
          />
          </div>
          <div style={{marginTop:'40px', marginRight:'30px' , display:'flex', justifyContent:'end'}}>
<Button style={{color:'#FFB400', padding:'10px 40px' , border: "4px solid #FFB400", fontWeight:'bold' , backgroundColor:'#F7F7F7'  }} onClick={() => console.log("Button clicked!")} value="FREE QUOTE"></Button>
</div>
          </div>
    </Col>

    <Col lg={8}>
                    
                        <Col lg={12}>
                    <img src={tower} className="tower-img"></img>
                    </Col>
                   

                    <Row style={{margin: '0px'}}>
<Col lg={6} className="p-0">
    <div className="yellow-bg">
        <h3 style={{ fontWeight: 'bold'}}>12</h3>
        <p style={{ fontWeight: 'bold'}}>YEARS ESTABLISHED</p>
    </div>
</Col>
<Col lg={6} className="p-0">
<div className="black-bg">
        <h3 style={{ fontWeight: 'bold'}}>250</h3>
        <p style={{ fontWeight: 'bold'}}>COMPLETED PROJECTS</p>
    </div>
</Col>
</Row>

<Row style={{margin: '0px'}}>
<Col lg={6} className="p-0">
    <div style={{margin:'8px 0px' , textAlign:'center'}}>
        <h3 style={{ fontWeight: 'bold'}}>24</h3>
        <p style={{ fontWeight: 'bold'}}>FIELD WORKERS</p>
    </div>
</Col>
<Col lg={6} className="p-0">
<div style={{margin:'8px 0px' , textAlign:'center'}}>
        <h3 style={{ fontWeight: 'bold'}}>18</h3>
        <p style={{ fontWeight: 'bold'}}>OFFICE STAFF</p>
    </div>
</Col>
</Row>
                </Col>

            </Row>

        </Container>
        <Container>
        <Row style={{marginTop:'65px'}}>
                <div style={{textAlign:'center'}}>
                <h3 style={{fontWeight:'bold'}}>“Suspendisse neque erat, imperdiet <br/> ac non, sollicitudin accumsan lacus.<br/> Vestibulum ac ex rutrum,<br/> pellentesque purus et, lacinia mi.<br/> Nullam maximus lectus libero.”</h3>
                <p style={{color:'#666666' , marginTop:'30px' , marginBottom:'65px'}}>JOHN SMITH – CEO</p>
                </div>
            </Row>
        </Container>
        </>
    )
}
export default AboutMiddleSection;