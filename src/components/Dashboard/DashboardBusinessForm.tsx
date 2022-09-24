import React, { Component } from "react";
import { Field, Form } from "react-final-form";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import PhoneInput from "react-phone-input-2";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { userUpdateBusinessCardRequest } from "../../store/Actions/userActionCreator";
import { FieldInput } from "../FormHelper/formhelper";
import "./styles/DashboardBusinessForm.css";

interface State {}
interface Props {
  toggleEditing: any;
  doCardUpdate: any;
  setProfile: any;
  userData: any;
  CardData: any;
}

const PhoneAdapter = ({ input }) => (
  <PhoneInput
    {...input}
    enableSearch={true}
    placeholder="Mobile No."
    inputClass="DashboardBusinessForm__MobileInput"
    buttonClass="DashboardBusinessForm__MobileDropdown"
    country="us"
  />
);

class DashboardBusinessForm extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const onSubmit = async (values) => {
      const businessCard = [
        {
          name: "phone",
          uri: values.phone,
        },
        {
          name: "email",
          uri: values.email,
        },
        {
          name: "skills",
          uri: values.Skills,
        },
        {
          name: "job",
          uri: values.job,
        },
        {
          name: "industry",
          uri: values.industry,
        },
        {
          name: "education",
          uri: values.education,
        },
        {
          name: "interests",
          uri: values.interests,
        },
        {
          name: "address",
          uri: values.address,
        },
      ];

      this.props.doCardUpdate({
        buisnessCard: [...businessCard],
      });
      this.props.toggleEditing();
    };

    return (
      <Container className="DashboardBusinessForm" fluid>
        <Row>
          <button
            className="DashboardBusinessForm__Close"
            onClick={() => this.props.toggleEditing()}
          >
            <IconContext.Provider
              value={{
                size: "30px",
                color: "#fff",
              }}
            >
              <AiOutlineClose />
            </IconContext.Provider>
          </button>
          <Form
            onSubmit={onSubmit}
            initialValues={{}}
            render={({ handleSubmit, submitting, pristine, values }) => (
              <form
                className="DashboardBusinessForm-Form"
                onSubmit={handleSubmit}
              >
                <div className="DashboardBusinessForm__Container">
                  <Row>
                    <Col xs={6}>
                      <Field
                        name="phone"
                        placeholder="Mobile No."
                        component={PhoneAdapter}
                      />
                      <Field
                        className="DashboardBusinessForm-Input"
                        type={"text"}
                        component={FieldInput}
                        name="Skills"
                        placeholder="Add skills"
                      />
                      <Field
                        className="DashboardBusinessForm-Input"
                        type={"text"}
                        component={FieldInput}
                        name="industry"
                        placeholder="Add Industry"
                      />
                      <Field
                        className="DashboardBusinessForm-Input"
                        type={"text"}
                        component={FieldInput}
                        name="interests"
                        placeholder="Add Interest"
                      />
                    </Col>
                    <Col xs={6}>
                      <Field
                        className="DashboardBusinessForm-Input"
                        type={"text"}
                        component={FieldInput}
                        name="email"
                        placeholder="Add Email"
                      />
                      <Field
                        className="DashboardBusinessForm-Input"
                        type={"text"}
                        component={FieldInput}
                        name="job"
                        placeholder="Add Job"
                      />
                      <Field
                        className="DashboardBusinessForm-Input"
                        type={"text"}
                        component={FieldInput}
                        name="education"
                        placeholder="Add Education"
                      />
                      <Field
                        className="DashboardBusinessForm-Input"
                        type={"text"}
                        component={FieldInput}
                        name="address"
                        placeholder="Add Address"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <div className="DashboardBusinessForm-Btns">
                      <button
                        className="DashboardBusinessForm-Btns__Submit"
                        type="submit"
                      >
                        <IconContext.Provider
                          value={{
                            size: "25px",
                            color: "#fff",
                          }}
                        >
                          <BiEdit />
                        </IconContext.Provider>{" "}
                        Save Changes
                      </button>
                    </div>
                  </Row>
                </div>
              </form>
            )}
          />
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state: any, ownProps: any) => {
  return { userData: state.UserReducer };
};
const mapDispatchToProps = (dispatch: any) => ({
  doCardUpdate: (request: any) =>
    dispatch(userUpdateBusinessCardRequest(request)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardBusinessForm);
