import axios from "axios";
import React, { Component } from "react";
import { Field, Form } from "react-final-form";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "reactstrap";
import MailBox from "../components/CustomComponents/DesignComponents/MailBox/MailBox";
import { FieldInput } from "../components/FormHelper/formhelper";
import {
  composeValidators,
  required,
} from "../components/FormHelper/validtionhelper";
import "./styles/ForgotPassword-Contact.css";
interface State {
  submitted: boolean;
  toggleAnimation: boolean;
  seconds: number;
}
interface Props {}
const onSubmit = async (values) => {
  console.log(JSON.stringify(values));
  const postData = { email: values.email };
  axios
    .post("https://tycapi.eu-gb.mybluemix.net/forgetPassword", postData)
    .then((response) => console.log(response));
  // setTimeout(() => {
  //   window.location.href = "/ForgotPassword/ChangePassword";
  // }, 1100);
};

export default class ForgotPasswordContact extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      toggleAnimation: false,
      seconds: 59,
    };
  }

  counter = () =>
    setInterval(() => {
      if (this.state.submitted === true) {
        if (this.state.seconds > 0) {
          this.setState({ seconds: this.state.seconds - 1 });
        }
        if (this.state.seconds === 0) {
          this.setState({ seconds: 59, submitted: false });
        }
      }
    }, 1000);
  componentDidMount = () => {
    console.log("submited", this.state.submitted);
    this.counter();
  };
  render() {
    return (
      <Container className="ForgotPasswordContact" fluid>
        <Helmet>
          <title>TYC - Forgot Password</title>
        </Helmet>
        <Row>
          <Col className="ForgotPasswordContact-Header" xs={12}>
            <h3 className="ForgotPasswordContact-Header__Title">
              Enter your Email to reset password
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form
              onSubmit={onSubmit}
              initialValues={{
                mobile: "",
              }}
              noValidate
              render={({ handleSubmit, values }) => (
                <form
                  className="ForgotPasswordContact-Form"
                  onSubmit={handleSubmit}
                >
                  <div>
                    {" "}
                    <Field
                      className="ForgotPasswordContact-Email"
                      name="email"
                      placeholder="Enter Email"
                      type={"email"}
                      component={FieldInput}
                      validate={composeValidators(required)}
                    />
                  </div>
                  <div className="ForgotPasswordContact-MailBox">
                    <MailBox toggle={this.state.toggleAnimation} />
                  </div>

                  <div
                    className={`ForgotPasswordContact-check ${
                      this.state.submitted && "OTP-check__animate"
                    }`}
                  ></div>
                  <div className="ForgotPasswordContact-Btns">
                    <button
                      className={`ForgotPasswordContact-Btns__Submit ${
                        values.email === "" ||
                        values.email === undefined ||
                        this.state.submitted === true
                          ? "ForgotPasswordContact-Btns__disabled"
                          : ""
                      }`}
                      type="submit"
                      disabled={
                        values.email === "" ||
                        values.email === undefined ||
                        this.state.submitted === true
                          ? true
                          : false
                      }
                      onClick={() => {
                        onSubmit(values);
                        this.setState({
                          submitted: true,
                          toggleAnimation: !this.state.toggleAnimation,
                        });
                      }}
                    >
                      {this.state.submitted
                        ? `Resend in ${this.state.seconds}...`
                        : "Continue"}
                    </button>
                  </div>
                </form>
              )}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
