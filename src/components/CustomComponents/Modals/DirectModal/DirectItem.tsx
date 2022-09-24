import React from "react";
import { Col, Row } from "reactstrap";
import RenderIcon from "../../../iconHelper";
import "./DirectItem.css";
export default function DirectItem(props) {
  return (
    <button tabIndex={-1} className="DirectItem" onClick={() => props.makeDirectId(props.id)}>
      <Row>
        <Col xs={5} className="DirectItem-Icon">
          <RenderIcon name={props.name} size="50px" />
        </Col>
        <Col xs={5} className="DirectItem-name">
          {props.name}
        </Col>
      </Row>
    </button>
  );
}
