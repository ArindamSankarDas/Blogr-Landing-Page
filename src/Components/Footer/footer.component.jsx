import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import FOOTER_DATA from "../../assets/data/footer.data";
import "./footer.styles.scss";

const Footer = () => {
  const footerData = FOOTER_DATA.brand_data;

  return (
    <div className="footer">
      <Logo className="brand_logo" />

      <div className="brand_links">
        {footerData.map(({ header_name, header_support }, index) => (
          <div className="container" key={index}>
            <h4>{header_name}</h4>
            {header_support.map((support_item, index) => (
              <p key={index}>{support_item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
