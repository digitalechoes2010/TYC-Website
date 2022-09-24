import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { IconContext } from "react-icons";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import AppleLogo from "../assets/SVGs/AppleLogo.svg";
import GoogleLogo from "../assets/SVGs/GooglePlayLogo.svg";
import "./styles/DownloadApp.css";

class DownloadApp extends Component<any, any> {
  render() {
    return (
      <Container className="DownloadApp" fluid>
        <Helmet>
          <title>TYC - Download App</title>
        </Helmet>
        <Row>
          <Col className="DownloadApp-Header" xs={12}>
            <h3 className="DownloadApp-Header__Title">DOWNLOAD THE TYC APP</h3>
          </Col>
        </Row>
        <Row className="DownloadApp-Container">
          <Col className="DownloadApp-downloadContainer" xs={10} md={7}>
            <Row className="DownloadApp-descriptionRow">
              <p>
                To fully experience Tap Your Chip & its features,Feel free
                to download the Tap Your Chip App from the links below.The
                TYC App allows you to easily activate & manage the tag from
                the comfort of your device.
              </p>
            </Row>
            <Row className="DownloadApp-downloadRow">
              <Link className="DownloadApp__Btns" to="/Android">
                <img className="Google" src={GoogleLogo} alt="" />
                <p>Download for Android</p>
              </Link>
              <Link className="DownloadApp__Btns" to="/Apple">
                <img className="Apple" src={AppleLogo} alt="" />
                <p>Download for IOS</p>
              </Link>
            </Row>
          </Col>
          <Col className="DownloadApp-planeContainer" xs={0} md={4}>
            <div className="paperplane">
              <div className="plane">
                <div className="wingRight"></div>
                <div className="wingLeft"></div>
                <div className="bottom"></div>
                <div className="top"></div>
                <div className="middle"></div>
              </div>
              <div className="clouds">
                <div className="cloudOne"></div>
                <div className="cloudTwo"></div>
                <div className="cloudThree"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DownloadApp;
