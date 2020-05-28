import React, { Component } from "react"
import styled from "styled-components"
import MobileNarBarButton from "./navbaranimatedbutton.tsx"
import SideDrawer from "./dropdownnav.tsx"
class MobileNavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
    this._isMounted = false
  }
  componentDidMount() {
    // Prevent memory leaks.
    this._isMounted = true
  }
  componentWillUnmount() {
    this._isMounted = false
  }
  handleUserMenuButtonClick = (event) =>{
    event.preventDefault()
    event.stopPropagation()
    
    if (this._isMounted) {
      this.setState({
        menuOpen: !this.state.menuOpen,
      })
    }
  }
  handleMenuClosing = () =>{
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
          width="100%"
          onRequestClose={this.handleMenuClosing}
          isVisible={this.state.menuOpen}
        >
          < DrawerContainer>
          {this.props.children}
          </DrawerContainer>
          
        </SideDrawer>
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
  
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const DrawerContainer = styled.div`
  max-width: 100%;
  
  height: 100%;
 
 
`
