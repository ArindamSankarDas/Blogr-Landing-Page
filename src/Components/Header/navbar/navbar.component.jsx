import React, { useState } from "react";
import "./navbar.styles.scss";

const Navbar = (props) => {
  const [showNavItems, setshowNavItems] = useState(false);
  const [togglerClose, setTogglerClose] = useState(false);

  const toggleNavMenu = () => {
    setshowNavItems(!showNavItems);
    setTogglerClose(!togglerClose);
  };

  return (
    <div className="navbar">
      <div className="logo" />
      <div className={showNavItems ? "nav-items" : "nav-items hide-menu-items"}>
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

      <div
        className={togglerClose ? "toggler_close" : "nav_toggler"}
        onClick={toggleNavMenu}
      />
    </div>
  );
};

export default Navbar;
