import React, { Component } from "react";
import Communication from "../../../assets/SVGs/ContactlessCommunication.svg";
import Sharing from "../../../assets/SVGs/ConvenientSharing.svg";
import Optimization from "../../../assets/SVGs/EfficientOptimization.svg";
import Access from "../../../assets/SVGs/InstantAccess.svg";
import Secure from "../../../assets/SVGs/SecureNetwork.svg";
import "./styles/FeatureCarousel.css";
interface State {
  flipped: boolean;
}
interface Props {
  name: string;
  text: string;
  title: string;
}
export default class FeatureCard extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      flipped: false,
    };
    this.renderLogo = this.renderLogo.bind(this);
  }
  renderLogo(name: string) {
    if (name === "Communication") {
      return <img src={Communication} alt="" />;
    } else if (name === "Access") {
      return <img src={Access} alt="" />;
    } else if (name === "Secure") {
      return <img src={Secure} alt="" />;
    } else if (name === "Sharing") {
      return <img src={Sharing} alt="" />;
    } else if (name === "Optimization") {
      return <img src={Optimization} alt="" />;
    }
  }
  handleFlip() {
    this.setState({
      flipped: !this.state.flipped,
    });
  }
  render() {
    return (
      <div className="Feature">
        <div className="Feature_Container" onClick={() => this.handleFlip()}>
          <div
            className={`Feature-Card front ${
              this.state.flipped ? "is-flipped" : ""
            }`}
          >
            {this.renderLogo(this.props.name)}
            <h3>{this.props.title}</h3>
          </div>
          <div
            className={`Feature-Card back ${
              !this.state.flipped ? "is-flipped" : ""
            }`}
          >
            <p className="Feature-Card__Text">{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}
