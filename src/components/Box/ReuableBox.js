import React from "react";
import { Col } from "react-bootstrap";
import './ReuseableBox.css'


const YellowBoxWithContent = ({ logo, title, content }) => (
    <Col>
      <div className="yellow-box1">
        <img src={logo} alt="Logo" className="logo-image" />
        <div className="content">
          <h6 style={{ fontWeight: "bold" }}>{title}</h6>
          <p >{content}</p>
        </div>
      </div>
    </Col>
  );

  export default YellowBoxWithContent;
  