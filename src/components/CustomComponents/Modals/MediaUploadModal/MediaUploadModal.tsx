import axios from "axios";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { IconContext } from "react-icons";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Progress,
} from "reactstrap";

import { store } from "../../../../store/store";
import "./MediaUploadModal.css";

const MediaUploadModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [file, setFile] = useState({ name: "" });
  const [success, setSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState("Unknown");

  const toggle = () => setModal(!modal);

  const handleOnDrop = (files, rejectedFiles) => {
    setFile(files[0]);
  };
  const handleUpload = (files) => {
    if (
      fileName === "Unknown" ||
      fileName === null ||
      fileName === undefined ||
      fileName === ""
    ) {
      window.alert("Please enter a file name");
    } else {
      const token = store.getState().LoginReducer.userData.accessToken;

      let file = new FormData();
      file.append("file", files);
      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };

      axios
        .post(
          `https://tycapi.eu-gb.mybluemix.net/userMediaUpload//${encodeURIComponent(
            files.type
          )}/${fileName}`,
          file,
          {
            headers: headers,
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              let percent = loaded / total;
              console.log(
                `${loaded / 1048576}Mbs of ${total / 1048576}Mbs | ${
                  percent * 100
                }%`
              );
              setProgress(percent * 100);
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            setSuccess(true);
            setTimeout(() => toggle(), 2000);
            setTimeout(() => window.location.reload(), 3000);
          }
        });
    }
  };

  return (
    <div>
      <button className="MediaUploadModal-AddButton" onClick={toggle}>
        <IconContext.Provider value={{ size: "100px" }}>
          <div>
            <BsFillPlusSquareFill />
          </div>
        </IconContext.Provider>
        <p className="MediaUploadModal-AddButton__name">Add Media</p>
      </button>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={() => window.location.reload()}>
          Choose a media to upload
        </ModalHeader>
        <ModalBody className="MediaUploadModal-ModalBody">
          <label className="MediaUploadModal-Input__Label">
            Please enter a file name:{" "}
            <input
              className="MediaUploadModal-Input"
              type="text"
              onChange={(e) => setFileName(e.target.value)}
            />
          </label>

          <Dropzone onDrop={handleOnDrop}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div
                  {...getRootProps()}
                  className={
                    success === false
                      ? `MediaUploadModal-Dnd`
                      : "MediaUploadModal-Success"
                  }
                >
                  <input {...getInputProps()} />
                  <p>
                    {file.name
                      ? `${file.name}`
                      : success === false
                      ? "Drag 'n' drop Media here, or click to select files"
                      : "Successfull"}
                  </p>
                </div>
                <Progress
                  animated
                  color={
                    success === false
                      ? "MediaUploadModal-ProgressBar"
                      : "success"
                  }
                  value={progress}
                  className="MediaUploadModal-Progress"
                  barClassName="MediaUploadModal-ProgressBar"
                />
              </section>
            )}
          </Dropzone>
        </ModalBody>
        <ModalFooter>
          <Button
            className="MediaUploadModal-Upload"
            onClick={() => handleUpload(file)}
          >
            Upload
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MediaUploadModal;
