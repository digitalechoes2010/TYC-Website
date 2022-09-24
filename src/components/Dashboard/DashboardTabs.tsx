import classnames from "classnames";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
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
import MediaUploadModal from "../CustomComponents/Modals/MediaUploadModal/MediaUploadModal";
import ProfileModal from "../CustomComponents/Modals/ProfileModal/ProfileModal";
import SocialModal from "../CustomComponents/Modals/SocialModal/SocialModal";
import DashboardBusinessForm from "./DashboardBusinessForm";
import "./styles/DashboardTabs.css";

const DashboardTabs = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [editing, setEditing] = useState(false);
  const [mediaUpload, setMediaUpload] = useState(false);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const handleEditing = () => {
    setEditing(!editing);
  };
  const toggleMediaUpload = () => {
    setMediaUpload(!mediaUpload);
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
      <Nav className="DashboardTabs" tabs>
        {props.profile === "Personal" ? (
          <NavItem
            className={`DashboardTabs-Social__Solo ${
              activeTab === "1"
                ? "DashboardTabs-active"
                : "DashboardTabs-inactive"
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
            className={`DashboardTabs-Business__Solo ${
              activeTab === "2"
                ? "DashboardTabs-active__BusinessSolo"
                : "DashboardTabs-inactive"
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
              className={`DashboardTabs-Social ${
                activeTab === "1"
                  ? "DashboardTabs-active"
                  : "DashboardTabs-inactive"
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
              className={`DashboardTabs-Business ${
                activeTab === "2"
                  ? "DashboardTabs-active"
                  : "DashboardTabs-inactive"
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
      <TabContent className="DashboardTabs-TabContent" activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className="DashboardTabs-SocialProfile">
            <Col
              xlg={1}
              lg={2}
              md={3}
              sm={6}
              xs={6}
              className="DashboardTabs-AddButton"
            >
              <ProfileModal type="SOCIAL" />
            </Col>
            {props.socialProfiles &&
              props.socialProfiles.map((p: any) => {
                return (
                  <Col
                    xlg={1}
                    lg={2}
                    md={3}
                    sm={6}
                    xs={6}
                    className="DashboardTabs-AddButton"
                  >
                    <SocialModal profile={p} type="SOCIAL" title={p.name} />
                  </Col>
                );
              })}
          </Row>
        </TabPane>
        <TabPane tabId="2">
          {editing === false ? (
            <Row>
              <Col className="p-0">
                <div className="DashboardTabs-Business__Content">
                  <div>
                    <div className="DashboardTabs-Business__info">
                      <CgProfile /> {props.userData.name}
                    </div>

                    {props.userData.buisnessCard &&
                      props.userData.buisnessCard.map((i) => {
                        return (
                          i.uri && (
                            <div className="DashboardTabs-Business__info">
                              {renderCardIcons(i.name)} {i.uri}
                            </div>
                          )
                        );
                      })}
                  </div>
                  <button
                    className="DashboardTabs-Business__EditButton"
                    onClick={() => handleEditing()}
                  >
                    <IconContext.Provider
                      value={{
                        size: "25px",
                        color: "#fff",
                      }}
                    >
                      <BiEdit />
                    </IconContext.Provider>
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            <DashboardBusinessForm
              toggleEditing={() => handleEditing()}
              CardData={props.userData.buisnessCard}
            />
          )}
          <div className="DashboardTabs-MediaSection">
            <h3 className="DashboardTabs-SubTitles">Media</h3>
            <Row className="DashboardTabs-MediaSection__Header">
              <Col
                xlg={1}
                lg={2}
                md={3}
                sm={6}
                xs={6}
                className="DashboardTabs-AddButton p-0"
              >
                <MediaUploadModal />
              </Col>
              {props.userData.medias &&
                props.userData.medias.map((m: any) => {
                  return (
                    <Col
                      xlg={1}
                      lg={2}
                      md={3}
                      sm={6}
                      xs={6}
                      className="DashboardTabs-MediaButton p-0"
                    >
                      <MediaCard media={m} />
                    </Col>
                  );
                })}
            </Row>
          </div>

          <div className="DashboardTabs-ProfilesSection">
            <h3 className="DashboardTabs-SubTitles">Links</h3>
            <Row className="DashboardTabs-SocialProfile">
              <Col
                xlg={1}
                lg={2}
                md={3}
                sm={6}
                xs={6}
                className="DashboardTabs-AddButton p-0"
              >
                <ProfileModal type="BUSINESS" />
              </Col>
              {props.businessProfiles &&
                props.businessProfiles.map((p: any) => {
                  return (
                    <Col
                      xlg={1}
                      lg={2}
                      md={3}
                      sm={6}
                      xs={6}
                      className="DashboardTabs-AddButton p-0"
                    >
                      <SocialModal profile={p} type="BUSINESS" title={p.name} />
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

export default DashboardTabs;
