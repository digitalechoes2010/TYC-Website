import { useState } from "react";
import { Field, Form } from "react-final-form";
import { connect } from "react-redux";
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { updateUserProfile } from "../../../../store/Actions/userActionCreator";
import { FieldInput } from "../../../FormHelper/formhelper";
import { validateEmail } from "../../../FormHelper/LinksValidations";
import "./AddLink.css";

const AddLinkModal = (props: any) => {
  const { className, image, icon, name } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const onSubmit = (values: any) => {
    const profileData = {
      id: uuidv4(),
      image: image,
      count: 0,
      uri: values.uri,
      icon: icon,
      name: name,
    };

    if (props.type === "SOCIAL") {
      props.socialProfiles
        ? props.setProfile("socialProfiles", [
            ...props.socialProfiles,
            profileData,
          ])
        : props.setProfile("socialProfiles", [profileData]);
    } else {
      props.businessProfiles
        ? props.setProfile("BUSINESS", [...props.businessProfiles, profileData])
        : props.setProfile("BUSINESS", [profileData]);
    }

    setModal(false);
  };

  return (
    <div className="AddLink">
      <button className="AddLink-AddButton" onClick={toggle}>
        <Col xs={2}> {props.buttonLogo}</Col>
        <Col xs={4}> {props.buttonTitle}</Col>
        <Col xs={2}></Col>
      </button>
      <Form
        onSubmit={onSubmit}
        noValidate
        render={({ handleSubmit, submitting, pristine, values }) => (
          <Modal
            isOpen={modal}
            toggle={toggle}
            className={`${className} AddLink-Modal`}
          >
            <ModalHeader className="AddLink-ModalContent" toggle={toggle}>
              Add Link . . .
            </ModalHeader>
            <ModalBody className="AddLink-ModalContent">
              <form className="AddLink-Form" onSubmit={handleSubmit}>
                <div>
                  <Field
                    className="AddLink-Input"
                    name="uri"
                    placeholder="Enter Link here"
                    component={FieldInput}
                  />
                </div>
                {console.log(values.uri)}
                {
                  <p style={{ color: "red" }}>
                    {validateEmail(values.uri, props.name)}
                  </p>
                }
              </form>
            </ModalBody>
            <ModalFooter className="AddLink-ModalContent">
              <Button
                className="AddLink-SubmitButton"
                onClick={handleSubmit}
                disabled={
                  validateEmail(values.uri, props.name) !== "" ? true : false
                }
              >
                Add Link
              </Button>
              <Button className="AddLink-CancelButton" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setProfile: (profileType: any, request: any) => {
    dispatch(updateUserProfile(profileType, request));
  },
});
const mapStateToProps = (state: any) => {
  return {
    socialProfiles: state.UserReducer.socialProfiles,
    businessProfiles: state.UserReducer.businessProfiles,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLinkModal);
