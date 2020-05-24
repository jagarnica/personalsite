import React, { Component } from "react"
import styled from "styled-components"
import MobileNarBarButton from "./navbaranimatedbutton"
import SideDrawer from "../sidedrawer/sidedrawer"
class MobileNavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
    this._isMounted = false
    this.handleMenuClosing = this.handleMenuClosing.bind(this)
    this.handleUserMenuButtonClick = this.handleUserMenuButtonClick.bind(this)
  }
  componentDidMount() {
    // Prevent memory leaks.
    this._isMounted = true
  }
  componentWillUnmount() {
    this._isMounted = false
  }
  handleUserMenuButtonClick(event) {
    event.preventDefault()
    event.stopPropagation()
    
    if (this._isMounted) {
      this.setState({
        menuOpen: !this.state.menuOpen,
      })
    }
  }
  handleMenuClosing() {
    if (this._isMounted) {
      this.setState({
        menuOpen: false,
      })
    }
  }

  render() {
    return (
      <Container>
        <SideDrawer
          width="90%"
          onRequestClose={this.handleMenuClosing}
          isVisible={this.state.menuOpen}
        >
          <DrawerContainer>
              <TitleText>Trueclap</TitleText>
              <LinkItem>Home</LinkItem>
              <LinkItem>Log In</LinkItem>
              <LinkItem style={{marginBottom:"20px"}}>Sign Up</LinkItem>
              
              <ImportantItem className="first">Content Creators</ImportantItem>
              <ImportantItem>Fundraising</ImportantItem>
              <ImportantItem>About</ImportantItem>
          </DrawerContainer>
        </SideDrawer>
        {this.props.children}
        <MobileNarBarButton
          active={this.state.menuOpen}
          onClick={this.handleUserMenuButtonClick}
        />
      </Container>
    )
  }
}
export default MobileNavBar

const Container = styled.div`
  max-width: 100%;
  height: auto;
  padding: 0px 20px;
  display: flex;
  background: rgba(240, 240, 240, 1);
  backdrop-filter: blur(20px);
  color: #373a3c;
  font-family: Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  justify-content: flex-end;
  align-items: center;
`
const DrawerContainer = styled.div`
  max-width: 100%;
  color: #373a3c;
  height: 100%;
  padding: 20px;
  flex-direction: column;
`
const TitleText = styled.span`
font-size:18px;
line-height:28px;
padding:20px 0px;
font-weight:700;
cursor:pointer;
`
const LinkItem = styled.div`
font-size:16px;
line-height:24px;
padding:10px 0px;
cursor:pointer;

`
const ImportantItem = styled.div`
font-size:18px;
line-height:24px;
padding:10px 0px;
cursor:pointer;
font-weight:700;
&.first{
    border-top: 1px solid rgb(221, 221, 221);
}

border-bottom: 1px solid rgb(221, 221, 221);

`