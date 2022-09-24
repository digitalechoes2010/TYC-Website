import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { Field, Form } from "react-final-form";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { PathApi } from "../../../../config/api.path.config";
import apiClient from "../../../../config/clients";
import { FieldInput } from "../../../FormHelper/formhelper";
import "./ChangeLinkModal.css";
import "react-confirm-alert/src/react-confirm-alert.css";

const ChangeLink = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const onSubmit = async (values) => {
    console.log(values.Link);
    toggle();
    const check = await apiClient.post(PathApi.searchById, {
      query: values.Link,
      type: "username",
    });
    console.log(check.data.length === 0);

    if (
      check.data === null ||
      check.data.length === 0 ||
      check.data.length === 0
    ) {
      confirmAlert({
        title: "Alert",
        message:
          "You can only change this link once are you sure you want to proceed?",
        buttons: [
          {
            label: "Yes",
            onClick: () =>
              apiClient
                .post(PathApi.changeUserLink, {
                  link: values.Link,
                })
                .then((data: any) => {
                  console.log("link", data);
                  apiClient
                    .post(PathApi.changeUserName, {
                      username: values.Link,
                    })
                    .then((data: any) => {
                      console.log("name", data);
                      window.location.reload();
                    })
                    .catch((error: any) => {
                      console.log(error);
                      window.alert("Something went wrong. Please try again.");
                    });
                })
                .catch((error: any) => {
                  console.log(error);
                  window.alert("Something went wrong. Please try again.");
                }),
          },
          {
            label: "No",
            onClick: () => toggle,
          },
        ],
      });
    } else {
      window.alert("This link is already taken please choose another one.");
    }
  };
  return (
    <div className="ChangeLink">
      <button className="ChangeLink-AddButton" onClick={toggle}>
        Edit
      </button>
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        noValidate
        render={({ handleSubmit, submitting, pristine, values }) => (
          <Modal
            isOpen={modal}
            toggle={toggle}
            className={`${className} ChangeLink-Modal`}
          >
            <ModalHeader className="ChangeLink-ModalContent" toggle={toggle}>
              Enter your new user link
            </ModalHeader>
            <ModalBody className="ChangeLink-ModalContent">
              <form className="ChangeLink-Form" onSubmit={handleSubmit}>
                <div>
                  <Field
                    className="ChangeLink-Input"
                    name="Link"
                    placeholder="your custom Link"
                    component={FieldInput}
                  />
                </div>
              </form>
            </ModalBody>
            <ModalFooter className="ChangeLink-ModalContent">
              <Button className="ChangeLink-CancelButton" onClick={toggle}>
                Cancel
              </Button>
              <Button
                className="ChangeLink-SubmitButton"
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

export default ChangeLink;
