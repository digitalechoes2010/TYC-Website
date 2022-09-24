import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import QRCode from "qrcode.react";
import "./styles/MyQR.css";
import { connect } from "react-redux";

function MyQR(props) {
  console.log(props.userData);
  return (
    <Container className="MyQR" fluid>
      <Helmet>
        <title>TYC - My QR Code</title>
      </Helmet>
      <Row>
        <Col className="MyQR-Header" xs={12}>
          <h3 className="MyQR-Header__Title">My QR Code</h3>
        </Col>
      </Row>
      <Row className="MyQR-QRContainer">
        <Col xs={12} className="MyQR-QR">
          <QRCode
            size={500}
            value={`https://tapyourchip.com/p/${props.userData.username}`}
            // value={`192.168.43.60:3000/p/${props.userData.username}`}
          />
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state: any) => {
  return {
    userData: state.UserReducer,
  };
};

export default connect(mapStateToProps, null)(MyQR);
