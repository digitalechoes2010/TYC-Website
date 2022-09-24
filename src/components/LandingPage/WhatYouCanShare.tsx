import React from "react";
import { Col, Container, Row } from "reactstrap";
import Iphone from "../../assets/Images/Front IPhone X1.png";
import SocialMediaGenerator1 from "./SocialMediaGenerator";
import SocialMediaGenerator2 from "./SocialMediaGenerator2";
import "./styles/WhatYouCanShare.css";

export default function WhatYouCanShare() {
  return (
    <Container className="WhatYouShare" fluid>
      <Row className="WhatYouShare_Row">
        <Col
          xs={{ size: "12", order: "2" }}
          md={{ size: "6", order: "0" }}
          lg={{ size: "6", order: "0" }}
          className="WYS-Img"
        >
          <img src={Iphone} alt="" />
          <div className="WYS-Logos">
            <SocialMediaGenerator1 />
          </div>
        </Col>

        <Col
          xs={{ size: "12", order: "1" }}
          md={{ size: "6", order: "0" }}
          lg={{ size: "6", order: "0" }}
          className="WYS-Info"
        >
          <p className="WYS-SectionMsg">SHARE WHATEVER, WHENEVER</p>
          <h3>What You Can Share</h3>
          <div className="icons">
            <SocialMediaGenerator2 />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
