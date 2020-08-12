import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

interface Props {
  linkName: string; // This is the name of the link shown to the user
  activeColor: string; // This is color of the bottom of the bar when the tab is active
  pathName: string; // This is the pathname for the link
}
/**
 * @param {string} linkName  This is the name shown to the use as the name of nav item.
 * @param {string} activeColor  This is the color shown to highlight that the tab is active
 * @param {string} pathName the path name should be different from the name, this can be set to change it.
 */
const NavbarItem: React.FC<Props> = ({ linkName, activeColor, pathName }) => {
  return (
    <NavLinkDiv
      to={pathName}
      style={{
        borderColor: activeColor,
        background: activeColor,
        textDecoration: `none`,
      }}
      activeClassName="page_active"
      activeStyle={{
        background: `transparent`,
        color: activeColor,
        borderColor: activeColor,
      }}
    >
      {linkName}
    </NavLinkDiv>
  );
};
export default NavbarItem;
const NavLinkDiv = styled(Link)`
  font-size: 2.8em;
  line-height: 1em;
  color: black;
  font-weight: 400;
  padding: 20px;
  color: ${props => props.theme.colors.lightWhite};
  justify-content: center;
  align-items: center;
  display: flex;
  width: 396px;
  max-width: 80%;
  border: 4px solid;
  outline: none;
  text-transform: uppercase;
  font-family: ${props => props.theme.baseFontFamily};
  @media only screen and (max-device-width: 600px) {
    font-size: 2.1em;
  }
`;
