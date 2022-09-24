import React from "react";
import RenderIcon from "../iconHelper";
import "./Icon.css";

export default function Icon(props) {
  return (
    <div className="Icon">
      {console.log(props.name)}

      <button className="Icon-Logo">
        <div className="Icon-count">{props.count}</div>
        <RenderIcon name={props.name} size="100%" />
      </button>
    </div>
  );
}
