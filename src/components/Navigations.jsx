import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/simple/states">Counter</NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
