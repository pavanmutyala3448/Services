import React from "react";
import "./componentStyles/content.css";
const Content = (props) => {
  return (
    <div className="Content">
      <div className="Content-items">
        <h1 className="content-head">{props.heading}</h1>
        <p className="content-text">{props.text}</p>
        <button className="btn ">{props.btnText}</button>
      </div>
    </div>
  );
};
export default Content;
