import classnames from "classnames";
import React, { useState } from "react";
import { Col, Nav, NavItem, NavLink } from "reactstrap";
import "./categoryTabs.css";

const CategoryTabs = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs className="category-tabs">
        <Col xs="12" md="2">
          <NavItem className="category-tabs_Item">
            <NavLink
              className={`${classnames({
                active: activeTab === "1",
              })} categoryTabs-Headers`}
              onClick={() => {
                toggle("1");
                props.handleCategory("");
              }}
            >
              All
            </NavLink>
          </NavItem>
        </Col>
        {props.category &&
          props.category.map((c: any, index: any) => {
            let tabId = c.id;
            return (
              <Col xs="12" md="2">
                <NavItem className="category-tabs_Item">
                  <NavLink
                    className={`${classnames({
                      active: activeTab === tabId,
                    })} categoryTabs-Headers`}
                    onClick={() => {
                      toggle(tabId);
                      props.handleCategory(c.id);
                    }}
                  >
                    {c.title}
                  </NavLink>
                </NavItem>
              </Col>
            );
          })}
      </Nav>
    </div>
  );
};

export default CategoryTabs;
