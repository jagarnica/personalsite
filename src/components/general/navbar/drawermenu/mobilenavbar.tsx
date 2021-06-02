import React from "react";
import styled from "styled-components";
import MobileNarBarButton from "./navbaranimatedbutton";
import { DropDownMenu as DropdownNav, DropDownMenuProps } from "./dropdownnav";
interface MobileNavBarProps extends Omit<DropDownMenuProps, "isVisible"> {
  children?: React.ReactNode;
  iconColor?: string;
}
/**
 * @name MobileNavBar
 * @param {React.Node} children This sets the content that will be shown in the menu.
 * @param {string} iconColor This sets the color for the sandwich icon.
 * @param {string} backgroundColor This sets the background color for the drawer menu
 * @param {string} exitButtonColor This sets the background color for the exit button.
 *
 */
function MobileNavBar({
  children,
  iconColor,
  ...rest
}: MobileNavBarProps): JSX.Element {
  const [menuVisible, setMenuVisible] = React.useState(false);

  function handleOpenMenu(event: React.MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    setMenuVisible(true);
  }
  function handleMenuClosing() {
    setMenuVisible(false);
  }

  return (
    <Container>
      <DropdownNav
        width="100%"
        onRequestClose={handleMenuClosing}
        isVisible={menuVisible}
        {...rest}
      >
        <DrawerContainer>{children}</DrawerContainer>
      </DropdownNav>
      <MobileNarBarButton
        iconColor={iconColor}
        active={menuVisible}
        onClick={handleOpenMenu}
      />
    </Container>
  );
}
export default MobileNavBar;

const Container = styled.div`
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const DrawerContainer = styled.div`
  max-width: 100%;
  height: 100%;
`;
