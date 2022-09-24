import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import AnalyticsTabs from "../components/Analytics/AnalyticsTabs";
import { fetchUser, setUserdata } from "../store/Actions/userActionCreator";
import { Helmet } from "react-helmet";
import "./styles/Analytics.css";
import apiClient from "../config/clients";
import { PathApi } from "../config/api.path.config";
import { Dispatch } from "redux";

class Analytics extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      isLoading: true,
      weeklyData: [],
    };
  }

  componentDidMount = () => {
    this.getAnalyticsData();
  };
  getAnalyticsData = async () => {
    this.setState({ isLoading: true });
    try {
      const res = await apiClient.get(PathApi.analytics);
      if (res.status == 200) {
        this.setState({
          weeklyData:
            res.data && res.data.length > 0
              ? res.data.reverse().map((e: any) => ({
                  week: e.week,
                  value: `${e.value}`,
                }))
              : [],
          isLoading: false,
        });
        console.log("weekly", this.state.weeklyData);
      } else {
        this.setState({ isLoading: false });
      }
      const resUser = await apiClient.get(
        PathApi.usersByid + this.props.userData.id
      );

      if (resUser.status == 200) {
        const { socialProfiles = [], businessProfiles = [] }: any =
          resUser.data;
        console.log("resUser.data", resUser.data);

        this.props.updateProfileTypes({ socialProfiles, businessProfiles });
      }
    } catch (error) {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <>
        <Container fluid className="Analytics p-0">
          <Helmet>
            <title>TYC - Analytics</title>
          </Helmet>{" "}
          <Row>
            <Col xs={12} className="Analytics-Header__Title">
              <h3 className="Analytics-Header__Title">Analytics</h3>
            </Col>
          </Row>
          <Row className="Analytics-Accounts">
            <Col xs={12} className="p-0">
              <AnalyticsTabs
                data={this.state.weeklyData}
                userData={this.props.userData}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateProfileTypes: (data: any) => dispatch(setUserdata(data)),
});
// setUserdata
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    userData: state.UserReducer,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
