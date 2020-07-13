import React from "react";
import styled from "styled-components";
import MobileNarBarButton from "./navbaranimatedbutton";
import DropdownNav from "./dropdownnav";
interface MobileNavBarProps {
  children?: React.ReactNode;
  iconColor?: string;
  backgroundColor?: string;
  exitButtonColor?: string;
}
interface MobileNavBarState {
  menuOpen: boolean;
}
/**
 * @name MobileNavBar
 * @param {React.Node} children This sets the content that will be shown in the menu.
 * @param {string} iconColor This sets the color for the sandwhich icon.
 * @param {string} backgroundColor This sets the background color for the drawer menu
 * @param {string} exitButtonColor This sets the background color for the exit button.
 *
 */
class MobileNavBar extends React.Component<
  MobileNavBarProps,
  MobileNavBarState
> {
  _isMounted: boolean;
  constructor(props: MobileNavBarProps) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this._isMounted = false;
  }
  componentDidMount(): void {
    // Prevent memory leaks.
    this._isMounted = true;
  }
  componentWillUnmount(): void {
    this._isMounted = false;
  }
  handleUserMenuButtonClick = (event: React.MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    if (this._isMounted) {
      this.setState({
        menuOpen: !this.state.menuOpen,
      });
    }
  };
  handleMenuClosing = (): void => {
    if (this._isMounted) {
      this.setState({
        menuOpen: false,
      });
    }
  };

  render(): React.ReactNode {
    return (
      <Container>
        <DropdownNav
          exitButtonColor={this.props.exitButtonColor}
          backgroundColor={this.props.backgroundColor}
          width="100%"
          onRequestClose={this.handleMenuClosing}
          isVisible={this.state.menuOpen}
        >
          <DrawerContainer>{this.props.children}</DrawerContainer>
        </DropdownNav>
        <MobileNarBarButton
          iconColor={this.props.iconColor}
          active={this.state.menuOpen}
          onClick={this.handleUserMenuButtonClick}
        />
      </Container>
    );
  }
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
