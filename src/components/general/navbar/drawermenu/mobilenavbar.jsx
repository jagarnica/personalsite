import React, { Component } from "react";
import styled from "styled-components";
import MobileNarBarButton from "./navbaranimatedbutton.tsx";
import DropdownNav from "./dropdownnav.tsx";
/**
 * @name MobileNavBar
 * @param {React.Node} children This sets the content that will be shown in the menu.
 * @param {string} iconColor This sets the color for the sandwhich icon.
 * @param {string} backgroundColor This sets the background color for the drawer menu
 * @param {string} exitButtonColor This sets the background color for the exit button.
 *
 */
class MobileNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this._isMounted = false;
  }
  componentDidMount() {
    // Prevent memory leaks.
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  handleUserMenuButtonClick = event => {
    event.preventDefault();
    event.stopPropagation();

    if (this._isMounted) {
      this.setState({
        menuOpen: !this.state.menuOpen,
      });
    }
  };
  handleMenuClosing = () => {
    if (this._isMounted) {
      this.setState({
        menuOpen: false,
      });
    }
  };

  render() {
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
