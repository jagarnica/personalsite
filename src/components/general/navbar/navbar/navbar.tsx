import React from "react";
import useScrollHandler from "helpers/hooks/usescrollhandler";
import styled from "styled-components";
import NavItem from "./navigationitem";
import DrawerMenu from "../drawermenu/";
import "../../../layout.css";
import * as globalStyles from "styles/styles";
import RoadLink from "../classes/roadlink";
import { Link } from "gatsby";
const NAV_BAR_LINKS = [
  new RoadLink("Home", globalStyles.COLORS.homePageAccent, "/"),
  new RoadLink("About", globalStyles.COLORS.aboutPageAccent, "/about/"),
  new RoadLink("Blog", globalStyles.COLORS.blogPageAccent, "/blog/"),
  new RoadLink("Resume", globalStyles.COLORS.resumePageAccent, "/resume/"),
];
const Navbar: React.FC = () => {
  const isScrolled = useScrollHandler(); // Get if the user scrolled down or not.
  const NavTabs = NAV_BAR_LINKS.map((roadObj: RoadLink) => {
    const pathName = roadObj.getPathName();
    const linkName = roadObj.name;
    const activeColor = roadObj.activeColor;
    return (
      <NavItem
        pathName={pathName}
        activeColor={activeColor}
        linkName={linkName}
        key={linkName}
      ></NavItem>
    );
  });

  return (
    <OuterContainer className={isScrolled ? "onScroll" : ""}>
      <NavbarContainer>
        <TitleSpan to="/" activeStyle={{ textDecoration: "none" }}>
          JESUS GARNICA
        </TitleSpan>
        <DrawerMenu
          exitButtonColor={globalStyles.COLORS.sevenBlack}
          backgroundColor={"#fcfcfc"}
          iconColor={globalStyles.COLORS.sevenBlack}
        >
          <TabsLayoutDiv>{NavTabs}</TabsLayoutDiv>
        </DrawerMenu>
      </NavbarContainer>
    </OuterContainer>
  );
};

export default Navbar;
const OuterContainer = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  top: 0;
  left: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0);
  transition: border-color 0.1s ease, background-color 0.1s ease;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
  border-bottom: 1px solid transparent;
  color: ${globalStyles.COLORS.sevenBlack};
  background-color: rgba(255, 255, 255, 0);
  &.onScroll {
    background-color: ${globalStyles.COLORS.siteBackground};
    border-bottom: 1px solid ${globalStyles.COLORS.sevenBlack};
  }
`;
const NavbarContainer = styled.div`
  height: 69px;
  margin: 0 auto;
  font-family: ${globalStyles.FONT_FAMILY};
  max-width: 960px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1.0875rem;
  padding-right: 1.0875rem;
`;
const TitleSpan = styled(Link)`
  line-height: 1.2em;
  font-size: 1.2em;
  text-decoration: none;
  color: inherit;
`;

const TabsLayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  padding: 20px 0px;
  height: 100%;
  max-height: 100%;
  pointer-events: none;
  * {
    pointer-events: auto;
  }
`;
