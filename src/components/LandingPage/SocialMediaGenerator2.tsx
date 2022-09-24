import { IconContext } from "react-icons";
import { AiFillLinkedin } from "react-icons/ai";
import {
  FaDiscord,
  FaFacebook,
  FaGooglePlus,
  FaQuora,
  FaReddit,
  FaSafari,
  FaSkype,
} from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrPaypal } from "react-icons/gr";
import { RiTwitchFill } from "react-icons/ri";
import { SiTiktok } from "react-icons/si";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import "./styles/SocialMediaGenerator.css";

const SocialMediaGenerator = (_props: any) => {
  const Paypal = styled(GrPaypal)`
    color: #000;
    background-color: #fff;
    transform: scale(3) translate(5px, 7px);
    border-radius: 2px;
    padding: 1px;
  `;
  const Tiktok = styled(SiTiktok)`
    color: #00457c;
    transform: scale(3) translate(5px, 0px);
    background-color: #fff;
    border-radius: 2px;
    padding: 1px;
    margin-left: 5px;
  `;
  const GooglePlus = styled(FaGooglePlus)`
    color: #db4a39;
    background-color: #fff;
    transform: scale(3) translate(5px, -7px);
    border-radius: 50px;
    border-radius: 2px;
    padding: 1px;
    margin-left: 5px;
  `;
  const Skype = styled(FaSkype)`
    color: #00aff0;
    background-color: #fff;
    transform: scale(3) translate(5px, -16px);
    border-radius: 50px;
    border-radius: 2px;
    padding: 1px;
    margin-left: 5px;
  `;
  const Linkedin = styled(AiFillLinkedin)`
    color: #0e76a8;
    background-color: #fff;
    transform: scale(3) translate(-10px, 7px);
    border-radius: 2px;
    padding: 1px;
    margin-left: 5px;
  `;
  const Twitch = styled(RiTwitchFill)`
    color: #583992;
    transform: scale(3) translate(-10px, 0px);
    background-color: #fff;
    border-radius: 2px;
    padding: 1px;
    margin-left: 5px;
  `;
  const Discord = styled(FaDiscord)`
    color: #5865f2;
    background-color: #fff;
    transform: scale(3) translate(-10px, -7px);
    border-radius: 2px;
    padding: 1px;
    margin-left: 5px;
  `;
  const Reddit = styled(FaReddit)`
    color: #ff5700;
    background-color: #fff;
    transform: scale(3) translate(-10px, -16px);
    border-radius: 2px;
    padding: 1px;
    margin-left: 5px;
  `;
  const Instagram = styled(FiInstagram)`
    background: linear-gradient(
      45deg,
      #405de6,
      #5851db,
      #833ab4,
      #c13584,
      #e1306c,
      #fd1d1d
    );
    transform: scale(3) translate(-20px, 7px);
    border-radius: 2px;
    padding: 1px;
    margin-left: 5px;
  `;
  const Facebook = styled(FaFacebook)`
    color: #3b5998;
    background-color: #fff;
    transform: scale(3) translate(-20px, 0px);
    border-radius: 50px;
    border-radius: 2px;
    padding: 1px;
  `;

  const Safari = styled(FaSafari)`
    color: #00d3f9;
    background-color: #fff;
    transform: scale(3) translate(-20px, -7px);
    border-radius: 50px;
    border-radius: 2px;
    padding: 1px;
    margin-left: 5px;
  `;
  const Quora = styled(FaQuora)`
    color: #b92b27;
    background-color: #fff;
    transform: scale(3) translate(-20px, -16px);
    border-radius: 50px;
    border-radius: 2px;
    padding: 1px;
    margin-left: 5px;
  `;

  return (
    <Container className="logo-Container2">
      <Row>
        <Col md="3">
          <IconContext.Provider value={{ color: "#00457C", size: "20px" }}>
            <div>
              <Paypal />
            </div>
          </IconContext.Provider>
        </Col>
        <Col md="3">
          <IconContext.Provider value={{ color: "#000", size: "20px" }}>
            <div>
              <Tiktok />
            </div>
          </IconContext.Provider>
        </Col>
        <Col md="3">
          <IconContext.Provider value={{ color: "#db4a39", size: "20px" }}>
            <div>
              <GooglePlus />
            </div>
          </IconContext.Provider>
        </Col>
        <Col md="3">
          <IconContext.Provider value={{ color: "#00aff0", size: "20px" }}>
            <div>
              <Skype />
            </div>
          </IconContext.Provider>
        </Col>
      </Row>
      <Row>
        <Col md="3">
          <IconContext.Provider value={{ color: "#0e76a8", size: "20px" }}>
            <div>
              <Linkedin />
            </div>
          </IconContext.Provider>
        </Col>
        <Col md="3">
          <IconContext.Provider value={{ color: "#583992", size: "20px" }}>
            <div>
              <Twitch />
            </div>
          </IconContext.Provider>
        </Col>
        <Col md="3">
          {" "}
          <IconContext.Provider value={{ color: "#5865f2", size: "20px" }}>
            <div>
              <Discord />
            </div>
          </IconContext.Provider>
        </Col>
        <Col md="3">
          {" "}
          <IconContext.Provider value={{ color: "#FF5700", size: "20px" }}>
            <div>
              <Reddit />
            </div>
          </IconContext.Provider>
        </Col>
      </Row>
      <Row>
        <Col md="3">
          <IconContext.Provider
            value={{
              color: "#fff",
              size: "20px",
            }}
          >
            <div>
              <Instagram />
            </div>
          </IconContext.Provider>
        </Col>
        <Col md="3">
          <IconContext.Provider value={{ color: "#3b5998", size: "20px" }}>
            <div>
              <Facebook />
            </div>
          </IconContext.Provider>
        </Col>
        <Col md="3">
          <IconContext.Provider value={{ color: "#00D3F9", size: "20px" }}>
            <div>
              <Safari />
            </div>
          </IconContext.Provider>
        </Col>
        <Col md="3">
          <IconContext.Provider value={{ color: "#b92b27", size: "20px" }}>
            <div>
              <Quora />
            </div>
          </IconContext.Provider>
        </Col>
      </Row>
    </Container>
  );
};
export default SocialMediaGenerator;
