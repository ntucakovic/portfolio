import React from "react";
import Isvg from "react-inlinesvg";

const Logo = ({ logo, description }) => (
  <div className="logo-wrapper">
    <div className="logo">
      <Isvg src={logo}>
        <img src={logo} alt={description} />
      </Isvg>
    </div>
  </div>
);

export default Logo;
