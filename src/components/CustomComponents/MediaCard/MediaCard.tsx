import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import {
  BsFileEarmarkExcel,
  BsFileEarmarkFont,
  BsFileEarmarkPdf,
  BsFileEarmarkPpt,
  BsFileEarmarkWord,
} from "react-icons/bs";
import { FcVideoFile } from "react-icons/fc";
import Viewer from "react-viewer";
import { Modal } from "reactstrap";
import { BigPlayButton, ControlBar, Player, PlayToggle } from "video-react";
import "../../../../node_modules/video-react/dist/video-react.css";
import "./MediaCard.css";

export default function MediaCard(props) {
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const handleOnClick = () => {
    if (props.media.type.includes("video")) {
      toggle();
    } else if (props.media.type.includes("image")) {
      setVisible(!visible);
    } else {
      window.open(props.media.url);
    }
  };
  const handleClose = () => {
    console.log("click", visible);
    setVisible(false);
  };
  return (
    <div className="MediaCard" onClick={handleOnClick}>
      {props.media.type === "application/pdf" ||
      props.media.type === "application%2Fpdf" ? (
        <IconContext.Provider
          value={{
            size: "40px",
            color: "#F40F02",
            className: "MediaCard-Icon",
          }}
        >
          <BsFileEarmarkPdf />
        </IconContext.Provider>
      ) : props.media.type === "text/plain" ? (
        <IconContext.Provider
          value={{
            size: "40px",
            color: "#000",
            className: "MediaCard-Icon",
          }}
        >
          <BsFileEarmarkFont />
        </IconContext.Provider>
      ) : props.media.type ===
        "application/msword" || props.media.type === "application%2Fmsword" || props.media.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || props.media.type ===
        "application%2Fvnd.openxmlformats-officedocument.wordprocessingml.document" ? (
        <IconContext.Provider
          value={{
            size: "40px",
            color: "#005DA6",
            className: "MediaCard-Icon",
          }}
        >
          <BsFileEarmarkWord />
        </IconContext.Provider>
      ) : props.media.type === "application/vnd.ms-excel" || props.media.type === "application%2Fvnd.ms-excel" || props.media.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || props.media.type ===
        "application%2Fvnd.openxmlformats-officedocument.spreadsheetml.sheet"? (
        <IconContext.Provider
          value={{
            size: "40px",
            color: "#1D6F42",
            className: "MediaCard-Icon",
          }}
        >
          <BsFileEarmarkExcel />
        </IconContext.Provider>
      ) : props.media.type === "application/vnd.ms-powerpoint" || props.media.type === "application%2Fvnd.ms-powerpoint" || props.media.type === "application/vnd.openxmlformats-officedocument.presentationml.presentation" || props.media.type ===
        "application%2Fvnd.openxmlformats-officedocument.presentationml.presentation" ? (
        <IconContext.Provider
          value={{
            size: "40px",
            color: "#D04423",
            className: "MediaCard-Icon",
          }}
        >
          <BsFileEarmarkPpt />
        </IconContext.Provider>
      ) : props.media.type.includes("video") ? (
        <div>
          <IconContext.Provider
            value={{
              size: "40px",
              className: "MediaCard-Icon",
            }}
          >
            <FcVideoFile />
          </IconContext.Provider>

          <Modal className="MediaCard-video" isOpen={modal} toggle={toggle}>
            <Player autoPlay playsInline src={props.media.url}>
              <BigPlayButton position="center" />
              <ControlBar autoHide={true} className="my-class">
                <PlayToggle />
              </ControlBar>
            </Player>
          </Modal>
        </div>
      ) : (
        <img src={props.media.thumbnailUrl} className="MediaCard-Image" />
      )}
      <Viewer
        visible={visible}
        noToolbar
        noNavbar
        noClose
        drag={false}
        downloadable
        onClose={() => {
          handleClose();
          console.log("closes");
        }}
        onMaskClick={handleClose}
        images={[{ src: props.media.url, alt: "" }]}
      />
      <p className="MediaCard-Title">{props.media.name}</p>
    </div>
  );
}
