import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Button, Card, CardBody, Col, Collapse } from "reactstrap";
import styled from "styled-components";
import "./TransactionsAccordion.css";

const TransactionsAccordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const Arrow = styled(BsFillCaretDownFill)`
    position: absolute;
    right: 15px;
    top: 10px;
    transition: 1s;
    ${isOpen ? "transform:rotate(180deg)" : ""}
  `;
  return (
    <div className="TransactionsAccordion">
      <Button
        className={`TransactionsAccordion-Button ${props.className}`}
        color="primary"
        onClick={toggle}
        style={{ marginBottom: "1rem" }}
      >
        <Col>{props.data.id}</Col>
        <Col>{props.data.paymentStatus}</Col>
        <Col>{props.data.totalAmount}</Col>
        <Col>{props.data.status}</Col>
        <Col>{props.data.createdAt.slice(0, 10)}</Col>
        <IconContext.Provider value={{ color: "#fff", size: "20px" }}>
          <Arrow />
        </IconContext.Provider>
      </Button>
      <Collapse isOpen={isOpen}>
        <Card className={`TransactionsAccordion-Card ${props.CardClassName}`}>
          <CardBody
            className={`TransactionsAccordion-CardBody ${props.CardBodyClassName}`}
          >
            {props.CardBody}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default TransactionsAccordion;
