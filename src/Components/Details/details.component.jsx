import React from "react";
import DETAILS_DATA from "../../assets/data/details.data";
import "./details.styles.scss";

const Details = () => {
  return (
    <div className="details">
      <h1>Designed for the future</h1>
      <div className="container">
        <div className="container_flex">
          {DETAILS_DATA.map(({ title, paragraph }, index) => (
            <div className="sub_container" key={index}>
              <h2>{title}</h2>
              <p>{paragraph}</p>
            </div>
          ))}
        </div>
        <div className="logo"></div>
      </div>
    </div>
  );
};

export default Details;
