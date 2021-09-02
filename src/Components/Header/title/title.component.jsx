import React from "react";
import MediumButton from "../../Buttons/medium-Button/md-button.component.jsx";
import "./title.styles.scss";

const Title = () => {
  return (
    <div className="title">
      <div className="title_heading">
        <h1> A modern publishing platform</h1>
        <h2>Grow your audience and build your online brand</h2>
      </div>

      <div className="title_btn">
        <MediumButton>Start for Free</MediumButton>
        <MediumButton>Learn More</MediumButton>
      </div>
    </div>
  );
};

export default Title;
