import { IconContext } from "react-icons";
import { AiFillYoutube } from "react-icons/ai";
import { FiCalendar } from "react-icons/fi";
import { GrPinterest } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { RiSnapchatFill, RiSoundcloudFill } from "react-icons/ri";
import { SiCnn, SiMicrosoftoutlook, SiTinder } from "react-icons/si";
import { TiSocialTwitter, TiSocialVimeo } from "react-icons/ti";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import "./styles/SocialMediaGenerator.css";

const SocialMediaGenerator = (_props: any) => {
  const Pinterest = styled(GrPinterest)`
    color: red;
    background-color: white;
    transform: scale(2);
    background-size: 100%;
    border-radius: 100px;
  `;
  const Snapchat = styled(RiSnapchatFill)`
    color: #fff;
    background-color: #fffc00;
    transform: scale(2);
    border-radius: 50px;
    padding: 3px;
  `;
  const Twitter = styled(TiSocialTwitter)`
    color: #fff;
    background-color: #1da1f2;
    transform: scale(2);
    border-radius: 50px;
    padding: 3px;
  `;
  const Tinder = styled(SiTinder)`
    color: #fff;
    background-color: #fe3c72;
    transform: scale(2);
    border-radius: 50px;
    padding: 5px;
  `;
  const SoundCloud = styled(RiSoundcloudFill)`
    color: #fff;
    background-color: #fe5000;
    transform: scale(2);
    border-radius: 50px;
    padding: 3px;
  `;
  const Calendar = styled(FiCalendar)`
    color: #fff;
    transform: scale(2);
  `;
  const Youtube = styled(AiFillYoutube)`
    color: #ff0000;
    transform: scale(2);
  `;
  const Whatsapp = styled(ImWhatsapp)`
    color: #fff;
    background-color: #25d366;
    transform: scale(2);
    border-radius: 50px;
    padding: 3px;
  `;
  const CNN = styled(SiCnn)`
    color: #fff;
    background-color: #ec2029;
    transform: scale(2);
  `;
  const Outlook = styled(SiMicrosoftoutlook)`
    color: #fff;
    background-color: #fff;
    transform: scale(2.5);

    padding: 2px;
  `;
  const Vimeo = styled(TiSocialVimeo)`
    color: #fff;
    background-color: #86c9ef;
    transform: scale(2);
    border-radius: 50px;
  `;

  return (
    <Container className="logo-Container">
      <Row>
        <Col md="6">
          <IconContext.Provider value={{ color: "#E60023", size: "25px" }}>
            <div className="logo1">
              <Pinterest />
            </div>
          </IconContext.Provider>
        </Col>
        <Col md="6">
          {" "}
          <IconContext.Provider value={{ color: "#fff", size: "25px" }}>
            <div className="logo2">
              <Snapchat />
            </div>
          </IconContext.Provider>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          {" "}
          <IconContext.Provider value={{ color: "#fff", size: "25px" }}>
            <div className="logo3">
              <Twitter />
            </div>
          </IconContext.Provider>
        </Col>
        <Col md="4">
          <IconContext.Provider value={{ color: "#fff", size: "25px" }}>
            <div className="logo4">
              <Tinder />
            </div>
          </IconContext.Provider>
        </Col>
        <Col md="4">
          <IconContext.Provider value={{ color: "#fff", size: "25px" }}>
            <div className="logo5">
              <SoundCloud />
            </div>
          </IconContext.Provider>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <IconContext.Provider value={{ color: "#fff", size: "25px" }}>
            <div className="logo6">
              <Calendar />
            </div>
          </IconContext.Provider>
        </Col>
        <Col md="4">
          <IconContext.Provider value={{ color: "#FF0000", size: "25px" }}>
            <div className="logo7">
              <Youtube />
            </div>
          </IconContext.Provider>
        </Col>
        <Col md="4">
          <IconContext.Provider value={{ color: "#fff", size: "25px" }}>
            <div className="logo8">
              <Whatsapp />
            </div>
          </IconContext.Provider>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <IconContext.Provider value={{ color: "#fff", size: "25px" }}>
            <div className="logo9">
              <CNN />
            </div>
          </IconContext.Provider>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          {" "}
          <IconContext.Provider value={{ color: "#0072c6", size: "20px" }}>
            <div className="logo10">
              <Outlook />
            </div>
          </IconContext.Provider>
        </Col>
        <Col md="6">
          {" "}
          <IconContext.Provider value={{ color: "#fff", size: "25px" }}>
            <div className="logo11">
              <Vimeo />
            </div>
          </IconContext.Provider>
        </Col>
      </Row>
    </Container>
  );
};
export default SocialMediaGenerator;
