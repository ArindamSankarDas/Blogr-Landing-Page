import React from "react";
import "./navbar.styles.scss";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="links">
        {props.link_item.map((link, index) => (
          <a href="/" key={index}>
            {link}
          </a>
        ))}
      </div>

      <div className="authentication">
        {props.buttons.map((btn, index) => (
          <button className="btn" key={index}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
