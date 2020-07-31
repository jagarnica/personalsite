import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import * as globalStyleConst from "styles/styles";

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
        background: activeColor,
        color: globalStyleConst.COLORS.lightWhite,
        textDecoration: `none`,
      }}
      activeClassName="page_active"
      activeStyle={{
        background: `transparent`,
        color: activeColor,
        outlineColor: activeColor,
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
  justify-content: center;
  align-items: center;
  display: flex;
  width: 400px;
  border: 0px solid transparent;
  text-transform: uppercase;
  font-family: ${globalStyleConst.FONT_FAMILY};
  &.page_active {
    outline-style: solid;
    outline-width: 4px;
    &:hover {
      outline-style: solid;
    }
  }
`;
