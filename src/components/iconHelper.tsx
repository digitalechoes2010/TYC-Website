import { IconContext } from "react-icons";
import {
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineWechat,
} from "react-icons/ai";
import { BsMusicNoteBeamed } from "react-icons/bs";
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
import { SiCashapp, SiLinktree, SiOnlyfans, SiTiktok } from "react-icons/si";
import styled from "styled-components";
import Customlinkim from '../../src/assets/Images/customimage.png';

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


export default function RenderIcon(props: any) {
  switch (props.name) {
    case "Instagram":
      return (
        <IconContext.Provider
          value={{
            size: `${props.size}`,
          }}
        >
          <Instagram />
        </IconContext.Provider>
      );
      break;
      
      case "Custom Link":
        return (
          <IconContext.Provider
            value={{
              size: `${props.size}`,
            }}
          >
            <img src={Customlinkim} width={props.size} height={props.size}/>
          </IconContext.Provider>
        );
        break;

    case "Facebook":
      return (
        <IconContext.Provider
          value={{ size: `${props.size}`, color: "#3b5998" }}
        >
          <FaFacebook />
        </IconContext.Provider>
      );
      break;

    case "Snapchat":
      return (
        <IconContext.Provider
          value={{ size: `${props.size}`, color: "#FFFC00" }}
        >
          <FaSnapchatSquare />
        </IconContext.Provider>
      );
      break;

    case "Twitter":
      return (
        <IconContext.Provider
          value={{ size: `${props.size}`, color: "#1DA1F2" }}
        >
          <FaTwitter />
        </IconContext.Provider>
      );
      break;

    case "Linkedin":
      return (
        <IconContext.Provider
          value={{ size: `${props.size}`, color: "#0077b5" }}
        >
          <FaLinkedinIn />
        </IconContext.Provider>
      );
      break;
    case "Youtube":
      return (
        <IconContext.Provider
          value={{ size: `${props.size}`, color: "#FF0000" }}
        >
          <FaYoutube />
        </IconContext.Provider>
      );
      break;
    case "Pinterest":
      return (
        <IconContext.Provider
          value={{ size: `${props.size}`, color: "#E60023" }}
        >
          <FaPinterest />
        </IconContext.Provider>
      );
      break;
    case "Tiktok":
      return (
        <IconContext.Provider value={{ size: `${props.size}`, color: "#000" }}>
          <SiTiktok />
        </IconContext.Provider>
      );
      break;
    case "Twitch":
      return (
        <IconContext.Provider
          value={{ size: `${props.size}`, color: "#6441A4" }}
        >
          <FaTwitch />
        </IconContext.Provider>
      );
      break;
    case "Onlyfans":
      return (
        <IconContext.Provider
          value={{ size: `${props.size}`, color: "#00AFF0" }}
        >
          <SiOnlyfans />
        </IconContext.Provider>
      );
      break;
    case "Paypal":
      return (
        <IconContext.Provider
          value={{ size: `${props.size}`, color: "#00457C" }}
        >
          <FaPaypal />
        </IconContext.Provider>
      );
      break;
    case "Venmo":
      return (
        <IconContext.Provider
          value={{ size: `${props.size}`, color: "#3D95CE" }}
        >
          <IoLogoVenmo />
        </IconContext.Provider>
      );
      break;
    case "Cash App":
      return (
        <IconContext.Provider
          value={{
            size: `${props.size}`,
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
            size: `${props.size}`,
          }}
        >
          <AppleMusic />
        </IconContext.Provider>
      );
      break;
    case "Spotify":
      return (
        <IconContext.Provider
          value={{ size: `${props.size}`, color: "#1DB954" }}
        >
          <FaSpotify />
        </IconContext.Provider>
      );
      break;
    case "Sound cloud":
      return (
        <IconContext.Provider value={{ size: `${props.size}` }}>
          <Soundcloud />
        </IconContext.Provider>
      );
      break;
    case "Email":
      return (
        <IconContext.Provider value={{ size: `${props.size}` }}>
          <AiOutlineMail />
        </IconContext.Provider>
      );
      break;
    case "Whatsapp":
      return (
        <IconContext.Provider
          value={{ size: `${props.size}`, color: "#25d366" }}
        >
          <FaWhatsappSquare />
        </IconContext.Provider>
      );
      break;
    case "Wechat":
      return (
        <IconContext.Provider
          value={{
            size: `${props.size}`,
          }}
        >
          <Wechat />
        </IconContext.Provider>
      );
      break;
    case "Text":
      return (
        <IconContext.Provider value={{ size: `${props.size}` }}>
          <AiOutlineFileText />
        </IconContext.Provider>
      );
      break;
    case "Address":
      return (
        <IconContext.Provider
          value={{
            size: `${props.size}`,
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
            size: `${props.size}`,
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
            size: `${props.size}`,
          }}
        >
          <Call />
        </IconContext.Provider>
      );
      break;
    case "Yelp":
      return (
        <IconContext.Provider value={{ size: `${props.size}` }}>
          <Yelp />
        </IconContext.Provider>
      );
      break;
    case "Linktree":
      return (
        <IconContext.Provider
          value={{ size: `${props.size}`, color: "#25d366" }}
        >
          <SiLinktree />
        </IconContext.Provider>
      );
      break;
    case "Calendly":
      return (
        <IconContext.Provider value={{ size: `${props.size}` }}>
          <FcCalendar />
        </IconContext.Provider>
      );
      break;
    default:
      return null;
  }
}
