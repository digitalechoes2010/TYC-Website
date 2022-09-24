import React from "react";
import { IconContext } from "react-icons";
import {
  FaFacebook,
  FaLinkedinIn,
  FaPinterest,
  FaSnapchatSquare,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import styled from "styled-components";
import AddLinkModal from "../../ProfileAddLinkModal/AddLink";
import "./SocialMediaProfiles.css";
import { SiTiktok, SiOnlyfans } from "react-icons/si";
const Instagram = styled(GrInstagram)`
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
  padding: 7px;
  border-radius: 10px;
  margin-left: 2.5px;
`;
const SocialMediaProfiles = (props) => {
  console.log("prof", props.type);
  return (
    <div>
      <AddLinkModal
        buttonTitle="Facebook"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#3b5998" }}>
            <FaFacebook />
          </IconContext.Provider>
        }
        image="Facebook"
        icon="facebook-square"
        name="Facebook"
        type={props.type}
      />
      <AddLinkModal
        buttonTitle="Instagram"
        buttonLogo={
          <IconContext.Provider
            value={{
              size: "45px",
            }}
          >
            <Instagram />
          </IconContext.Provider>
        }
        image="Instagram"
        icon="instagram-square"
        name="Instagram"
        type={props.type}
      />
      <AddLinkModal
        buttonTitle="Snapchat"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#FFFC00" }}>
            <FaSnapchatSquare />
          </IconContext.Provider>
        }
        image="Snapchat"
        icon="snapchat-square"
        name="Snapchat"
        type={props.type}
      />
      <AddLinkModal
        buttonTitle="Twitter"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#1DA1F2" }}>
            <FaTwitter />
          </IconContext.Provider>
        }
        image="Twitter"
        icon="twitter-square"
        name="Twitter"
        type={props.type}
      />
      <AddLinkModal
        buttonTitle="Linkedin"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#0077b5" }}>
            <FaLinkedinIn />
          </IconContext.Provider>
        }
        image="Linkedin"
        icon="linkedin"
        name="Linkedin"
        type={props.type}
      />
      <AddLinkModal
        buttonTitle="Youtube"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#FF0000" }}>
            <FaYoutube />
          </IconContext.Provider>
        }
        image="Youtube"
        icon="youtube-square"
        name="Youtube"
        type={props.type}
      />
      <AddLinkModal
        buttonTitle="Twitch"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#6441A4" }}>
            <FaTwitch />
          </IconContext.Provider>
        }
        image="Twitch"
        icon="twitch"
        name="Twitch"
        type={props.type}
      />
      <AddLinkModal
        buttonTitle="Pinterest"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#E60023" }}>
            <FaPinterest />
          </IconContext.Provider>
        }
        image="Pinterest"
        icon="pinterest-square"
        name="Pinterest"
        type={props.type}
      />
      <AddLinkModal
        buttonTitle="Tiktok"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#000" }}>
            <SiTiktok />
          </IconContext.Provider>
        }
        image="Tictok"
        icon="tictok-square"
        name="Tiktok"
        type={props.type}
      />
      <AddLinkModal
        buttonTitle="Onlyfans"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#00AFF0" }}>
            <SiOnlyfans />
          </IconContext.Provider>
        }
        image="Onlyfans"
        icon="onlyfans-square"
        name="Onlyfans"
        type={props.type}
      />
    </div>
  );
};

export default SocialMediaProfiles;
