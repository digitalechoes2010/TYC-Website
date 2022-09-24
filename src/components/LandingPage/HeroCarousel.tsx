import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Slider1Pic from "../../assets/Images/TYC-SliderPic1.png";
import Slider2Pic from "../../assets/Images/TYC-SliderPic2.png";
import Slider3Pic from "../../assets/Images/TYC-SliderPic3.png";

import LeftArrow from "../CustomComponents/CarouselArrows/LeftArrow";
import RightArrow from "../CustomComponents/CarouselArrows/RightArrow";
import "./styles/HeroCarousel.css";

export default class AutoPlay extends Component {
  slider: any;
  constructor(props: any) {
    super(props);
    this.slider = React.createRef();
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 800,
      autoplaySpeed: 5000,
      cssEase: "linear",
      arrows: false,
    };
    return (
      <div className="Hero">
        <Slider
          className="Hero-slider"
          ref={(c) => (this.slider = c)}
          {...settings}
        >
          <div>
            <Container className="Hero-Container Hero-Container1">
              <Row className="Hero-Row">
                <Col className="Hero-Info" lg="5">
                  <h2 className="Hero-SectionMsg">
                    SHARING INFORMATION HAS NEVER BEEN EASIER
                  </h2>
                  <h3>Switch between your social and business profile.</h3>
                  <Link className="Hero-Btn"
              to="/Support"
            >
               Learn More
            </Link>
               
                </Col>
                <Col className="Hero-ImgContainer" lg="7">
                  <img className="Hero-Image1" src={Slider1Pic} alt="" />
                </Col>
              </Row>
            </Container>
          </div>

          <div>
            <Container className="Hero-Container Hero-Container2">
              <Row className="Hero-Row">
                <Col className="Hero-Info" lg="5">
                  <h2 className="Hero-SectionMsg">TAP AND SHARE</h2>
                  <h3>Download your information onto your TYC.</h3>
                </Col>
                <Col className="Hero-ImgContainer" lg="7">
                  <img className="Hero-Image3" src={Slider3Pic} alt="" />
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <Container className="Hero-Container Hero-Container3">
              <Row className="Hero-Row">
                <Col className="Hero-Info" lg="5">
                  <h2 className="Hero-SectionMsg">
                    REFER BACK TO YOUR CONNECTIONS IN{" "}
                    <span style={{ fontWeight: "bold", fontSize: 35 }}>
                      REALTIME
                    </span>
                  </h2>
                  <h3>Remain up to date with your network.</h3>
                </Col>
                <Col className="Hero-ImgContainer" lg="7">
                  <img className="Hero-Image2" src={Slider2Pic} alt="" />
                </Col>
              </Row>
            </Container>
          </div>
        </Slider>
        <div onClick={this.previous}>
          <LeftArrow />
        </div>
        <div onClick={this.next}>
          <RightArrow />
        </div>
      </div>
    );
  }
}
