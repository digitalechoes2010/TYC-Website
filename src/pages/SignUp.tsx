import axios from "axios";
import React, { Component } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Field, Form } from "react-final-form";
// import GoogleLogin from "react-google-login";
import { Helmet } from "react-helmet";
import { IconContext } from "react-icons";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import click from "../assets/SVGs/SignUp-ClickIcon.svg";
import TermsAgreement from "../components/CustomComponents/Modals/TermsAgreementModal/TermsAggreement";
import { FieldInput } from "../components/FormHelper/formhelper";
import {
  cnfPassword,
  composeValidators,
  maxLength,
  minLength,
} from "../components/FormHelper/validtionhelper";
import { requestLogin } from "../store/Actions/loginActionCreator";
import {
  clearSignupStore,
  requestSignup,
} from "../store/Actions/userSignUpActionCreator";
import { errorToast } from "../utils/toasthelper";
import "./styles/SignUp.css";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const Google = styled(FcGoogle)`
  background-color: #fff;
  border-radius: 50px;
  padding: 0.1rem;
`;

class SignUp extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: "",
      mobile: "",
      agreed: false,
      callingCode: "",
      otp: "",
      otpSent: false,
      email: "",
      user: {}
    };
  }
  onSubmit = async (values) => {
    if (this.state.otpSent === true) {
      delete values.agreed;
      delete values.cnfPassword;

      const postData: any = {
        ...values,
        countryCode: this.state.countryCode.toUpperCase(),
        mobile: this.state.mobile,
        callingCode: this.state.callingCode,
      };
      this.props.doSignup(postData);
      console.log(postData);
    } else {
      this.setState({ otpSent: true, email: values.email }, this.sendOTP);
    }
  };

  sendOTP = () => {
    const postData = { email: this.state.email };
    const headers = {
      accept: "application/json",
      "Content-Type": "application/json",
    };
    axios
      .post("https://tycapi.eu-gb.mybluemix.net/sendSignUpOtp", postData, {
        headers,
      })
      .then((res) => console.log(res));
    console.log(postData);
  };
  
  googleLogin = (credentialResponse) => {
    console.log("Google Data", credentialResponse);
    var decode = jwt_decode(credentialResponse.credential);
    this.setState({user: decode})
    if (credentialResponse?.credential) {
      const postData: any = {
        socialId: this.state.user.sub,
        email: this.state.user.email,
        accountType: "google",
      };
      console.log("Post Data", postData)
      this.props.doLogin(postData);
    } else {
    }
  };
  
  facebookLogin = (data) => {
    console.log(data);
    if (data?.email) {
      const postData = {
        socialId: data.id,
        email: data.email,
        accountType: "facebook",
      };
      this.props.doLogin(postData);
    } else {
      errorToast("Login canceled");
    }
  };

  PhoneAdapter = ({ input }) => (
    <PhoneInput
      {...input}
      enableSearch={true}
      placeholder="Mobile No."
      inputClass="PhoneInput-Input"
      buttonClass="PhoneInput-Dropdown"
      country="us"
      onChange={(value, data: any) => {
        input.onChange(value);
        this.setState({
          countryCode: data.countryCode,
          mobile: value.slice(data.dialCode.length),
          callingCode: `+${data.dialCode}`,
        });
        console.log(data.countryCode);
      }}
    />
  );
  render() {
    return (
      <Container className="SignUp" fluid>
        {" "}
        <Helmet>
          <title>TYC - Sign Up</title>
        </Helmet>{" "}
        <Row>
          <Col className="SignUp-Header" xs={12}>
            <h3 className="SignUp-Header__Title">SIGN UP</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 5, offset: 1 }} className="SignUp-UserInfo">
            <div className="SignUp-SignInSection">
              <p>Already a User? </p>
              <Link className="SignUp-SignInSection__Link" to="/SignIn">
                Sign In
              </Link>
            </div>
            <Form
              onSubmit={this.onSubmit}
              initialValues={{
                email: "",
                callingCode: "",
                mobile: "",
                countryCode: "",
                password: "",
                cnfPassword: "",
                agreed: false,
              }}
              noValidate
              render={({ handleSubmit, submitting, pristine, values }) => (
                <form className="SignUp-Form" onSubmit={handleSubmit}>
                  <div>
                    <Field
                      className="SignUp-Input"
                      type={"email"}
                      component={FieldInput}
                      name="email"
                      placeholder="Email"
                    />
                    <Field
                      className="SingUp-Mobile"
                      name="callingCode"
                      placeholder="Enter phone number"
                      component={this.PhoneAdapter}
                    />
                    <Field
                      className="SignUp-Input"
                      type={"password"}
                      component={FieldInput}
                      name="password"
                      placeholder="Password"
                      validate={composeValidators(maxLength(20), minLength(4))}
                    />
                    <Field
                      className="SignUp-Input"
                      type={"password"}
                      component={FieldInput}
                      name="cnfPassword"
                      placeholder="Confirm Password"
                      validate={composeValidators(cnfPassword(values.password))}
                    />
                  </div>
                  <label className="SignUp-Agreement">
                    <Field
                      name="agreed"
                      className="SignUp-Agreement__checkbox"
                      component="input"
                      type="checkbox"
                    />
                    <TermsAgreement />
                  </label>
                  {this.state.otpSent === false && (
                    <button
                      className={`SignUp-Btns__Submit ${
                        values.agreed === false
                          ? "SignUp-Btns__SubmitDisable"
                          : ""
                      }`}
                      type="submit"
                    >
                      Continue
                    </button>
                  )}
                  {this.state.otpSent === true && (
                    <div className="SignUp-Btns">
                      <Field
                        className="SignUp-Input"
                        type={"text"}
                        component={FieldInput}
                        name="otp"
                        placeholder="Enter your Code"
                      />
                      <button
                        className={`SignUp-Btns__Submit ${
                          values.agreed === false
                            ? "SignUp-Btns__SubmitDisable"
                            : ""
                        }`}
                        type="submit"
                        disabled={
                          submitting || pristine || values.agreed === false
                        }
                      >
                        Sign Up
                      </button>
                    </div>
                  )}
                </form>
              )}
            />
          </Col>
          <div className="rightDiv">
            <p>Or</p>
            <div className="SignIn-SocialMedia">
              <FacebookLogin
                appId="4389598784461723"
                fields="name,email,picture"
                callback={this.facebookLogin}
                render={(renderProps) => (
                  <button
                    className="SignIn-Social SignIn-facebook"
                    onClick={() => renderProps.onClick()}
                    disabled={renderProps.isDisabled}
                  >
                    <FaFacebookF />
                    Sign up with Facebook
                  </button>
                )}
              />
              <div className="SignIn-Social">
                <GoogleLogin
                  text="signup_with"
                  theme="outline"
                  size="large"
                  shape="circle"
                  width="225px"
                  logo_alignment="center"
                  onSuccess={this.googleLogin}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </div>
            </div>
            <div className="SignUp-Img">
              <img className="SignUp-Img__Click" src={click} alt="Click-Icon" />
            </div>
            </div>
          {/* </Col> */}
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    signupStore: state.SignupReducer,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  doLogin: (params: any) => dispatch(requestLogin(params)),
  doSignup: (request: any) => dispatch(requestSignup(request)),
  clearStore: () => dispatch(clearSignupStore()),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
