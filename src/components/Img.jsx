import React from "react";
import "./componentStyles/img.css";
const Img = (props) => {
  return <img className="img" src={props.img} alt="img" />;
};
export default Img;
