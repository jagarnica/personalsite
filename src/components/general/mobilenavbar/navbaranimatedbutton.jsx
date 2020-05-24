import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'
/**
 * @name NavbarAnimatedButton 
 * @description Updated November 3rd 2019, creates a simple button meant to be used 
 * in a nav. 
 * @prop {number} width Sets the total width for the button. 
 * @prop {boolean} active Sets if the icon should be in the "clicked" state.
 * @prop {number} height Sets the total height for the button 
 * @prop {function} onClick This is fired after the user clicks on the icon. EVENT is passed in. 
 * @prop {string} iconColor Sets the color for the icon. The default is black.
 * 
 */
class NavbarAnimatedButton extends Component {
  constructor(props) {
    super(props)
    this._isMounted = false

  }
  render() {
    let barClassName = ""
    if (this.props.active && this.props.active === true) {
      barClassName += "clicked"
    }
    let iconHeight = this.props.height || 15
    let transformAmount = Math.round(iconHeight/1.15384615385) /2
    return (
      <>
        <Container
        onClick={this.props.onClick}
        width={this.props.width}
        height={iconHeight}
        iconColor={this.props.iconColor}
        >
          <BarElement 
          translateY={transformAmount}
          className={"top " + barClassName} />
          <BarElement className={"center " + barClassName} />
          <BarElement 
          translateY={transformAmount}
          className={"bottom " + barClassName} />
        </Container>
      </>
    )
  }
}
export default NavbarAnimatedButton
NavbarAnimatedButton.defaultProps = {
    height: 15,
    width: 20,
    onClick:function(){},
}
NavbarAnimatedButton.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    iconColor: PropTypes.string,
    onClick: PropTypes.func,
}
const Container = styled.div`
  width: ${props => (props.width ? props.width + `px` : `20px`)};
  height: ${props => (props.height ? props.height + `px` : `15px`)};
  cursor: pointer;
  display: flex;
  flex-shrink:0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const BarElement = styled.div`
  width: 100%;

  height: 2px;
  background: ${props=>(props.iconColor? props.iconColor : `black`)};
  transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  &.center {
    &.clicked {
        transform:translateX(0px);
      opacity: 0;
    }
    transform:translateX(0);
    opacity: 1;
  }
  &.bottom {
    transform: translateY(0) rotate(0);
    &.clicked {
        transform: ${props=>(props.translateY? `translateY(-`+props.translateY + `px)` : ``)} rotate(135deg);
    }
  }
  &.top {
   
    transform: translateY(0) rotate(0);
    &.clicked {
        transform: ${props=>(props.translateY? `translateY(`+props.translateY + `px)` : ``)} rotate(-135deg);
    }
  }
`
