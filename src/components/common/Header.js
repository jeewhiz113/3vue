import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {" | "}
      <NavLink to="/module1">Module1</NavLink>
      {" | "}
      <NavLink to="/module2">Module2</NavLink>
    </nav>
  );
};

export default Header;
