import React from "react";
import { IconContext } from "react-icons";
import {
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineWechat,
} from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { FcAddressBook } from "react-icons/fc";
import { GrMap } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import styled from "styled-components";
import AddLinkModal from "../../ProfileAddLinkModal/AddLink";

const Wechat = styled(AiOutlineWechat)`
  background: #7bb32e;
  color: #fff;
  padding: 7px;
  border-radius: 10px;
  margin-left: 2.5px;
`;
const Call = styled(IoCall)`
  background: linear-gradient(
    174deg,
    rgba(137, 224, 14, 1) 74%,
    rgba(126, 215, 0, 1) 81%
  );
  color: #fff;
  padding: 7px;
  border-radius: 10px;
  margin-left: 2.5px;
`;
const ContactProfiles = (props) => {
  return (
    <div>
      <AddLinkModal
        buttonTitle="Text"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px" }}>
            <AiOutlineFileText />
          </IconContext.Provider>
        }
        image="Text"
        icon="envelope-open-text"
        name="Text"
        type={props.type}
      />
      <AddLinkModal
        buttonTitle="Email"
        buttonLogo={
          <IconContext.Provider
            value={{
              size: "45px",
            }}
          >
            <AiOutlineMail />
          </IconContext.Provider>
        }
        image="Email"
        icon="mail-bulk"
        name="Email"
        type={props.type}
      />
      <AddLinkModal
        buttonTitle="Whatsapp"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#25d366" }}>
            <FaWhatsappSquare />
          </IconContext.Provider>
        }
        image="Whatsapp"
        icon="whatsapp"
        name="Whatsapp"
        type={props.type}
      />
      {/* <AddLinkModal
        buttonTitle="Wechat"
        buttonLogo={
          <IconContext.Provider
            value={{
              size: "50px",
            }}
          >
            <Wechat />
          </IconContext.Provider>
        }
        image="Wechat"
        icon="Wechat"
        name="Wechat"
        type={props.type}
      /> */}
      <AddLinkModal
        buttonTitle="Call"
        buttonLogo={
          <IconContext.Provider
            value={{
              size: "50px",
            }}
          >
            <Call />
          </IconContext.Provider>
        }
        image="Call"
        icon="contact"
        name="Call"
        type={props.type}
      />
      {/* <AddLinkModal
        buttonTitle="Contact Card"
        buttonLogo={
          <IconContext.Provider
            value={{
              size: "50px",
            }}
          >
            <FcAddressBook />
          </IconContext.Provider>
        }
        image="Contactcard"
        icon="contact-mail"
        name="Contact Card"
        type={props.type}
      /> */}
      <AddLinkModal
        buttonTitle="Address"
        buttonLogo={
          <IconContext.Provider
            value={{
              size: "50px",
            }}
          >
            <GrMap />
          </IconContext.Provider>
        }
        image="Pin"
        icon="pin"
        name="Address"
        type={props.type}
      />
    </div>
  );
};

export default ContactProfiles;
