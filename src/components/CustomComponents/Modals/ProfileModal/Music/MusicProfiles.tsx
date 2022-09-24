import React from "react";
import { IconContext } from "react-icons";
import {
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineWechat,
} from "react-icons/ai";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { FaSoundcloud, FaSpotify, FaWhatsappSquare } from "react-icons/fa";
import styled from "styled-components";
import AddLinkModal from "../../ProfileAddLinkModal/AddLink";

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
const MusicProfiles = (props) => {
  return (
    <div>
      <AddLinkModal
        buttonTitle="Spotify"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#1DB954" }}>
            <FaSpotify />
          </IconContext.Provider>
        }
        image="Spotify"
        icon="spotify"
        name="Spotify"
        type={props.type}
      />
      <AddLinkModal
        buttonTitle="Apple Music"
        buttonLogo={
          <IconContext.Provider
            value={{
              size: "45px",
            }}
          >
            <AppleMusic />
          </IconContext.Provider>
        }
        image="Apple"
        icon="apple"
        name="Apple Music"
        type={props.type}
      />
      <AddLinkModal
        buttonTitle="Sound cloud"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px" }}>
            <Soundcloud />
          </IconContext.Provider>
        }
        image="Sound"
        icon="Sound cloud"
        name="Sound cloud"
        type={props.type}
      />
    </div>
  );
};

export default MusicProfiles;
