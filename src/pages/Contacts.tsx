import React, { Component } from "react";
import { Col, Container, Row, Spinner } from "reactstrap";
import { PathApi } from "../config/api.path.config";
import apiClient from "../config/clients";
import { Helmet } from "react-helmet";
import InfiniteScroll from "react-infinite-scroll-component";
import "./styles/Contacts.css";
import ContactCard from "../components/CustomComponents/ContactCard/ContactCard";

export default class Contacts extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      contacts: [],
      isLoading: true,
      currentPage: null,
      page: 1,
      size: 20,
      total: 0,
      loadMore: true,
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let page = this.state.page;

    apiClient
      .get(PathApi.getContactsbyUserId + page)
      .then((data: any) => {
        console.log("contact data", data);
        const res = data.data;
        if (data.status === 200) {
          const mapData = res.contacts.map((e: any) => {
            return {
              userId: e.contactId,
              userName:
                e.contactUserDetails?.name ?? e.contactUserDetails?.username,
              location: e.tapAddress,
              lat: e?.location.lat,
              lng: e?.location.long,
              profilePic: e.contactUserDetails?.profilePic,
            };
          });
          this.setState(
            {
              total: res.total && res.total,
              page: parseInt(res.page),
              size: res.size && res.size,
              contacts: [...this.state.contacts, ...mapData],
            },
            () => {
              console.log("contacts", this.state.contacts);
              console.log(this.state.isLoading);
            }
          );
        }
      })
      .catch((error: any) => {
        console.log(error.response);
        this.setState({
          isLoading: false,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };
  render() {
    {
      console.log(
        "total",
        this.state.total,
        "contacts",
        this.state.contacts.length
      );
    }
    return (
      <Container fluid className="Contacts p-0">
        <Helmet>
          <title>TYC - Contacts</title>
        </Helmet>
        <Row>
          <Col xs={12} className="Contacts-Header__Title">
            <h3 className="Contacts-Header__Title">Contacts</h3>
          </Col>
        </Row>
        <Row className="Contacts-Cards">
          <InfiniteScroll
            className="Contacts-infiniteScroll"
            dataLength={this.state.contacts.length}
            next={() => {
              this.setState((prev) => ({ page: prev.page + 1 }), this.getData);
            }}
            hasMore={true}
            height={800}
            loader={
              this.state.contacts.length !== this.state.total && (
                <div className="Contacts-Spinner">
                  <Spinner style={{ color: "#a200a5" }}>Loading...</Spinner>
                </div>
              )
            }
          >
            <div className="Contacts-infiniteScroll_items">
              {this.state.contacts.map((c) => (
                <div className="Contacts-Card__Container" key={c.userId}>
                  <ContactCard contact={c} />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </Row>
      </Container>
    );
  }
}
