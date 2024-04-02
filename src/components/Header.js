import React from "react";

const Header = ({ children }) => {
  return <div className="headerContainer">{children && children}</div>;
};

export default Header;
