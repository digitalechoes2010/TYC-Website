import React, { Component } from "react";
import Footer from "./Footer";
import MemoNavbar from "./Navbar";

import "./Layout.css";

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Layout-Navbar">
          <MemoNavbar />
        </div>

        <main className="Layout-content">{this.props.children}</main>
        <div className="Layout-Footer">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
