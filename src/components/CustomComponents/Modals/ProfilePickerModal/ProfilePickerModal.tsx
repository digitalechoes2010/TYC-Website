import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { userUpdateRequest } from "../../../../store/Actions/userActionCreator";
import "./ProfilePickerModal.css";

const ProfilePickerModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        className={`ProfilePickerModal-toggle ${
          props.profile === "Both"
            ? "ProfilePickerModal-toggle__Both"
            : props.profile === "Social"
            ? "ProfilePickerModal-toggle__Social"
            : "ProfilePickerModal-toggle__Business"
        }`}
        onClick={toggle}
      >
        Profile
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Choose Profile</ModalHeader>
        <ModalBody className="ProfilePickerModal-ModalBody">
          <Button
            className="ProfilePickerModal-Btns ProfilePickerModal-Social"
            onClick={() => {
              props.setProfile("Personal");
              toggle();
            }}
          >
            Social
          </Button>
          <Button
            className="ProfilePickerModal-Btns ProfilePickerModal-Business"
            onClick={() => {
              props.setProfile("Business");
              toggle();
            }}
          >
            Business
          </Button>
          <Button
            className="ProfilePickerModal-Btns ProfilePickerModal-Both"
            onClick={() => {
              props.setProfile("Both");

              toggle();
            }}
          >
            Both
          </Button>
        </ModalBody>
        <ModalFooter>
          <Button
            className="ProfilePickerModal-Confirm"
            onClick={() => {
              // props.doUserUpdate({ profileTabType: props.profile });
              toggle();
            }}
          >
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  doUserUpdate: (request: any) => dispatch(userUpdateRequest(request)),
});
export default connect(mapDispatchToProps)(ProfilePickerModal);
