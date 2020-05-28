import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import ExitButton from "./exitbutton";
/**
 * @name DropDownNav
 * @description Updated December 29, 2019. Presents a simple drawer that comes in from the
 * side.
 * @prop {boolean} isVisible Determines if the drawer is visible
 * @prop {string} direction Sets the direction the drawer will be set on. The default is left.
 * @prop {string} width Sets the width of the drawer
 * @prop {string} maxWidth Sets the max width for the drawer.
 * @prop {function} onRequestClose Sets the actions when the mask or outside is clicked.
 * @prop {function} onRequestOpen This will be called whenever the drawer is opening.
 */
class DropDownNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inDOM: false,
    };
  }
  restoreScrolling = () =>{
    //document.documentElement.style.overflow = "scroll";
    //document.body.scroll = "yes"
    
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);;
  }
  preventScrolling = () =>{
    //document.documentElement.style.overflow = "hidden";
    //document.body.scroll = "no";

    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    console.log("Trying to to prevent scrolling...", scrollY)
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
  }
  componentDidUpdate(prevProps) {
    //Lets check to see if we are visible or not
    if (this.props.isVisible !== prevProps.isVisible) {
      //Check to see if we should do this check.
      if (this.props.isVisible === true) {
        if (
          this.props.onRequestOpen &&
          typeof this.props.onRequestOpen === "function"
        ) {
          this.props.onRequestOpen();
        }
        this.setState({
          inDOM: true,
        });
        //Since we are opening the modal, lets block scrolling.
        this.preventScrolling()
      } else {
        this.restoreScrolling();
      }
    }
  }
  
  
  onMaskClick = event => {
    event.preventDefault();
    event.stopPropagation();
    //Undo the scrolling event blocking now that the modal is closed.
    this.restoreScrolling();
    this.props.onRequestClose();
  };
  componentWillUnmount() {
    this.restoreScrolling();
  }
  componentDidMount() {
    //Lets check to see if we are visible or not
    if (this.props.isVisible === true) {
      if (
        this.props.onRequestOpen &&
        typeof this.props.onRequestOpen === "function"
      ) {
        this.props.onRequestOpen();
      }
      this.setState({
        inDOM: true,
      });
      //If we are already visible, lets block scrolling.
      this.preventScrolling();
    }
    // This needs to be added to block scroll events.
  }
  handleAnimationEnd = event => {
    event.preventDefault();
    event.stopPropagation();
    if (this.props.isVisible === false) {
      this.setState({
        inDOM: false,
      });
    }
  };

  render() {
    try {
      let drawerClassName = this.props.isVisible ? "show" : "hide";

      return this.state.inDOM
        ? ReactDOM.createPortal(
            <ModelMask
              direction={this.props.direction}
              className={drawerClassName}
            >
              <ModalWrapper onClick={this.onMaskClick}>
                <ModalContainer
                  direction={this.props.direction}
                  onAnimationEnd={this.handleAnimationEnd}
                  className={drawerClassName}
                  onClick={e => {
                    // We are simply preventing the e based function up above from misfiring
                    e.stopPropagation();
                  }}
                  maxWidth={this.props.maxWidth}
                  style={{ width: this.props.width }}
                >
                  <ExitButtonContainer onClick={this.onMaskClick}>
                    <ExitButton />
                  </ExitButtonContainer>

                  {this.props.children}
                </ModalContainer>
              </ModalWrapper>
            </ModelMask>,
            document.body
          )
        : null;
    } catch (e) {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        console.log(e);
      }
      return null;
    }
  }
}

export default DropDownNav;

DropDownNav.propTypes = {
  isVisible: PropTypes.bool,
  onRequestOpen: PropTypes.func,
  onRequestClose: PropTypes.func,
  maxWidth: PropTypes.string,
  width: PropTypes.string,
  direction: PropTypes.string,
};
DropDownNav.defaultProps = {
  isVisible: false,
  width: `300px`,
  direction: "left",
  onRequestOpen: function () {},
  onRequestClose: function () {},
};
const ButtonRotate = keyframes`
from {
  transform: rotate(0deg);
}
to{
  transform: rotate(180deg);
}

`;
const ExitButtonContainer = styled.div`
  position: absolute;
  cursor: pointer;
  top: 50px;
  right: 10%;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 52px;
  height: 52px;

  &:hover {
    animation: 0.3s ${ButtonRotate} ease;
  }
`;
// Styling for the Modal Components **********
const FromLeftSide = keyframes`
from {
  transform: translateY(-100%);
}
to{
    transform: translateY(0%);
}
`;
const FromRightSide = keyframes`
from {
  transform: translateY(100%);
}
to{
    transform: translateY(0%);
}

`;
const ToLeftOutside = keyframes`
from{
    transform: translateY(0%);
}
to{
    transform: translateY(-100%);
}
`;
const ToRightOutside = keyframes`
from{
    transform: translateY(0%);
}
to{
    transform: translateY(100%);
}
`;
const FadeIn = keyframes`
from{
    opacity:0;
}
to{
    opacity:1;
}

`;
const FadeOut = keyframes`
from{
    opacity: 1;
}
to{
    opacity: 0;
}

`;

const ModelMask = styled.div`
  position: fixed;
  z-index: 950 !important;
  top: 0;
  left: 0;

  transform: translate3d(0, 0, 0);
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  background-color: rgba(82, 95, 127, 0.25);
  opacity: 0;
  transition: opacity 0.3s ease;
  &.show {
    transform: translate3d(0, 0, 0);
    animation: ${FadeIn} 0.3s ease forwards;
  }
  &.hide {
    transform: translate3d(0, 0, 0);
    animation: ${FadeOut} 0.3s ease forwards;
  }
`;

/* This styling is for the corner buttons containing the content */

const ModalWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;

  z-index: 500 !important;
`;
/* This styling is for the actual border containing the content */
const ModalContainer = styled.div`
  position: absolute;
  z-index: 500 !important;
  opacity:0; /* This sets the opacity for the entire container */
  transform: translateX(-100%);
  background-color: #fff;
  border-radius: 4px;
  top: 0;
  ${props =>
    props.direction === "left" || props.direction === "Left"
      ? "left:0;"
      : "right:0;"};

  height: 100%;
  max-width: ${props => (props.maxWidth ? props.maxWidth : "")};
  box-shadow: 0 7px 14px 0 rgba(60, 66, 87, 0.12),
    0 3px 6px 0 rgba(0, 0, 0, 0.12);

  transition: width, height 0.3s ease;
  transform: translate3d(0, 0, 0);

  &.hide {
    animation: ${props =>
        props.direction === "left" || props.direction === "Left"
          ? ToLeftOutside
          : ToRightOutside}
      forwards;
    transform: translate3d(0, 0, 0);

    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);

    animation-duration: 0.4s;
  }
  &.show {
    animation: ${props =>
        props.direction === "left" || props.direction === "Left"
          ? FromLeftSide
          : FromRightSide}
      forwards;

    transform: translate3d(0, 0, 0);

    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
    animation-duration: 0.4s;
  }
`;
