import axios from "axios";
import React, { Component } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Field, Form } from "react-final-form";
import { Helmet } from "react-helmet";
import { IconContext } from "react-icons";
import { FaCamera } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import ProfilePic from "../assets/Images/Profile-Placeholder.png";
import { FieldInput } from "../components/FormHelper/formhelper";
import {
  composeValidators,
  required,
} from "../components/FormHelper/validtionhelper";
import { fileUploadRequest } from "../store/Actions/fileManagerActionCreator";
import { userUpdateRequest } from "../store/Actions/userActionCreator";
import { store } from "../store/store";
import "./styles/ProfileInfo.css";
interface State {}
interface Props {}

class ProfileInfo extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      picUrl: null,
      imgData: undefined,
      countryCode: "",
      mobile: "",
      callingCode: "",
      uploadProgress: 0,
      isUploading: false,
    };
  }
  PhoneAdapter = ({ input }) => (
    <PhoneInput
      {...input}
      enableSearch={true}
      placeholder="Mobile No."
      inputClass="ProfileInfo-Account__MobileInput"
      buttonClass="ProfileInfo-Account__MobileDropdown"
      country="us"
      onChange={(value, data: any) => {
        input.onChange(value);
        this.setState({
          countryCode: data.countryCode,
          mobile: value.slice(data.dialCode.length),
          callingCode: value,
        });
      }}
    />
  );

  showImage = (e) => {
    this.setState({ picUrl: URL.createObjectURL(e[0]) });
  };
  render() {
    const onSubmit = async (values) => {
      console.log();
      const data = {
        ...values,
        countryCode: this.state.countryCode.toUpperCase(),
      };
      this.props.doUserUpdate(data);
      window.location.href = "/Profile/Dashboard";
    };
    const testprogress = 75;
    const uploadTest = async (files: any) => {
      const token = store.getState().LoginReducer.userData.accessToken;

      let file = new FormData();
      file.append("file", files);
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      this.setState({ isUploading: true });
      axios
        .post(`https://tycapi.eu-gb.mybluemix.net/userImageUpload`, file, {
          headers: headers,
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            let percent = loaded / total;
            console.log(
              `${loaded / 1048576}Mbs of ${total / 1048576}Mbs | ${
                percent * 100
              }%`
            );
            this.setState({ uploadProgress: percent * 100 });
          },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            this.setState({ isUploading: false });
          }
        });
    };
    const captureImage = async (data: any) => {
      if (data) {
        const imageData: any = data[0];
        console.log("imageData", imageData);
        this.setState({
          imgData: {
            ...imageData,
            uri: URL.createObjectURL(imageData),
          },
        });
        await uploadTest(imageData);
      }
    };
    return (
      <Container className="ProfileInfo" fluid>
        <Helmet>
          <title>TYC - Profile Info</title>
        </Helmet>
        <Row>
          <Col className="ProfileInfo-Header" xs={12}>
            <h3 className="ProfileInfo-Header__Title">PROFILE INFO</h3>
          </Col>
        </Row>
        <Row className="ProfileInfo-Body">
          <div className="ProfileInfo-Pic__Container">
            <label className="ProfileInfo-Pic__Label">
              {this.state.isUploading === true ? (
                <div className="ProfileInfo-Pic__ProgressContainer">
                  <CircularProgressbar
                    value={this.state.uploadProgress}
                    className="ProfileInfo-Pic__Progress"
                    styles={buildStyles({
                      rotation: 0,
                      strokeLinecap: "round",
                      pathTransitionDuration: 0.5,
                      pathColor: `${
                        this.state.uploadProgress === 100
                          ? "rgb(0, 128, 0)"
                          : `rgba(162, 0, 165,${
                              this.state.uploadProgress / 100
                            })`
                      } `,
                      textColor: `${
                        this.state.uploadProgress === 100
                          ? "#008000"
                          : "#ff9100"
                      }`,
                      trailColor: "#999999d5",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                  <h3
                    className="ProfileInfo-Pic__ProgressText"
                    style={{
                      color: `${
                        this.state.uploadProgress === 100
                          ? "#008000"
                          : "#ff9100"
                      }`,
                    }}
                  >
                    {this.state.uploadProgress === 100
                      ? "Done"
                      : `${Math.round(this.state.uploadProgress)}%`}
                  </h3>
                </div>
              ) : (
                <img
                  className="ProfileInfo-Pic__Label"
                  src={
                    this.state.picUrl
                      ? this.state.picUrl
                      : this.props.userData.profilePic
                      ? this.props.userData.profilePic
                      : ProfilePic
                  }
                  alt=""
                />
              )}

              <input
                type="file"
                className="ProfileInfo-Pic__Input"
                onChange={(e) => {
                  console.log(e);
                  this.showImage(e.target.files);
                  captureImage(e.target.files);
                }}
              />
              <IconContext.Provider
                value={{
                  size: "40px",
                  color: "grey",
                  className: "ProfileInfo-CameraIcon",
                }}
              >
                <div>
                  <FaCamera />
                </div>
              </IconContext.Provider>
            </label>
          </div>
          <Form
            onSubmit={onSubmit}
            initialValues={{}}
            render={({ handleSubmit, submitting, pristine, values }) => (
              <form className="ProfileInfo-Form" onSubmit={handleSubmit}>
                <div className="ProfileInfo-Personal__Container">
                  {" "}
                  <Field
                    className="ProfileInfo-Input"
                    type={"text"}
                    component={FieldInput}
                    name="name"
                    placeholder="Name"
                  />{" "}
                  <Field
                    className="ProfileInfo-Input"
                    type={"text"}
                    component={FieldInput}
                    name="address"
                    placeholder="Address"
                    validate={composeValidators()}
                  />
                  {/* <Field
                    name="mobile"
                    placeholder="Mobile No."
                    component={this.PhoneAdapter}
                    validate={composeValidators(required)}
                  /> */}
                  <Field
                    className="ProfileInfo-Input__textArea"
                    type={"textarea"}
                    component={FieldInput}
                    name="userBio"
                    placeholder="Tell us something about yourself"
                  />
                  <div className="ProfileInfo-Btns">
                    <button className="ProfileInfo-Btns__Submit" type="submit">
                      Save Changes
                    </button>
                  </div>
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
  doUserUpdate: (request: any) => dispatch(userUpdateRequest(request)),
  uploadFile: (files: object) => {
    dispatch(fileUploadRequest({ files: files }));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
