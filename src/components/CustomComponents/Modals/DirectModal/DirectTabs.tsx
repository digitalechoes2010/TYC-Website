import classnames from "classnames";
import React, { useState } from "react";
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import DirectItem from "./DirectItem";
import "./DirectTabs.css";

const DirectTabs = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs className="DirectTabs">
        <NavItem className="DirectTabs-Social">
          <NavLink
            className={`${classnames({
              active: activeTab === "1",
            })} ${
              activeTab === "2" && "DirectTabs-linkOff"
            } DirectTabs-Social__link `}
            onClick={() => {
              toggle("1");
            }}
          >
            Social
          </NavLink>
        </NavItem>
        <NavItem className="DirectTabs-Business">
          <NavLink
            className={`${classnames({
              active: activeTab === "2",
            })} ${
              activeTab === "1" && "DirectTabs-linkOff"
            } DirectTabs-Business__link`}
            onClick={() => {
              toggle("2");
            }}
          >
            Business
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            {props.socialProfiles &&
              props.socialProfiles.map((c) => {
                return (
                  <Col sm="12">
                    <DirectItem
                      name={c.name}
                      id={c.id}
                      makeDirectId={props.makeDirectId}
                      activeDirect={props.activeDirect}
                      autoFocus={c.id === props.activeDirect ? true : false}
                    />{" "}
                  </Col>
                );
              })}
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            {props.businessProfiles &&
              props.businessProfiles.map((c) => {
                return (
                  <Col sm="12">
                    <DirectItem
                      name={c.name}
                      id={c.id}
                      makeDirectId={props.makeDirectId}
                      activeDirect={props.activeDirect}
                      autoFocus={c.id === props.activeDirect ? true : false}
                    />{" "}
                  </Col>
                );
              })}
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};
export default DirectTabs;
