import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import ProfilePic from "../assets/Images/Profile-Placeholder.png";
import ChangeLinkModal from "../components/CustomComponents/Modals/ChangeLinkModal/ChangeLinkModal";
import DirectModal from "../components/CustomComponents/Modals/DirectModal/DirectModal";
import ProfilePickerModal from "../components/CustomComponents/Modals/ProfilePickerModal/ProfilePickerModal";
import DashboardTabs from "../components/Dashboard/DashboardTabs";
import { fetchUser } from "../store/Actions/userActionCreator";
import "./styles/Dashboard.css";

interface State {
  Direct: boolean;
  Profile: string;
}

class Dashboard extends Component<any, State> {
  constructor(props) {
    super(props);
    this.state = { Direct: false, Profile: this.props.userData.profileTabType };
    this.handleDirectSwitch = this.handleDirectSwitch.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
  }
  handleProfile(profile) {
    this.setState({ Profile: profile });
  }
  handleDirectSwitch() {
    this.setState({ Direct: !this.state.Direct });
  }
  renderEditLink(link) {
    if (link === "" || link === null) {
      return <ChangeLinkModal />;
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.loginUserData.id);
  }
  render() {
    const { loginUserData, userData } = this.props;
    console.log(loginUserData);
    console.log(userData);
    return (
      <>
        <Container fluid className="Dashboard">
          <Row>
            <Col
              xs={6}
              className="Dashboard-Header Dashboard-Header__ProfilePic"
            >
              <img
                className="Dashboard-ProfilePic"
                src={userData.profilePic ? userData.profilePic : ProfilePic}
                alt="Profile Pic"
              />
              <h3 className="Dashboard-Username">{userData.name}</h3>
              <p className="Dashboard-ProfileLink">
                https://tapyourchip.com/p/{userData.link}
              </p>
              {console.log(userData.link)}
              {this.renderEditLink(userData.link)}
            </Col>
            <Col xs={6} className="Dashboard-Header Dashboard-Header__Btns">
              <DirectModal />

              <ProfilePickerModal
                setProfile={this.handleProfile}
                profile={this.state.Profile}
              />
              <Link to="/Profile/EditInfo" className="Dashboard-EditProfile">
                EDIT PROFILE
              </Link>
            </Col>
          </Row>
          <Row className="Dashboard-Accounts">
            <Col xs={12}>
              {" "}
              <DashboardTabs
                profile={this.state.Profile}
                socialProfiles={userData.socialProfiles}
                businessProfiles={userData.businessProfiles}
                userData={userData}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    loginUserData: state.LoginReducer.userData,
    userData: state.UserReducer,
  };
}
const mapDispatchToProps = (dispatch: any) => ({
  fetchUser: (id: any) => dispatch(fetchUser(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
