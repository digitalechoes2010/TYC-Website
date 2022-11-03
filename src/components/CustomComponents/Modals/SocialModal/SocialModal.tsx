import { Dispatch, useState } from "react";
import { Field, Form } from "react-final-form";
import { IconContext } from "react-icons";
import {
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineWechat,
} from "react-icons/ai";
import { BsFillPlusSquareFill, BsMusicNoteBeamed } from "react-icons/bs";
import {
  FaFacebook,
  FaLinkedinIn,
  FaPaypal,
  FaPinterest,
  FaSnapchatSquare,
  FaSoundcloud,
  FaSpotify,
  FaTwitch,
  FaTwitter,
  FaWhatsappSquare,
  FaYelp,
  FaYoutube,
} from "react-icons/fa";
import { FcAddressBook, FcCalendar } from "react-icons/fc";
import { GrInstagram, GrMap } from "react-icons/gr";
import { IoCall, IoLogoVenmo } from "react-icons/io5";
import { RiWindowLine } from "react-icons/ri";
import { SiCashapp, SiLinktree, SiOnlyfans, SiTiktok } from "react-icons/si";
import { connect } from "react-redux";
import customlink from "../../../../assets/Images/file.png"
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import styled from "styled-components";
import {
  deleteUserProfileItem,
  updateUserProfileItem,
} from "../../../../store/Actions/userActionCreator";
import { FieldInput } from "../../../FormHelper/formhelper";
import { validURLS } from "../../../FormHelper/LinksValidations";
import "./SocialModal.css";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import Customm from '../../../../assets/Images/customimage.png';

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
  padding: 13px;
  border-radius: 18px;
  margin-left: 2.5px;
`;
const AppleMusic = styled(BsMusicNoteBeamed)`
  background: linear-gradient(
    -45deg,
    #35c3f3 0%,
    #8b9fe8 20%,
    #e681d8 39%,
    #ffa9a4 76%,
    #fed2ce 100%
  );
  color: #fff;
  padding: 5px;
  border-radius: 10px;
  margin-left: 2.5px;
`;
const Soundcloud = styled(FaSoundcloud)`
  background: #fe5000;
  color: #fff;
  padding: 5px;
  border-radius: 10px;
  margin-left: 2.5px;
`;
const Wechat = styled(AiOutlineWechat)`
  background: #7bb32e;
  color: #fff;
  padding: 7px;
  border-radius: 10px;
  margin-left: 2.5px;
