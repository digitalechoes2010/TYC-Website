import React from "react";
import { IconContext } from "react-icons";
import {
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineWechat,
} from "react-icons/ai";
import { FaWhatsappSquare, FaYelp } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import Customizee from '../../../../../assets/Images/customimage.png';
import { SiLinktree } from "react-icons/si";
import styled from "styled-components";
import CustomLink from "../../CustomLinkModal/CustomLink";
import AddLinkModal from "../../ProfileAddLinkModal/AddLink";

const Yelp = styled(FaYelp)`
  background: #f43939;
  color: #fff;
  padding: 7px;
  border-radius: 10px;
  margin-left: 2.5px;
`;
const MoreProfiles = (props) => {
  return (
    <div>
      <AddLinkModal
        buttonTitle="Yelp"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px" }}>
            <Yelp />
          </IconContext.Provider>
        }
        image="Yelp"
        icon="yelp"
        name="Yelp"
        type={props.type}
      />
      <AddLinkModal
        buttonTitle="Calendly"
        buttonLogo={
          <IconContext.Provider
            value={{
              size: "45px",
            }}
          >
            <FcCalendar />
          </IconContext.Provider>
        }
        image="Calendly"
        icon="calendar-plus"
        name="Calendly"
        type={props.type}
      />
      <AddLinkModal
        buttonTitle="Linktree"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#25d366" }}>
            <SiLinktree />
          </IconContext.Provider>
        }
        image="Linktree"
        icon="tree"
        name="Linktree"
        type={props.type}
      />
      
      <AddLinkModal
        buttonTitle="Custom Link"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#25d366" }}>
        <img src={Customizee} width="50px" />
          </IconContext.Provider>
        }
        image="Customlink"
        icon="tree"
        name="Custom Link"
        type={props.type}
      />
      
    </div>
  );
};

export default MoreProfiles;
