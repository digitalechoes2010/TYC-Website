import { Col, Container, Row } from "reactstrap";
import CTAimg from "../../assets/Images/CTA.png";
import "./styles/CTA.css";

export default function CTA() {
  return (
    <Container className="CTA" fluid>
      <Row>
        <Col
          xs={{ size: 12, order: 2 }}
          md={{ size: 6, order: 1 }}
          lg={{ size: 7, order: 1 }}
          className="CTA-Text"
        >
          <h2>Interested in Distributing Our Products in Your Store?</h2>
        </Col>
        <Col
          xs={{ size: 12, order: 1 }}
          md={{ size: 6, order: 1 }}
          lg={{ size: 5, order: 2 }}
        >
          {" "}
          <div className="CTA-Image">
            <img src={CTAimg} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
