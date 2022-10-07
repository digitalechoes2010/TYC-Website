import classnames from "classnames";
import React, { useState } from "react";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaIndustry } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { MdLocationCity } from "react-icons/md";
import { RiFocus3Line } from "react-icons/ri";
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import MediaCard from "../CustomComponents/MediaCard/MediaCard";
import { validURLS } from "../FormHelper/LinksValidations";
import RenderIcon from "../iconHelper";
import "./PublicProfileTabs.css";

const PublicProfileTabs = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const openInNewTab = (uri: any, title: any) => {
    if (title === "Email") {
      window.open(`mailto:${uri}`);
    } else if (title === "Call") {
      window.open(`tel:${uri}`);
    } else if (title === "Text") {
      window.open(`sms:${uri}`);
    } else {
      const newWindow = window.open(
        validURLS(uri, title),
        "_blank",
        "noopener,noreferrer"
      );
      if (newWindow) newWindow.opener = null;
    }
  };
  const renderCardIcons = (name) => {
    switch (name) {
      case "phone":
        return <AiTwotonePhone />;
        break;

      case "email":
        return <AiOutlineMail />;
        break;

      case "skills":
        return <GiSkills />;
        break;

      case "job":
        return <BsFillBriefcaseFill />;
        break;

      case "industry":
        return <FaIndustry />;
        break;
      case "education":
        return <IoSchoolSharp />;
        break;
      case "interests":
        return <RiFocus3Line />;
        break;
      case "address":
        return <MdLocationCity />;
        break;

      default:
        return null;
    }
  };
  return (
    <div>
      <Nav className="PublicProfileTabs" tabs>
        {props.userData.Profile === "Personal" ? (
          <NavItem
            className={`PublicProfileTabs-Social__Solo ${
              activeTab === "1"
                ? "PublicProfileTabs-active"
                : "PublicProfileTabs-inactive"
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
            className={`PublicProfileTabs-Business__Solo ${
              activeTab === "2"
                ? "PublicProfileTabs-active__BusinessSolo"
                : "PublicProfileTabs-inactive"
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
              className={`PublicProfileTabs-Social ${
                activeTab === "1"
                  ? "PublicProfileTabs-active"
                  : "PublicProfileTabs-inactive"
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
              className={`PublicProfileTabs-Business ${
                activeTab === "2"
                  ? "PublicProfileTabs-active"
                  : "PublicProfileTabs-inactive"
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
      <TabContent
        className="PublicProfileTabs-TabContent"
        activeTab={activeTab}
      >
        <TabPane tabId="1">
          <Row className="PublicProfileTabs-SocialProfile">
            {props.userData.socialProfiles &&
              props.userData.socialProfiles.map((p: any) => {
                return (
                  <Col
                    xlg={1}
                    lg={2}
                    md={3}
                    sm={6}
                    xs={6}
                    className="PublicProfileTabs-LinkButton"
                  >
                    <button
                      className="PublicProfileTabs-LinkButton"
                      onClick={() => {
                        openInNewTab(p.uri, p.name);
                        console.log(p.uri, p.name);
                      }}
                    >
                      <RenderIcon name={p.name} size="100px" />
                      <p className="PublicProfileTabs-LinkButton__name">
                        {p.name}
                      </p>
                    </button>
                  </Col>
                );
              })}
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col className="p-0">
              <div className="PublicProfileTabs-Business__Content">
                <div>
                  <div className="PublicProfileTabs-Business__info">
                    <CgProfile /> {props.userData.name}
                  </div>
                  {console.log(props.userData)}
                  {props.userData.buisnessCard &&
                    props.userData.buisnessCard.map((i) => {
                      return (
                        i.uri && (
                          <div className="PublicProfileTabs-Business__info">
                            {renderCardIcons(i.name)} {i.uri}
                          </div>
                        )
                      );
                    })}
                </div>
              </div>
            </Col>
          </Row>

          <div>
            <h3 className="PublicProfileTabs-SubTitles">Media</h3>
            <Row className="PublicProfileTabs-MediaSection__Header">
              {props.userData.medias &&
                props.userData.medias.map((m: any) => {
                  return (
                    <Col
                      xlg={1}
                      lg={2}
                      md={3}
                      sm={6}
                      xs={6}
                      className="PublicProfileTabs-MediaButton p-0"
                    >
                      <MediaCard media={m} />
                    </Col>
                  );
                })}
            </Row>
          </div>
          <div>
            <h3 className="PublicProfileTabs-SubTitles">Links</h3>
            <Row className="PublicProfileTabs-businessProfile">
              {props.userData.businessProfiles &&
                props.userData.businessProfiles.map((p: any) => {
                  return (
                    <Col
                      xlg={1}
                      lg={2}
                      md={3}
                      sm={6}
                      xs={6}
                      className="PublicProfileTabs-LinkButton"
                    >
                      <button
                        className="PublicProfileTabs-LinkButton"
                        onClick={() => openInNewTab(p.uri, p.name)}
                      >
                        <RenderIcon name={p.name} size="100px" />
                        <p className="PublicProfileTabs-LinkButton__name">
                          {p.name}
                        </p>
                      </button>
                    </Col>
                  );
                })}
            </Row>
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default PublicProfileTabs;
