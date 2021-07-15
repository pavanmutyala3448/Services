import React from "react";
import "../components/componentStyles/Service.css";
import Img from "./Img";
import Content from "./Content";
import Serviced from "./service";
const Service = () => {
  return (
    <React.Fragment>
      <div className="conainer-fluid ">
        <div className="Services-Page">
          <h1>Services</h1>
        </div>
        <div className="container">
          {Serviced.map((item) => {
            return (
              <div className="row">
                <div className="col-md-6 leftSection">
                  <Img img={item.img} />
                </div>
                <div className="col-md-6 rightsection">
                  <Content
                    heading={item.heading}
                    text={item.text}
                    btnText={item.btnText}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Service;
