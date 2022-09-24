import React, { Component } from "react";
import { Field, Form } from "react-final-form";
import { Helmet } from "react-helmet";
import { IconContext } from "react-icons";
import { BsPhone } from "react-icons/bs";
import { FiStar } from "react-icons/fi";
import PhoneInput from "react-phone-input-2";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import { FieldInput } from "../components/FormHelper/formhelper";
import {
  composeValidators,
  number,
  required,
} from "../components/FormHelper/validtionhelper";
import { API } from "../config/api.config";
import { PathApi } from "../config/api.path.config";
import { requestLogin } from "../store/Actions/loginActionCreator";
import "./styles/Otp.css";
import "./styles/ConfirmOtp.css";
interface State {
  submitted: boolean;
}
interface Props {}

const Phone = styled(BsPhone)`
  margin: 10rem 0rem;
  transform: scale(8);
  transition: color 1s;
`;
class Otp extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      phoneSubmitted: false,
      OTPSent: false,
      OTP: "",
      mobile: "",
      countryCode: "",
      callingCode: "",
      OTPVerified: false,
      isValid: false,
      isResend: true,
      isLoading: false,
    };
  }
  PhoneAdapter = ({ input }) => (
    <PhoneInput
      {...input}
      enableSearch={true}
      placeholder="Mobile No."
      inputClass="OTP-PhoneInput__Input"
      buttonClass="OTP-PhoneInput__Dropdown"
      country="us"
      onChange={(value, data: any) => {
        input.onChange(value);
        this.setState({
          countryCode: data.countryCode.toUpperCase(),
          mobile: value.slice(data.dialCode.length),
          callingCode: `${data.dialCode}`,
        });
        console.log(
          "countryCode:",
          data.countryCode.toUpperCase(),
          "mobile:",
          value.slice(data.dialCode.length),
          "callingCode:",
          `+${data.dialCode}`
        );
      }}
    />
  );
  onSubmit = async (values) => {
    if (this.state.OTPSent) {
      const otpNumber =
        values.digit1 + values.digit2 + values.digit3 + values.digit4;

      this.setState({ OTP: otpNumber, submitted: true }, () =>
        setTimeout(() => this.otpVerify(), 1500)
      );
    } else {
      console.log(values);
      this.setState({ phoneSubmitted: true }, () => this.sendOtp());
    }
  };

  sendOtp = () => {
    this.setState({ isLoading: true });
    console.log(this.state.mobile);
    const postData = {
      mobileNo: this.state.mobile,
      //accountType: "mobile",
      callingCode: this.state.callingCode,
      countryCode: this.state.countryCode,
    };
    console.log("pos", postData);
    API.post(PathApi.mobileLogin, postData)
      .then((data: any) => {
        console.log("logindata", data);
        this.setState(
          { OTPSent: true, isResend: true, OTP: "", isLoading: false },
          () => {
            setTimeout(() => {
              this.setState({ isResend: false });
            }, 30000);
          }
        );
      })
      .catch((error: any) => {
        this.setState({ isLoading: true }, () =>
          window.alert("Something went wrong")
        );
        console.log(error);
      });
  };
  otpVerify = () => {
    if (this.state.OTP.length == 4) {
      this.props.doLogin({
        mobile: this.state.mobile,
        otp: parseInt(this.state.OTP),
        accountType: "mobile",
        callingCode: this.state.callingCode,
        countryCode: this.state.countryCode,
      });
    } else {
      console.log("error", "Please enter the OTP");
    }
  };
  render() {
    return !this.state.OTPSent ? (
      <Container className="OTP" fluid>
        <Helmet>
          <title>TYC - Sign In with Mobile Number</title>
        </Helmet>
        <Row>
          <Col className="OTP-Header" xs={12}>
            <h3 className="OTP-Header__Title">SIGN IN WITH MOBILE NUMBER</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form
              onSubmit={this.onSubmit}
              initialValues={{
                mobile: "",
              }}
              noValidate
              render={({ handleSubmit, submitting, pristine, values }) => (
                <form className="OTP-Form" onSubmit={handleSubmit}>
                  <div>
                    {" "}
                    <Field
                      className="OTP-Mobile"
                      name="mobile"
                      placeholder="Enter phone number"
                      component={this.PhoneAdapter}
                      validate={composeValidators(required)}
                    />
                  </div>
                  <IconContext.Provider
                    value={{
                      color: `${
                        this.state.phoneSubmitted ? "#a200a5" : "#8da2af"
                      }`,
                      size: "25px",
                    }}
                  >
                    <div>
                      <Phone />
                    </div>
                  </IconContext.Provider>
                  <div
                    className={`OTP-check ${
                      this.state.phoneSubmitted && "OTP-check__animate"
                    }`}
                  ></div>
                  <div className="OTP-Btns">
                    <button
                      className={`OTP-Btns__Submit ${
                        values.mobile === "" || values.mobile === undefined
                          ? "OTP-Btns__disabled"
                          : ""
                      }`}
                      type="submit"
                      disabled={
                        values.mobile === "" || values.mobile === undefined
                          ? true
                          : false
                      }
                    >
                      Continue
                    </button>
                  </div>
                </form>
              )}
            />
          </Col>
        </Row>
      </Container>
    ) : (
      <Container className="ConfirmOTP" fluid>
        <Helmet>
          <title>TYC - Confirm Mobile Number</title>
        </Helmet>
        <Row>
          <Col className="ConfirmOTP-Header" xs={12}>
            <h3 className="ConfirmOTP-Header__Title">
              MOBILE NUMBER CONFIRMATION
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p className="ConfirmOTP-Form__Header">
              A one time password has been sent to your registered Mobile
              number.
            </p>
            <Form
              onSubmit={this.onSubmit}
              initialValues={{}}
              noValidate
              render={({ handleSubmit, values }) => (
                <form className="ConfirmOTP-Form" onSubmit={handleSubmit}>
                  <div className="ConfirmOTP-Digits_Container">
                    <Field
                      className="ConfirmOTP-Digits"
                      type={"text"}
                      component={FieldInput}
                      name="digit1"
                      placeholder=""
                      validate={composeValidators(number)}
                      meta={{ valid: false }}
                      maxLength={1}
                    />
                    <Field
                      className="ConfirmOTP-Digits"
                      type={"text"}
                      component={FieldInput}
                      name="digit2"
                      placeholder=""
                      validate={composeValidators(number)}
                      meta={{ valid: false }}
                      maxLength={1}
                    />
                    <Field
                      className="ConfirmOTP-Digits"
                      type={"text"}
                      component={FieldInput}
                      name="digit3"
                      placeholder=""
                      validate={composeValidators(number)}
                      meta={{ valid: false }}
                      maxLength={1}
                    />
                    <Field
                      className="ConfirmOTP-Digits"
                      type={"text"}
                      component={FieldInput}
                      name="digit4"
                      placeholder=""
                      validate={composeValidators(number)}
                      meta={{ valid: false }}
                      maxLength={1}
                    />
                  </div>
                  <div className="circle-container">
                    <div
                      className={`deg0 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg30 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg60 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg90 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg120 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg150 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg180 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg210 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg240 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg270 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg300 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg330 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <span className="ConfirmOTP-Checmark__Container">
                      <svg
                        className={`${
                          this.state.submitted && "ConfirmOTP-checkmark"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                      >
                        <circle
                          className={`${
                            this.state.submitted &&
                            "ConfirmOTP-checkmark__circle"
                          }`}
                          cx="26"
                          cy="26"
                          r="25"
                          fill="none"
                        />
                        <path
                          className={`${
                            this.state.submitted &&
                            "ConfirmOTP-checkmark__check"
                          }`}
                          fill="none"
                          d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="ConfirmOTP-Btns">
                    <button
                      className={`ConfirmOTP-Btns__Submit ${
                        values.digit1 === "" ||
                        values.digit1 === undefined ||
                        values.digit2 === "" ||
                        values.digit2 === undefined ||
                        values.digit3 === "" ||
                        values.digit3 === undefined ||
                        values.digit4 === "" ||
                        values.digit4 === undefined
                          ? "ConfirmOTP-Btns__disabled"
                          : ""
                      }`}
                      type="submit"
                      disabled={
                        values.digit1 === "" ||
                        values.digit1 === undefined ||
                        values.digit2 === "" ||
                        values.digit2 === undefined ||
                        values.digit3 === "" ||
                        values.digit3 === undefined ||
                        values.digit4 === "" ||
                        values.digit4 === undefined
                          ? true
                          : false
                      }
                      onClick={() => {
                        this.setState({ submitted: true });
                      }}
                    >
                      Continue
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
const mapDispatchToProps = (dispatch: any) => ({
  doLogin: (request: any) => dispatch(requestLogin(request)),
});
export default connect(null, mapDispatchToProps)(Otp);
