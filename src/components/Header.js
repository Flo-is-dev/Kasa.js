import React from "react";

const Header = ({ children }) => {
  return <div className="header-container">{children && children}</div>;
};

export default Header;
