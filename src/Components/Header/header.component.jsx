import React from "react";
import Navbar from "./navbar/navbar.component";
import HEADER_DATA from "../../Data/header.data";
import "./header.styles.scss";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      header_data: HEADER_DATA,
    };
  }

  render() {
    const { links, buttons } = HEADER_DATA;
    return (
      <div className="header">
        <Navbar link_item={links} buttons={buttons} />
      </div>
    );
  }
}

export default Header;
