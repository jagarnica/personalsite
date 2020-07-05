import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import styled from "styled-components";
import NavItem from "./navigationitem";
import DrawerMenu from "../drawermenu/index";
import "../../../layout.css";
import * as globalStyles from "../../../../styles/styles";
import RoadLink from "../classes/roadlink";
import { Link } from "gatsby";

const SCROLL_DELAY = 60;
const NAV_BAR_LINKS = [
  new RoadLink("Home", "#4700ff", "/"),
  new RoadLink("About", "purple", "/about/"),
  new RoadLink("Blog", "red", "/comingsoon/"),
  new RoadLink("Resume", "red", "/comingsoon/"),
  new RoadLink("Portfolio", "blue", "/comingsoon/"),
];
interface NavbarProps {
  scrollThreshold?: number;
}
const Navbar: React.FC<NavbarProps> = ({
  scrollThreshold = 60,
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
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
  useEffect(() => {
    if (window) {
      window.addEventListener(
        "scroll",
        debounce(handleScrollEvent, SCROLL_DELAY),
        false
      );
    }
    return function () {
      if (window) {
        window.removeEventListener("scroll", handleScrollEvent, false);
      }
    };
  });
  function handleScrollEvent(event: Event): void {
    if (!event.target) {
      return;
    }
    const currentTarget = event.target as HTMLDocument;
    const scrollingTarget = currentTarget.scrollingElement;
    const userScrolledDown =
      scrollingTarget && scrollingTarget.scrollTop > scrollThreshold
        ? true
        : false;
    if (userScrolledDown) {
      setIsScrolled(true);
    } else if (isScrolled) {
      setIsScrolled(false);
    }
  }

  return (
    <OuterContainer className={isScrolled ? "onScroll" : ""}>
      <NavbarContainer className={isScrolled ? "onScroll" : ""}>
        <TitleSpan to="/" activeStyle={{ textDecoration: "none" }}>
          JESUS GARNICA
        </TitleSpan>
        <DrawerMenu iconColor={isScrolled ? `black` : "hsla(0, 0%, 100%, 0.8)"}>
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
  transition: box-shadow 0.4s ease, background-color 0.2s ease;
  justify-content: center;
  width: 100vw;
  color: hsla(0, 0%, 100%, 0.8);
  background-color: rgba(255, 255, 255, 0);
  &.onScroll {
    color: black;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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
`;
