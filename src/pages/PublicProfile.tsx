import React, { Component } from "react";
import { IconContext } from "react-icons";
import { MdOutlineDisabledByDefault } from "react-icons/md";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import ProfilePic from "../assets/Images/Profile-Placeholder.png";
import PublicProfileTabs from "../components/PublicProfile/PublicProfileTabs";
import { API } from "../config/api.config";
import { PathApi } from "../config/api.path.config";
import apiClient from "../config/clients";
import VCard from 'vcard-creator';
import countryCodes from './CountriesCodes';
import "./styles/PublicProfile.css";

export default class PublicProfile extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      userData: {},
      Profile: "",
      contacts: [],
      isActive: false,
      page: 1,
      activeDirect: "",
      isLoading: false,
    };
  }

  componentDidMount() {
    const pathname = window.location.pathname;
    console.log(pathname);
    if (pathname.includes("PublicProfile")) {
      this.setState({
        isLoading: true,
      });
      apiClient
        .get(PathApi.getNfcUserDetails + this.props.match.params.id)
        .then((data: any) => {
          if (data.data.isActive === true) {
            this.setState({
              userData: data.data,
              Profile: data.data.profileTabType,
              isActive: true,
              isLoading: false,
            });
          } else {
            this.setState({
              isActive: false,
              isLoading: false,
            });
          }
        })
        .catch((error: any) => {
          
          
          
          
        });
    } else if (pathname.includes("tags")) {
      this.setState({
        isLoading: true,
      });
      API.get(
        PathApi.getNfcDetailsBySerialNo + this.props.match.params.serialNumber
      )
        .then((data: any) => {
          console.log("getNfcUserDetailsbySerialNo", data);
          if (data.data.data.user.isActive === true) {
            if (data.data.isDirect === true) {
              const allLinks = [
                ...(data.data.data.user.socialProfiles
                  ? data.data.data.user.socialProfiles
                  : null),
              ];
              allLinks.push(
                ...(data.data.data.user.businessProfiles
                  ? data.data.data.user.businessProfiles
                  : null)
              );
              console.log("s", data.data.data.user.socialProfiles);
              console.log("b", data.data.data.user.businessProfiles);
              console.log("all", allLinks);
              this.setState(
                {
                  activeDirect: data.data.data.user.activeDirect,
                  isLoading: false,
                },
                () =>
                  allLinks.map((link: any) => {
                    link.id === this.state.activeDirect
                      ? (window.location.href = link.uri)
                      : console.log("");
                  })
              );
            } else {
              this.setState({
                userData: data.data.data.user,
                Profile: data.data.data.user.profileTabType,
                isActive: true,
                isLoading: false,
              });
            }
          } else {
            this.setState({
              isActive: false,
              isLoading: false,
            });
          }
        })
        .catch((error: any) => {
          this.setState({
            isActive: false,
            isLoading: false,
          });
        });
    } else {
      const postData = {
        query: `${this.props.match.params.id}`,
        type: "username",
      };
      this.setState({
        isLoading: true,
      });
      API.post(PathApi.searchById, postData)
        .then((response) => {
          console.log("/p", response);
          if (response.data[0].isActive === true) {
            if (response.data[0].isDirect === true) {
              const allLinks = [
                ...(response.data[0].socialProfiles
                  ? response.data[0].socialProfiles
                  : null),
              ];
              allLinks.push(
                ...(response.data[0].businessProfiles
                  ? response.data[0].businessProfiles
                  : null)
              );
              console.log("s", response.data[0].socialProfiles);
              console.log("b", response.data[0].businessProfiles);
              console.log("all", allLinks);
              this.setState(
                {
                  isLoading: false,
                  activeDirect: response.data[0].activeDirect,
                },
                () =>
                  allLinks.map((link: any) => {
                    link.id === this.state.activeDirect
                      ? (window.location.href = link.uri)
                      : console.log("");
                  })
              );
            } else {
              this.setState({
                userData: response.data[0],
                Profile: response.data[0].profileTabType,
                isActive: true,
                isLoading: false,
              });
            }
          } else {
            this.setState({
              isActive: false,
              isLoading: false,
            });
          }
        })
        .catch((error: any) => {});
    }
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
    console.log(this.state.userData);
    const { userData } = this.state;
      
  let isContact = false;
  this.state.contacts.map((contact: any) => {
    if(contact.userId === userData.id)
        return isContact = true;
    return isContact;
  })
    
  const myVCard = new VCard();

  const removeFirstWord = (string: any) => {
    const indexOfSpace = string.indexOf(' ');

    if (indexOfSpace === -1) {
      return '';
    }

    return string.substring(indexOfSpace + 1);
  };

  const removeLastWord = (string: any) => {
    const lastIndexOfSpace = string.lastIndexOf(' ');

    if (lastIndexOfSpace === -1) {
      return string;
    }

    return string.substring(0, lastIndexOfSpace);
  };

  let diallingCode: string;
  countryCodes.map((countryCodeDial: any) => {
    if(countryCodeDial.isoCode2 === userData.gender)
        return diallingCode = countryCodeDial.countryCodes[0];
    return diallingCode;
  })
  
  let firstName: any;
  let lastName: any;
  
  const splittingName = async () => {
    if(userData.name.length) {
      lastName = await removeFirstWord(userData.name);
      firstName = await removeLastWord(userData.name);
    } else {
      lastName =  await userData.username[0].toUpperCase() + userData.username.substring(1);
      firstName = await userData.username[0].toUpperCase() + userData.username.substring(1);
    }
  }

  let fullAddress: string;
  let fullAddressArray: any[];
  let firstPartAddress: any;
  let secondPartAddress: any;
  let thirdPartAddress: string;
  let fourthPartAddress: any;
  let splitedStreet: string | undefined;
  let splitedCity: string | undefined;
  let splitedStateZipCode: any;
  let splitedState: string | undefined;
  let splitedZipCode: string | undefined;
  let splitedCountryCode: string | undefined;
  
  const splittingAddress = async () => {
    fullAddress = await userData.address;
    fullAddressArray = fullAddress.split(',');
    firstPartAddress = await fullAddressArray[0];
    secondPartAddress = await fullAddressArray[1];
    thirdPartAddress = await fullAddressArray[2];
    fourthPartAddress = await fullAddressArray[3];
    splitedStreet = await firstPartAddress;
    splitedCity = await removeFirstWord(secondPartAddress);
    splitedStateZipCode = await removeFirstWord(thirdPartAddress);
    splitedState = await removeLastWord(splitedStateZipCode);
    splitedZipCode = thirdPartAddress.split(' ').pop();
    splitedCountryCode = await removeFirstWord(fourthPartAddress);
  }
    
  const addContact = async () => {
    await splittingName();
    await splittingAddress();
    myVCard
      .addName(lastName, firstName ?? userData.username[0].toUpperCase() + userData.username.substring(1))
      .addEmail(userData.email, 'Other')
      .addPhoneNumber('+' + diallingCode + ' ' + userData.userBio, 'Mobile')
      .addAddress(splitedStreet, splitedStreet, '', splitedCity, splitedState, splitedZipCode, splitedCountryCode, 'Home')
      console.log("Generated VCard", myVCard.toString());
    new Blob([myVCard.toString()])
    const FileSaver = require('file-saver');
    const blob = new Blob([myVCard.toString()], {type: "text/vcard;charset=utf-8"});
    FileSaver.saveAs(blob, firstName + lastName + '.vcf');
  }
    const Xmark = styled(MdOutlineDisabledByDefault)`
      color: #ff9100;
      border-radius: 50px;
      border-radius: 2px;
      padding: 1px;
      margin-left: 40px;
      margin-top: 50px;
    `;
    return (
      <Container fluid className="PublicProfile">
        {this.state.isLoading ? (
          <Row className="PublicProfile_SpinnerContainer">
            <svg
              className="Spinner"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle className="Spinner_circle" cx="50" cy="50" r="46" />
            </svg>
          </Row>
        ) : (
          <>
            <Row>
              <Col
                xs={12}
                className="PublicProfile-Header PublicProfile-Header__ProfilePic"
              >
                <img
                  className="PublicProfile-ProfilePic"
                  src={userData.profilePic ? userData.profilePic : ProfilePic}
                  alt="Profile Pic"
                />
                {userData.name ?
                  <h3 className="PublicProfile-Username">{userData.name}</h3>
                :
                  <h3 className="PublicProfile-Username">{userData.username}</h3>
                }
                {isContact ?
                  <button onClick={addContact} className="Dashboard-EditProfile">
                    Add Contact
                  </button>
                :
                  null
                }
                <p className="PublicProfile-ProfileLink">
                  https://tapyourchip.com/p/{userData.link}
                </p>
              </Col>
            </Row>
            {this.state.isActive ? (
              <Row className="PublicProfile-Accounts">
                <Col xs={12}>
                  {" "}
                  <PublicProfileTabs userData={userData} />
                </Col>
              </Row>
            ) : (
              <Row className="PublicProfile-Accounts__Inactive">
                <Col xs={12}>
                  <h1>The TYC tag has not been activated.To start using the tag,<br/>please activate it using the Tap Your Chip mobile app</h1>
                </Col>
                <IconContext.Provider
                  value={{ color: "#ff9100", size: "200px" }}
                >
                  <div>
                    <Xmark />
                  </div>
                </IconContext.Provider>
              </Row>
            )}
          </>
        )}
      </Container>
    );
  }
}
