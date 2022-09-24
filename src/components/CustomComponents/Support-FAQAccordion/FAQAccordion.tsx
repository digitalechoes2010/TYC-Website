import React, { useState } from "react";
import { Button, Card, CardBody, Collapse } from "reactstrap";
import "./FAQAccordion.css";

const FAQAccordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="FAQAccordion">
      <Button
        className={`FAQAccordion-Button ${props.className}`}
        color="primary"
        onClick={toggle}
        style={{ marginBottom: "1rem" }}
      >
        <p>{props.title}</p>

        <div
          className={`FAQAccordion-plus ${
            isOpen ? "FAQAccordion-opened" : "FAQAccordion-closed"
          }`}
        >
          <div className="horizontal"></div>
          <div className="vertical"></div>
        </div>
      </Button>
      <Collapse isOpen={isOpen}>
        <Card className={`FAQAccordion-Card ${props.CardClassName}`}>
          <CardBody
            className={`FAQAccordion-CardBody ${props.CardBodyClassName}`}
          >
            {props.CardBody}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default FAQAccordion;
