import { useState } from "react";
import { Field, Form } from "react-final-form";
import { IconContext } from "react-icons";
import { FaCamera } from "react-icons/fa";
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import FileField from "../../../FormHelper/fileField";
import CustomLinkPic from "../../../../assets/Images/CustomLinkPic.png";
import { FieldInput } from "../../../FormHelper/formhelper";
import "./CustomLink.css";
const onSubmit = async (values) => {
  window.alert(JSON.stringify(values));
};
const CustomLink = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [picUrl, setPicUrl] = useState("");

  const toggle = () => setModal(!modal);
  const showImage = (e) => {
    setPicUrl(URL.createObjectURL(e[0]));
  };
  return (
    <div className="CustomLink">
      <button className="CustomLink-AddButton" onClick={toggle}>
        <Col xs={2}> {props.buttonLogo}</Col>
        <Col xs={6}> {props.buttonTitle}</Col>
        <Col xs={2}></Col>
      </button>
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        noValidate
        render={({ handleSubmit, submitting, pristine, values }) => (
          <Modal
            isOpen={modal}
            toggle={toggle}
            className={`${className} CustomLink-Modal`}
          >
            <ModalHeader className="CustomLink-ModalContent" toggle={toggle}>
              Add Link . . .
            </ModalHeader>
            <ModalBody className="CustomLink-ModalContent">
              <form className="CustomLink-Form" onSubmit={handleSubmit}>
                <div className="CustomLink-Pic__Container">
                  <label className="CustomLink-Pic__Label">
                    <img
                      className="CustomLink-Pic__Label"
                      src={picUrl ? picUrl : CustomLinkPic}
                      alt=""
                    />
                    <FileField
                      className="CustomLink-Pic__Input"
                      name="pic"
                      showImage={showImage}
                    />

                    <IconContext.Provider
                      value={{
                        size: "40px",
                        color: "grey",
                        className: "CustomLink-CameraIcon",
                      }}
                    >
                      <div>
                        <FaCamera />
                      </div>
                    </IconContext.Provider>
                  </label>
                </div>
                <div>
                  {" "}
                  <Field
                    className="CustomLink-Input"
                    name="Name"
                    placeholder="Name your custom link"
                    component={FieldInput}
                  />
                  <Field
                    className="CustomLink-Input"
                    name="Link"
                    placeholder="your custom Link"
                    component={FieldInput}
                  />
                </div>
              </form>
            </ModalBody>
            <ModalFooter className="CustomLink-ModalContent">
              <Button
                className="CustomLink-SubmitButton"
                onClick={handleSubmit}
              >
                Add Link
              </Button>{" "}
              <Button className="CustomLink-CancelButton" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        )}
      />
    </div>
  );
};

export default CustomLink;
