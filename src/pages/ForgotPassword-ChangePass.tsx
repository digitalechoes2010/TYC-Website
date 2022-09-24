import axios from "axios";
import React, { Component } from "react";
import { Field, Form } from "react-final-form";
import { Helmet } from "react-helmet";
import { IconContext } from "react-icons";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import { FieldInput } from "../components/FormHelper/formhelper";
import {
  composeValidators,
  required,
} from "../components/FormHelper/validtionhelper";
import "./styles/ForgotPassword-Change.css";

interface State {
  submitted: boolean;
}
interface Props {}
const Doc = styled(IoDocumentTextOutline)`
  margin-top: 2rem;
`;
export default class ForgotPasswordChange extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      password: "",
    };
  }
  onSubmit = async (values) => {
    console.log(JSON.stringify(values));
    const headers = {
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + this.props.match.params.token,
    };
    delete values.ConfirmPassword;
    const postData: any = {
      ...values,
    };

    axios
      .post("https://tycapi.eu-gb.mybluemix.net/changePassword", postData, {
        headers,
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ submitted: true });
          console.log(res);
          setTimeout(() => {
            window.location.href = "/SignIn";
          }, 1100);
        }
      });
  };

  render() {
    return (
      <Container className="ForgotPasswordChange" fluid>
        <Helmet>
          <title>TYC - Forgot Password</title>
        </Helmet>
        <Row>
          <Col className="ForgotPasswordChange-Header" xs={12}>
            <h3 className="ForgotPasswordChange-Header__Title">
              Reset Password
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form
              onSubmit={this.onSubmit}
              initialValues={{}}
              noValidate
              render={({ handleSubmit, values }) => (
                <form
                  className="ForgotPasswordChange-Form"
                  onSubmit={handleSubmit}
                >
                  {console.log(values.password)}
                  <div>
                    {" "}
                    <Field
                      className="ForgotPasswordChange-Email"
                      name="password"
                      placeholder="Enter new password"
                      type={"password"}
                      component={FieldInput}
                      validate={composeValidators(required)}
                    />
                  </div>
                
                  <div>
                    <Field
                      className="ForgotPasswordChange-Email"
                      name="ConfirmPassword"
                      placeholder="Confirm password"
                      type={"password"}
                      component={FieldInput}
                      validate={composeValidators(required)}
                    />
                  </div>
                  {values.password !== values.ConfirmPassword && values.ConfirmPassword !=null  && (
                    <p className="ForgotPasswordChange-Error">
                      Passwords doesn't match
                    </p>
                  )}
                  <IconContext.Provider
                    value={{
                      color: `${this.state.submitted ? "#a200a5" : "#8da2af"}`,
                      size: "250px",
                    }}
                  >
                    <div>
                      <Doc />
                    </div>
                    {this.state.submitted && (
                      <h3 className="rubber">Password Changed</h3>
                    )}
                  </IconContext.Provider>
                  <div className="ForgotPasswordChange-Btns">
                    <button
                      className={`ForgotPasswordChange-Btns__Submit ${
                        values.password === "" ||
                        values.password === undefined ||
                        values.password !== values.ConfirmPassword
                          ? "ForgotPasswordChange-Btns__disabled"
                          : ""
                      }`}
                      type="submit"
                      disabled={
                        values.password === "" ||
                        values.password === undefined ||
                        values.password !== values.ConfirmPassword
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
    );
  }
}
