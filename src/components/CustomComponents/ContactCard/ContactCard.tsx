import React from "react";
import { GoLocation } from "react-icons/go";
import { Col, Container, Row } from "reactstrap";
import ProfilePic from "../../../assets/Images/Profile-Placeholder light.png";
import "./ContactCard.css";

export default function ContactCard(props) {
  const handleProfile = () => {
    window.location.href = `/PublicProfile/${props.contact.userId}`;
  };

  return (
    <Container fluid className="ContactCard-Container p-0">
      <Row className="ContactCard">
        <Col xs={3} className="p-0 ContactCard-ProfilePic__Container">
          <img
            className="ContactCard-ProfilePic"
            src={
              props.contact.profilePic ? props.contact.profilePic : ProfilePic
            }
            onClick={handleProfile}
          />
        </Col>
        <Col xs={5} className="ContactCard-Info p-0">
          <p className="ContactCard-Contact" onClick={handleProfile}>
            {`Contact: ${props.contact.userName}`}
          </p>
          <p
            className="ContactCard-Location"
            onClick={handleProfile}
          >{`Location: ${props.contact.location}`}</p>
        </Col>
        <Col xs={3} className="ContactCard-Maps p-0">
          <a
            className="ContactCard-MapsLink"
            href={`http://maps.google.com?q=${props.contact.lat},${props.contact.lng}`}
            target="_blank"
          >
            <GoLocation />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
