import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import DirectTabs from "./DirectTabs";
import "./DirectModal.css";
import { connect } from "react-redux";
import { userDirectToggleStart } from "../../../../store/Actions/userActionCreator";
import { BsWindowSidebar } from "react-icons/bs";

const DirectModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [directId, setDirectId] = useState(props.userData.activeDirect);
  const toggle = () => setModal(!modal);
  const makeDirectId = (id) => {
    setDirectId(id);
    console.log("der", directId);
  };
  const directSubmit = () => {
    if (directId.length > 1) {
      props.doDirectToggle({ activeDirect: directId });
    }
  };
  return (
    <div>
      <Button
        className={`DirectModal-toggle ${
          props.userData.isDirect ? "DirectModal-ON" : ""
        }`}
        onClick={() => {
          if (props.userData.isDirect) {
            props.doDirectToggle({
              activeDirect: directId ?? "",
            });
          } else if (props.userData.isDirect === "true") {
            props.doDirectToggle({ isDirect: false });
          } else {
            toggle();
          }
        }}
      >
        Direct {props.userData.isDirect ? "ON" : "OFF"}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader className="DirectModal-Header" toggle={toggle}>
          Choose a Profile to Direct
        </ModalHeader>
        <ModalBody className="DirectModal-Body">
          <DirectTabs
            makeDirectId={makeDirectId}
            socialProfiles={props.userData.socialProfiles}
            businessProfiles={props.userData.businessProfiles}
            activeDirect={props.userData.activeDirect}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            className="DirectModal-Confirm"
            onClick={() => {
              directSubmit();
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

function mapStateToProps(state: any) {
  return {
    userData: state.UserReducer,
  };
}
const mapDispatchToProps = (dispatch: any) => ({
  doDirectToggle: (data: any) => dispatch(userDirectToggleStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DirectModal);
