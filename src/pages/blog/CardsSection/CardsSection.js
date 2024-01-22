import React from "react";
import "./CardsSection.css";
import { Container, Container as Fluid } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import card1 from "../../../assets/images/card1.svg";
import card2 from "../../../assets/images/card2.svg";
import card3 from "../../../assets/images/card3.svg";
import card4 from "../../../assets/images/card4.svg";
import card5 from "../../../assets/images/card5.svg";
import card6 from "../../../assets/images/card6.svg";

import ImageCardWithText from "../../../components/Card/ImageCard";

function Cards() {
  return (
    <Container
      fluid
      className="cards-custom-bg"
      // style={{backgroundColor:'#F7F7F7'}}
    >
      <Row
        className="cards-custom-margin"
        // style={{justifyContent: 'center',marginBottom: '43px'}}
      >
        <Col
          lg={3}
          className="news-card-section"
          // style={{marginTop:"90px"}}
        >
          <ImageCardWithText
            imageSrc={card1}
            heading="Nunc Volutpat Venenatis"
            text="May 9, 2014 | Category"
            paragraph="Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi."
          />
        </Col>

        <Col
          lg={3}
          className="news-card-section"
          //  style={{marginTop:"90px"}}
        >
          <ImageCardWithText
            imageSrc={card2}
            heading="Vestibulum Nisl Felis"
            text="May 9, 2014 | Category"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. "
          />
        </Col>

        <Col
          lg={3}
          className="news-card-section"
          // style={{marginTop:"90px"}}
        >
          <ImageCardWithText
            imageSrc={card3}
            heading="Card Proin Eu Augue Efficitur"
            text="May 9, 2014 | Category"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. "
          />
        </Col>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Col
          lg={3}
          className="cards-custom-margin-2"
          // style={{marginBottom: '61px'}}
        >
          <ImageCardWithText
            imageSrc={card4}
            heading="Nunc Volutpat Venenatis"
            text="May 9, 2014 | Category"
            paragraph="Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Maecenas urna sapien, dignissim a augue vitae, porttitor luctus urna. Morbi scelerisque semper congue. "
          />
        </Col>

        <Col lg={3}>
          <ImageCardWithText
            imageSrc={card5}
            heading="Donec Sit Amet Nibh"
            text="May 9, 2014 | Category"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet.  "
          />
        </Col>

        <Col lg={3}>
          <ImageCardWithText
            imageSrc={card6}
            heading="Maecenas Fringilla Augue"
            text="May 9, 2014 | Category"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet.Donec quis felis imperdiet, vestibulum est ut, pulvinar dolor.  "
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
