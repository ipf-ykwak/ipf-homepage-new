import React from "react";
import styled from "styled-components";

import colors from "../layouts/colors";
import Typography from "../Typography";

import { Link } from "gatsby";

import logo from "../images/redLogo.png";

const HeaderComponent = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 calc((100% - 1040px) / 2);

  width: 100%;
  height: 4.5rem;

  ${Typography("body", 1, 400)};
  line-height: 2.5;
`;

const Logo = styled.img``;

const Nav = styled.nav``;

const NavItems = styled.ul`
  display: flex;
  gap: 2.5rem;
  line-height: 4.5rem;
`;

function Navigation() {
  return (
    <HeaderComponent>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>

      <NavItems>
        <li>
          <Link activeStyle={{ color: colors.primary }} to="/About/">
            About
          </Link>
        </li>
        <li>
          <Link activeStyle={{ color: colors.primary }} to="/Product/">
            Product
          </Link>
        </li>
        <li>
          <Link to="/News/">News</Link>
        </li>
        <li>
          <Link to="/Career/">Career</Link>
        </li>
        <li>
          <Link to="/Contact/">Contact</Link>
        </li>
      </NavItems>
    </HeaderComponent>
  );
}

export default Navigation;
