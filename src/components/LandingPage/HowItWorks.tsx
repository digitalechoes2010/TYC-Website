import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Apple from "../../assets/SVGs/AppleLogo.svg";
import Google from "../../assets/SVGs/GooglePlayLogo.svg";
import "./styles/HowItWorks.css";

export default function HowItWorks() {
  return (
    <div>
      <Container className="HIW" id="HowItWorks" fluid>
        <Row>
          <Col
            xs={{ size: 12, order: 2 }}
            md={{ size: 12, order: 2 }}
            lg={{ size: 8, order: 1 }}
            className="mt-4"
          >
            {" "}
            <ReactPlayer
              width="100%"
              url="https://www.youtube.com/watch?v=QKe7BZcbysw"
            />
          </Col>
          <Col
            xs={{ size: 12, order: 1 }}
            md={{ size: 12, order: 1 }}
            lg={{ size: 4, order: 2 }}
          >
            <div className="HIW-Info">
              <p className="HIW-SectionMsg">SHARING SIMPLIFIED</p>
              <h1>How it Works</h1>
              <ol>
                <li>Download the Tap Your Chip App</li>
                <li>Activate you TYC Account</li>
                <li>Tap, Share & Connect Later</li>
              </ol>
              <div className="HIW-Download">
                <p>Available on IOS & Android</p>
                <div className="HIW-BTN__Container">
                  <Link className="HIW-BTN" to="/">
                    <img className="Google" src={Google} alt="" />
                  </Link>
                  <Link className="HIW-BTN" to="/">
                    <img className="Apple" src={Apple} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
