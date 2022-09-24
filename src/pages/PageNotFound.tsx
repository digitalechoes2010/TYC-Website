import React from "react";
import "./styles/PageNotFound.css";
import NotFound from "../assets/SVGs/404Page.svg";
function PageNotFound() {
  return (
    <div className="PageNotFound-container">
      <h2>Page Not Found</h2>
      <img src={NotFound} alt="" />
      <h2>Please return to previous page...</h2>
    </div>
  );
}

export default PageNotFound;
