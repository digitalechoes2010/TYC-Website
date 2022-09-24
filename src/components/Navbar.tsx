import React, { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCartAlt } from "react-icons/bi";
import {
  FaFacebook,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import {
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  Label,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import styled from "styled-components";
import ProfilePicDark from "../assets/Images/Profile-Placeholder.png";
import Hamburger from "../assets/SVGs/Hamburger.svg";
import SidebarTYCLogo from "../assets/SVGs/Sidebar-TYC-Logo.svg";
import TYCLogo from "../assets/SVGs/TYCLogo.svg";
import { PathApi } from "../config/api.path.config";
import apiClient from "../config/clients";
import { logout } from "../store/Actions/loginActionCreator";
import { fetchUser } from "../store/Actions/userActionCreator";
import "./Navbar.css";
import NavbarCart from "./NavbarCart/NavbarCart";
import { SidebarData } from "./SidebarData";

const NavbarComponent = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 766);
  const [sidebar, setSidebar] = useState(false);
  const [check, setCheck] = useState(props.userData.isActive);
  const showSidebar = () => setSidebar(true);
  const toggle = () => setIsOpen(!isOpen);

  const handleCheck = () => {
    apiClient.get(PathApi.toggleProfileActivation).then((res) => {
      console.log(res);
      setCheck(!check);
      props.fetchUser(props.userData.id);
    });

    console.log(check);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 766);
    });
  });
  function useOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSidebar(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const sideBarRef = useRef(null);
  useOutsideClick(sideBarRef);
  const handleLogout = async () => {
    await props.doLogout();
    window.location.href = "/SignIn";
  };
  const renderSignInButton = () => {
    if (props.isLoggedIn.isLoggedIn === false)
      return (
        <NavItem className="Navbar-SignIn">
          <NavLink href="/SignIn" className="Navbar-SignIn__Btn">
            Sign In
          </NavLink>
        </NavItem>
      );
  };
  const renderNavbarCart = () => {
  //  if (props.isLoggedIn.isLoggedIn === true)
      return (
        <>
        
          <UncontrolledDropdown
            className="Navbar-Item Navbar-Cart__Container"
            nav
            inNavbar
          >
            <DropdownToggle 
              nav
              caret={isMobile === true ? false : true}
              className="Navbar-Cart"
            >
              <IconContext.Provider
                value={{
                  className: "Navbar-Cart__icon",
                  color: "#000",
                  size: "50px",
                }}
              
              >
                <BiCartAlt    />
              </IconContext.Provider>
              <p > ({props.Cart.Cart.length})</p>
            </DropdownToggle>
            <DropdownMenu className="Navbar-Cart_Dropdown" right>
              <Row>
                <NavbarCart />
              </Row>
              <Row></Row>
              <Row>
                <NavLink className="Navbar-Checkout" href="/Cart">
                  CHECKOUT
                </NavLink>
              </Row>
            </DropdownMenu>
          </UncontrolledDropdown>
        </>
      );
  };
  const renderSidebar = () => {
    if (props.isLoggedIn.isLoggedIn === true)
      return (
        <>
          {" "}
          <IconContext.Provider value={{ color: "#fff" }}>
            <div className="Sidebar-btn" id="sidebarButton">
              <Link to="#" className="Sidebar-menuBars">
                <img
                  src={
                    props.userData.profilePic
                      ? props.userData.profilePic
                      : ProfilePicDark
                  }
                  onClick={showSidebar}
                  className="Sidebar-toggler__btn"
                />
              </Link>
            </div>{" "}
            <nav
              className={sidebar ? "Sidebar-menu active" : "Sidebar-menu"}
              ref={sideBarRef}
            >
              <div className="Sidebar-Header">
                <Col xs={4} className="p-0 Sidebar-Header__Col">
                  <img
                    className="Sidebar-Header__pic"
                    src={
                      props.userData.profilePic
                        ? props.userData.profilePic
                        : ProfilePicDark
                    }
                  />
                </Col>
                <Col xs={7} className="Sidebar-Header__ColInfo">
                  <h4 className="Sidebar-Header__username">
                    {props.userData.name}
                  </h4>
                  <p className="Sidebar-Header__accountLink">
                    tapyourchip.com/{props.userData.link}
                  </p>{" "}
                  <Switch
                    onChange={handleCheck}
                    checked={check}
                    className="Sidebar-Header__ProfileSwitch"
                    width={75}
                    height={23}
                    handleDiameter={20}
                    onColor="transparent"
                    offColor="transparent"
                    onHandleColor="#ff9100"
                    checkedIcon={<p style={{ marginLeft: "25px" }}>On</p>}
                    uncheckedIcon={<p>Off</p>}
                  />
                </Col>
              </div>
              <ul className="Sidebar-menuItems" onClick={showSidebar}>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}

                <button
                  className="Sidebar-text Sidebar-Logout"
                  onClick={handleLogout}
                >
                  <GoSignOut />
                  <span> Logout</span>
                </button>
              </ul>
              <div className="Sidebar-Footer">
                <img
                  className="Sidebar-Footer__Logo"
                  src={SidebarTYCLogo}
                  alt=""
                />
                <div className="Sidebar-Footer__SocialFlow">
                  {" "}
                  <NavLink href="/" className="p-0 ">
                    <IconContext.Provider
                      value={{
                        color: "white",
                        className: "Sidebar-Footer__SocialLink",
                      }}
                    >
                      {" "}
                      <SideTwitter />
                    </IconContext.Provider>
                  </NavLink>
                  <NavLink href="/" className="p-0 ">
                    <IconContext.Provider
                      value={{
                        color: "white",
                        className: "Sidebar-Footer__SocialLink",
                      }}
                    >
                      {" "}
                      <SideInstagram />
                    </IconContext.Provider>
                  </NavLink>
                  <NavLink href="/" className="p-0 ">
                    {" "}
                    <IconContext.Provider
                      value={{
                        color: "white",
                        className: "Sidebar-Footer__SocialLink",
                      }}
                    >
                      {" "}
                      <SideFacebook />
                    </IconContext.Provider>
                  </NavLink>
                </div>
              </div>
            </nav>
          </IconContext.Provider>
        </>
      );
  };

  const Facebook = styled(FaFacebookSquare)`
    color: #00457c;
    ${isMobile && "transform: scale(2)"};
    background-color: #fff;
    border-radius: 2px;
  `;
  const Instagram = styled(FiInstagram)`
    background: linear-gradient(
      45deg,
      #405de6,
      #5851db,
      #833ab4,
      #c13584,
      #e1306c,
      #fd1d1d
    );
    color: #fff;
    ${isMobile && "transform: scale(2)"};
    border-radius: 2px;
    padding: 1px;
  `;
  const Linkedin = styled(FaLinkedin)`
    color: #0e76a8;
    background-color: #fff;
    ${isMobile && "transform: scale(2)"};
    border-radius: 2px;
  `;
  const Twitter = styled(FaTwitterSquare)`
    color: #1da1f2;
    background-color: #fff;
    ${isMobile && "transform: scale(2)"};
    border-radius: 2px;
  `;
  const SideTwitter = styled(FaTwitter)`
    color: #fff;
    transform: scale(1.5);
    margin-left: 1rem;
  `;
  const SideInstagram = styled(FaInstagram)`
    color: #fff;
    transform: scale(1.5);
    margin-left: 1rem;
  `;
  const SideFacebook = styled(FaFacebook)`
    color: #fff;
    transform: scale(1.5);
    margin-left: 1rem;
  `;
  const ColoredLine = () => (
    <hr
      style={{
        height: 1,
        width: "80%",
        display: isMobile ? "block" : "none",
        background:
          "linear-gradient(198deg, rgba(219,194,0,1) 0%, rgba(255,200,0,1) 31%, rgba(252,0,255,1) 100%)",
      }}
    />
  );
  return (
    <Navbar className="Navbar" color="none" expand="md">
      <NavbarBrand href="/" className="Navbar-Brand__Container">
        <img className="Navbar-Brand" src={TYCLogo} alt="" />
      </NavbarBrand>
      <div className="Navbar-Brand_whiteBackground"></div>
      <NavbarBrand href="/" className="Navbar-Brand__ContainerMobile">
        <img className="Navbar-Brand_mobile" src={TYCLogo} alt="" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="mr-2 Navbar-Btn__Container">
        <button className="Navbar-Btn">
          <img src={Hamburger} alt="" />
        </button>
      </NavbarToggler>
      {renderSidebar()}
      <Collapse className="Navbar-Collapse" isOpen={isOpen} navbar>
        <Nav className="Navbar-LinkGroup" navbar>
          <NavItem className="Navbar-Item">
            <NavLink
              className="Navbar-Link"
              href="/#Features"
              onClick={() => setIsOpen(false)}
            >
              Features
            </NavLink>
          </NavItem>
          <ColoredLine />
          <NavItem className="Navbar-Item">
            <NavLink
              className="Navbar-Link"
              href="/#HowItWorks"
              onClick={() => setIsOpen(false)}
            >
              How it Works
            </NavLink>
          </NavItem>
          <ColoredLine />
          <NavItem className="Navbar-Item">
            <NavLink
              className="Navbar-Link"
              href="/Shop"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </NavLink>
          </NavItem>
          <ColoredLine />
          <NavItem className="Navbar-Item">
            <NavLink
              className="Navbar-Link"
              href="/#Form"
              onClick={() => setIsOpen(false)}
            >
              Distributors
            </NavLink>
          </NavItem>
          <ColoredLine />
          <NavItem className="Navbar-Item">
            <NavLink
              className="Navbar-Link"
              href="/Support"
              onClick={() => setIsOpen(false)}
            >
              Support
            </NavLink>
          </NavItem>
          <ColoredLine />
        </Nav>
        <Nav className="Navbar-SocialMedia__Container">
          <NavItem className="Navbar-SocialMedia__Group">
            <NavLink href="https://www.facebook.com/Tap-Your-Chip-105710638165806" className="Navbar-SocialMedia">
              <Facebook />
            </NavLink>
            <NavLink href="https://www.instagram.com/tapyourchip/" className="Navbar-SocialMedia">
              <Instagram />
            </NavLink>
            <NavLink href="https://twitter.com/tapyourchip" className="Navbar-SocialMedia">
              <Twitter />
            </NavLink>
            <NavLink href="https://www.linkedin.com/company/tap-your-chip/" className="Navbar-SocialMedia">
              <Linkedin />
            </NavLink>
          </NavItem>
        </Nav>
        {renderSignInButton()}
        <Form className="Navbar-Search">
          <Label className="Navbar-Search__Label" for="search">
            <AiOutlineSearch />
          </Label>
          <Input
            className="Navbar-Search__Input np-border"
            type="search"
            name="search"
            id="search"
            placeholder="Search"
          />
        </Form>{" "}
        {renderNavbarCart()}
      </Collapse>
      <div className="Navbar-Cart__MobileContainer">
        
              <NavLink href="/Cart" >
                <IconContext.Provider
                  value={{
                    className: "Navbar-Cart__icon",
                    color: "#000",
                    size: "30px",
                   
                  }}
                >
                  <BiCartAlt />
                </IconContext.Provider>
              </NavLink>
              <p>
                ({props.Cart.Cart.length}
              )
              </p>
            
          </div>
    </Navbar>
  );
};

function mapStateToProps(state: any) {
  return {
    Cart: state.CartReducer,
    isLoggedIn: state.LoginReducer,
    userData: state.UserReducer,
  };
}
const mapDispatchToProps = (dispatch: any) => ({
  doLogout: () => dispatch(logout()),
  fetchUser: (id: any) => dispatch(fetchUser(id)),
});
const MemoNavbar = React.memo(NavbarComponent);
export default connect(mapStateToProps, mapDispatchToProps)(MemoNavbar);
