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
import "./AnalyticsTabs.css";
import { VictoryChart, VictoryBar, VictoryTheme } from "victory";
import Icon from "./Icon";

const AnalyticsTabs = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav className="AnalyticsTabs" tabs>
        {props.profile === "Personal" ? (
          <NavItem
            className={`AnalyticsTabs-Social__Solo ${
              activeTab === "1"
                ? "AnalyticsTabs-active"
                : "AnalyticsTabs-inactive"
            }`}
          >
            <NavLink
              className={`${classnames({
                active: activeTab === "1",
              })} `}
              onClick={() => {
                toggle("1");
              }}
            >
              SOCIAL
            </NavLink>{" "}
            {toggle("1")}
          </NavItem>
        ) : props.profile === "Business" ? (
          <NavItem
            className={`AnalyticsTabs-Business__Solo ${
              activeTab === "2"
                ? "AnalyticsTabs-active__BusinessSolo"
                : "AnalyticsTabs-inactive"
            }`}
          >
            <NavLink
              className={`${classnames({
                active: activeTab === "2",
              })}`}
              onClick={() => {
                toggle("2");
              }}
            >
              BUSINESS
            </NavLink>
            {toggle("2")}
          </NavItem>
        ) : (
          <>
            <NavItem
              className={`AnalyticsTabs-Social ${
                activeTab === "1"
                  ? "AnalyticsTabs-active"
                  : "AnalyticsTabs-inactive"
              }`}
            >
              <NavLink
                className={`${classnames({
                  active: activeTab === "1",
                })} `}
                onClick={() => {
                  toggle("1");
                }}
              >
                SOCIAL
              </NavLink>
            </NavItem>
            <NavItem
              className={`AnalyticsTabs-Business ${
                activeTab === "2"
                  ? "AnalyticsTabs-active"
                  : "AnalyticsTabs-inactive"
              }`}
            >
              <NavLink
                className={`${classnames({
                  active: activeTab === "2",
                })}`}
                onClick={() => {
                  toggle("2");
                }}
              >
                BUSINESS
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
      <TabContent className="AnalyticsTabs-TabContent" activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className="AnalyticsTabs-SocialProfile">
            <Col xs={12} lg={7} className="AnalyticsTabs-Graph p-0">
              <h3 className="AnalyticsTabs-Graph__Title">Last 7 Days</h3>
              <p className="AnalyticsTabs-Graph__SubTitle">
                Contacts made during last 7 days
              </p>
              <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={{ x: 20 }}
              >
                <VictoryBar
                  barRatio={0.5}
                  data={props.data}
                  x="week"
                  y="value"
                  style={{ data: { fill: "#c43a31" } }}
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 },
                  }}
                />
              </VictoryChart>
            </Col>
            <Col xs={12} lg={4} className="AnalyticsTabs-TopApps p-0">
              <h3 className="AnalyticsTabs-TopApps__Header">Top Apps</h3>
              <p className="AnalyticsTabs-TopApps__SubTitle">
                Links clicked by your contacts 
              </p>
              <div className="AnalyticsTabs-TopApps__Container">
                {props.userData["socialProfiles"] &&
                props.userData["socialProfiles"].length > 0 ? (
                  props.userData["socialProfiles"]
                    .slice(0, 3)
                    .map((item: any, i: any) => {
                      return <Icon name={item.name} count={item.count} />;
                    })
                ) : (
                  <h3 style={{ textAlign: "center", marginTop: 20 }}>
                    No Data Found
                  </h3>
                )}
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          {" "}
          <Row className="AnalyticsTabs-SocialProfile">
            <Col xs={12} lg={7} className="AnalyticsTabs-Graph p-0">
              <h3 className="AnalyticsTabs-Graph__Title">Last 7 Days</h3>
              <p className="AnalyticsTabs-Graph__SubTitle">
                Contacts made during last 7 days
              </p>
              <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={{ x: 20 }}
              >
                <VictoryBar
                  barRatio={0.5}
                  data={props.data}
                  x="week"
                  y="value"
                  style={{ data: { fill: "#c43a31" } }}
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 },
                  }}
                />
              </VictoryChart>
            </Col>
            <Col xs={12} lg={4} className="AnalyticsTabs-TopApps p-0">
              <h3 className="AnalyticsTabs-TopApps__Header">Top Apps</h3>
              <p className="AnalyticsTabs-TopApps__SubTitle">
                Links clicked by your contacts 
              </p>
              <div className="AnalyticsTabs-TopApps__Container">
                {props.userData["businessProfiles"] &&
                props.userData["businessProfiles"].length > 0 ? (
                  props.userData["businessProfiles"]
                    .slice(0, 3)
                    .map((item: any, i: any) => {
                      return <Icon name={item.name} count={item.count} />;
                    })
                ) : (
                  <h3 style={{ textAlign: "center", marginTop: 20 }}>
                    No Data Found
                  </h3>
                )}
              </div>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default AnalyticsTabs;
