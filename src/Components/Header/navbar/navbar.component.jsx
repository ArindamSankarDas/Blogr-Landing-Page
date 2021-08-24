import React from "react";
import BRAND_DATA from "../../.../../../assets/data/brand_data";
import "./navbar.styles.scss";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      showItems: false,
      showLinks: false,
    };
  }

  toggleNavMenu = () => {
    if (this.state.showItems === false) {
      this.setState({ showItems: true });
    } else {
      this.setState({ showItems: false });
    }
  };

  render() {
    let { showItems } = this.state;
    let data = BRAND_DATA.brand_data;

    return (
      <div className="navbar">
        <div className="logo" />
        <div className={showItems ? "nav-items" : "nav-items hide-menu-items"}>
          <ul className="links">
            {data.map(({ header_name }, index) => (
              <li key={index}>
                <a href={`#${header_name}`}>{header_name}</a>
              </li>
            ))}
          </ul>
          <div className="authentication">
            {this.props.buttons.map((btn, index) => (
              <button className="btn" key={index}>
                {btn}
              </button>
            ))}
          </div>
        </div>

        <div
          className={showItems ? "toggler_close" : "nav_toggler"}
          onClick={this.toggleNavMenu}
        />
      </div>
    );
  }
}

export default Navbar;
