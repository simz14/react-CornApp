import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  margin: 0;
  padding: 25px;
`;
const Link = styled(NavLink)`
  background-color: #0000004a;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: #000000bd;
  }
`;

const Navigation = () => {
  return (
    <div>
      <NavList>
        <Link to="/">Home</Link>
        <Link to="/simple/states">Counter</Link>
      </NavList>
    </div>
  );
};

export default Navigation;
