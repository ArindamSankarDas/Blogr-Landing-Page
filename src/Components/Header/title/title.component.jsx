import React from "react";
import './title.styles.scss'

const Title = (props) => {
  return (
    <div className="title">
      <div className="title_heading">
        <h1> A modern publishing platform</h1>
        <h2>Grow your audience and build your online brand</h2>
      </div>

      <div className="title_btn">
        {props.title_btn.map((btn, index) => (
          <button className="btn" key={index}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Title;
