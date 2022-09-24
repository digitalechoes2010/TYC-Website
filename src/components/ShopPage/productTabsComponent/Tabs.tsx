import classnames from "classnames";
import React, { useState } from "react";
import {
  Card,
  CardText,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import "./Tabs.css";

const Tabs = (props: any) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: any) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs className="product-Tabs">
        <NavItem className="NavItem">
          <NavLink
            className={`${classnames({
              active: activeTab === "1",
            })} Tabs-Headers`}
            onClick={() => {
              toggle("1");
            }}
          >
            Description
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className="Tabs-description">
            <Col
              sm="12"
              dangerouslySetInnerHTML={{ __html: props.description }}
            />
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tabs;