`;
const Yelp = styled(FaYelp)`
  background: #f43939;
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
const SocialModal = (props) => {
  const { className } = props;
  const getProfile = (type: string) => {
    switch (type) {
      case "SOCIAL":
        return "socialProfiles";
      case "BUSINESS":
        return "businessProfiles";
    }
  };
  const [modal, setModal] = useState(false);
  const [profileType, setprofileType] = useState(getProfile(props.type));
  
  const openInNewTab = (uri: any) => {
    if (props.profile.name === "Email") {
      window.open(`mailto:${uri}`);
    } else if (props.profile.name === "Call") {
      window.open(`tel:${uri}`);
    } else if (props.profile.name === "Text") {
      window.open(`sms:${uri}`);
    } else if (props.profile.name === "Address") {
      window.open(`https://maps.google.com/?q= ${uri}`);
    } else {
      const newWindow = window.open(
        validURLS(uri, props.title),
        "_blank",
        "noopener,noreferrer"
      );
      if (newWindow) newWindow.opener = null;
    }
  };
  const handleDelete = async () => {
    console.log(profileType, props.profile.id);
    await props.deleteProfileItem(profileType, props.profile.id);
    setModal(false);
  };

  const onSubmit = async (values) => {
    props.updateProfileItem(profileType, { ...props.profile, uri: values.uri });
    setModal(false);
  };
  const toggle = () => setModal(!modal);
  const renderIcon = () => {
    if (props.profile.name !== null) {
      switch (props.profile.name) {
        case "Instagram":
          return (
            <IconContext.Provider
              value={{
                size: "100px",
              }}
            >
              <Instagram />
            </IconContext.Provider>
          );
          break;

        case "Facebook":
          return (
            <IconContext.Provider value={{ size: "100px", color: "#3b5998" }}>
              <FaFacebook />
            </IconContext.Provider>
          );
          break;

        case "Snapchat":
          return (
            <IconContext.Provider value={{ size: "100px", color: "#FFFC00" }}>
              <FaSnapchatSquare />
            </IconContext.Provider>
          );
          break;

        case "Twitter":
          return (
            <IconContext.Provider value={{ size: "100px", color: "#1DA1F2" }}>
              <FaTwitter />
            </IconContext.Provider>
          );
          break;

        case "Linkedin":
          return (
            <IconContext.Provider value={{ size: "100px", color: "#0077b5" }}>
              <FaLinkedinIn />
            </IconContext.Provider>
          );
          break;
        case "Youtube":
          return (
            <IconContext.Provider value={{ size: "100px", color: "#FF0000" }}>
              <FaYoutube />
            </IconContext.Provider>
          );
          break;
        case "Pinterest":
          return (
            <IconContext.Provider value={{ size: "100px", color: "#E60023" }}>
              <FaPinterest />
            </IconContext.Provider>
          );
          break;
        case "Tiktok":
          return (
            <IconContext.Provider value={{ size: "100px", color: "#000" }}>
              <SiTiktok />
            </IconContext.Provider>
          );
          break;
        case "Twitch":
          return (
            <IconContext.Provider value={{ size: "100px", color: "#6441A4" }}>
              <FaTwitch />
            </IconContext.Provider>
          );
          break;
        case "Onlyfans":
          return (
            <IconContext.Provider value={{ size: "100px", color: "#00AFF0" }}>
              <SiOnlyfans />
            </IconContext.Provider>
          );
          break;
        case "Paypal":
          return (
            <IconContext.Provider value={{ size: "100px", color: "#00457C" }}>
              <FaPaypal />
            </IconContext.Provider>
          );
          break;
        case "Venmo":
          return (
            <IconContext.Provider value={{ size: "100px", color: "#3D95CE" }}>
              <IoLogoVenmo />
            </IconContext.Provider>
          );
          break;
        case "Cash App":
          return (
            <IconContext.Provider
              value={{
                size: "100px",
                color: "#00C244",
              }}
            >
              <SiCashapp />
            </IconContext.Provider>
          );
          break;
        case "Apple Music":
          return (
            <IconContext.Provider
              value={{
                size: "100px",
              }}
            >
              <AppleMusic />
            </IconContext.Provider>
          );
          break;
        case "Spotify":
          return (
            <IconContext.Provider value={{ size: "100px", color: "#1DB954" }}>
              <FaSpotify />
            </IconContext.Provider>
          );
          break;
        case "Sound cloud":
          return (
            <IconContext.Provider value={{ size: "100px" }}>
              <Soundcloud />
            </IconContext.Provider>
          );
          break;
        case "Email":
          return (
            <IconContext.Provider value={{ size: "100px" }}>
              <AiOutlineMail />
            </IconContext.Provider>
          );
          break;
        case "Whatsapp":
          return (
            <IconContext.Provider value={{ size: "100px", color: "#25d366" }}>
              <FaWhatsappSquare />
            </IconContext.Provider>
          );
          break;
        case "Wechat":
          return (
            <IconContext.Provider
              value={{
                size: "100px",
              }}
            >
              <Wechat />
            </IconContext.Provider>
          );
          break;
        case "Address":
          return (
            <IconContext.Provider
              value={{
                size: "100px",
              }}
            >
              <GrMap />
            </IconContext.Provider>
          );
          break;
        case "Contact Card":
          return (
            <IconContext.Provider
              value={{
                size: "100px",
              }}
            >
              <FcAddressBook />
            </IconContext.Provider>
          );
          break;
        case "Call":
          return (
            <IconContext.Provider
              value={{
                size: "100px",
              }}
            >
              <Call />
            </IconContext.Provider>
          );
          break;
        case "Text":
          return (
            <IconContext.Provider value={{ size: "100px" }}>
              <AiOutlineFileText />
            </IconContext.Provider>
          );
          break;
        case "Yelp":
          return (
            <IconContext.Provider value={{ size: "100px" }}>
              <Yelp />
            </IconContext.Provider>
          );
          break;
        case "Linktree":
          return (
            <IconContext.Provider value={{ size: "100px", color: "#25d366" }}>
              <SiLinktree />
            </IconContext.Provider>
          );
          break;
        case "Calendly":
          return (
            <IconContext.Provider value={{ size: "100px" }}>
              <FcCalendar />
            </IconContext.Provider>
          );
          break;
          case "Custom Link":
          return (
            <IconContext.Provider value={{ size: "100px", color: "#25d366" }}>
            <img src={Customm} width="100px" height="100px" />
            </IconContext.Provider>
          );
          break;
        default:
          return;
      }
    }
  };

  return (
    <div
      className={`SocialModal ${
        props.userData.isDirect &&
        props.profile.id === props.userData.activeDirect
          ? "SocialModal-isDirect"
          : ""
      }`}
    >
      {props.userData.isDirect &&
        props.profile.id === props.userData.activeDirect && (
          <div className="SocialModal-DirectText">Direct</div>
        )}
      <button className="SocialModal-AddButton" onClick={toggle}>
        {renderIcon()}
        <p className="SocialModal-AddButton__name">{props.profile.name}</p>
      </button>

      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        noValidate
        render={({ handleSubmit }) => (
          <Modal
            isOpen={modal}
            toggle={toggle}
            className={`${className} SocialModal-Modal`}
          >
            <ModalHeader className="SocialModal-ModalContent" toggle={toggle}>
              Edit this profile . . .
            </ModalHeader>
            <ModalBody className="SocialModal-ModalContent">
              <div className="SocialModal-ModalContent__Logo">
                {renderIcon()}
              </div>
              <form className="SocialModal-Form" onSubmit={handleSubmit}>
                <div>
                  <Field
                    className="SocialModal-Input"
                    name="uri"
                    placeholder={props.profile.uri}
                    component={FieldInput}
                  />
                </div>
              </form>
              <div className="SocialModal-CardBody__Buttons">
                <Button
                  className="SocialModal-OpenButton"
                  onClick={() => openInNewTab(`${props.profile.uri}`)}
                >
                  Open
                </Button>

                <Button
                  className="SocialModal-DeleteButton"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </div>
            </ModalBody>
            <ModalFooter className="SocialModal-ModalContent">
              <Button
                className="SocialModal-SubmitButton"
                onClick={handleSubmit}
              >
                Save
              </Button>
            </ModalFooter>
          </Modal>
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  updateProfileItem: (profileType: any, request: any) =>
    dispatch(updateUserProfileItem(profileType, request)),
  deleteProfileItem: (profileType: any, id: string) =>
    dispatch(deleteUserProfileItem(profileType, id)),
});
function mapStateToProps(state: any) {
  return {
    userData: state.UserReducer,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SocialModal);
