import React, { Component } from "react";
import { Field, Form } from "react-final-form";
import { Helmet } from "react-helmet";
import { IconContext } from "react-icons";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import Lock from "../assets/SVGs/SignIn-LockIcon.svg";
import Stars from "../assets/SVGs/SignIn-Stars.svg";
import { FieldInput } from "../components/FormHelper/formhelper";
import {
  composeValidators,
  email,
  required,
} from "../components/FormHelper/validtionhelper";
import "./styles/SignIn.css";
// import GoogleLogin from "react-google-login";
// import FacebookLogin from "react-facebook-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { connect } from "react-redux";
import { requestLogin } from "../store/Actions/loginActionCreator";
import { errorToast } from "../utils/toasthelper";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";



const Google = styled(FcGoogle)`
  background-color: #fff;
  border-radius: 50px;
  padding: 0.1rem;
`;

class SignIn extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  onSubmit = async (values) => {
    console.log(JSON.stringify(values));
    const postData: any = {
      accountType: "user",
      email: values.email,
      password: values.password,
    };
    this.props.doLogin(postData);
    // window.location.href = "/Profile/Dashboard";
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
    }
  };
  render() {
    return (
      <Container className="SignIn" fluid>
        <Helmet>
          <title>TYC - Sign In</title>
        </Helmet>
        <Row>
          <Col className="SignIn-Header" xs={12}>
            <h3 className="SignIn-Header__Title">SIGN IN</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 5, offset: 1 }}>
            <div className="SignIn-SignUpSection">
              <p style={{margin:"0 auto"}}>WELCOME TO TYC </p>
            {/*  <p>New User? </p>
              <Link className="SignIn-SignUpSection__Link" to="/SignUp">
                Create an Account
    </Link>*/}
            </div>

        {/*    <Form 
              onSubmit={this.onSubmit}
              initialValues={{
                email: "",
                password: "",
              }}
              render={({ handleSubmit, submitting, pristine }) => (
                <form className="SignIn-Form" onSubmit={handleSubmit}>
                  <div>
                    <Field
                      className="SignIn-Input"
                      type={"email"}
                      component={FieldInput}
                      name="email"
                      placeholder="Username or Email"
                      validate={composeValidators(required, email)}
                    />
                    <Field
                      className="SignIn-Input"
                      type={"password"}
                      component={FieldInput}
                      name="password"
                      placeholder="Password"
                      validate={composeValidators(required)}
                      valid={false}
                    />
                  </div>
                <Link
                    className="SignIn-ForgotPassword"
                    to="/ForgotPassword/Contact"
                  >
                    Forgot Password?
              </Link>

                  <div className="SignIn-Btns">
                    <button
                      className="SignIn-Btns__Submit"
                      type="submit"
                      disabled={submitting || pristine}
                    >
                      Sign In
                    </button>
                    <Link className="SignIn-Btns__OTP" to="/SignIn/Otp">
                      Use Phone Number
                    </Link>
                  </div>
                </form>
              )}
            />
              */}
            <br></br>
            {/* <div className="SignIn-Separator">
              <span className="SignIn-Separator__left"></span>
              <p>Sign in with</p>
              <span className="SignIn-Separator__right"></span>
            </div> */}
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
                    Sign in with Facebook
                  </button>
                )}
              />
              <div className="SignIn-Social">
                <GoogleLogin
                  text="signin_with"
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
              {/* <GoogleLogin
                clientId="200805530561-u6lhmvq23ri5to13pirpnbmr032fjna5.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.googleLogin}
                onFailure={this.googleLogin}
                // cookiePolicy={"single_host_origin"}
                render={(props: {
                  onClick: () => void;
                  disabled?: boolean;
                }) => (
                  <button style={{margin:"0 auto",marginTop:"5%"}}
                    className="SignIn-Social SignIn-Google"
                    onClick={() => props.onClick()}
                    disabled={props.disabled}
                  >
                    <IconContext.Provider value={{ size: "20px" }}>
                      <div>
                        <Google />
                      </div>
                    </IconContext.Provider>
                    Google
                  </button>
                )}
              /> */}
            </div>
          </Col>
          <Col sm={6} className="SignIn-Img">
            <img className="SignIn-Img__Lock" src={Lock} alt="Lock-Icon"></img>
            <img
              className="SignIn-Img__Stars"
              src={Stars}
              alt="Stars-Icon"
            ></img>
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  doLogin: (params: any) => dispatch(requestLogin(params)),
});
export default connect(null, mapDispatchToProps)(SignIn);
