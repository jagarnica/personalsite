import React from "react";
import styled from "styled-components";
interface NavbarButtonProps {
  width?: number;
  active: boolean;
  tabIndex?: number;
  height?: number;
  onClick?: (arg0: React.MouseEvent) => void;
  iconColor?: string;
}
/**
 * @name NavbarButton
 * @description Creates a simple button meant to be used
 * in a nav.
 * @prop {number} width Sets the total width for the button.
 * @prop {boolean} active Sets if the icon should be in the "clicked" state.
 * @prop {number} height Sets the total height for the button
 * @prop {void} onClick This is fired after the user clicks on the icon. EVENT is passed in.
 * @prop {string} iconColor Sets the color for the icon. The default is black.
 *
 */
const NavbarButton: React.FC<NavbarButtonProps> = ({
  width,
  active,
  height,
  onClick,
  tabIndex = 1,
  iconColor,
}) => {
  let barClassName = "";
  if (active) {
    barClassName += "clicked";
  }
  const iconHeight = height || 15;
  const transformAmount = Math.round(iconHeight / 1.15384615385) / 2;
  return (
    <>
      <Container
        tabIndex={tabIndex}
        role="button"
        onClick={
          onClick
            ? onClick
            : function () {
                return;
              }
        } // If there is an onClick func passed in, do it!
        width={width}
        height={iconHeight}
        iconColor={iconColor}
      >
        <BarElement
          iconColor={iconColor}
          translateY={transformAmount}
          className={"top " + barClassName}
        />
        <BarElement
          iconColor={iconColor}
          className={"center " + barClassName}
        />
        <BarElement
          iconColor={iconColor}
          translateY={transformAmount}
          className={"bottom " + barClassName}
        />
      </Container>
    </>
  );
};
export default NavbarButton;
NavbarButton.defaultProps = {
  active: false,
};
interface ContainerProps {
  width?: number;
  height?: number;
  iconColor?: string;
}
interface BarElementProps {
  translateY?: number;
  iconColor?: string;
  className?: string;
}
const Container = styled.div<
  React.HtmlHTMLAttributes<HTMLElement> & ContainerProps
>`
  width: ${props => (props.width ? props.width + `px` : `20px`)};
  height: ${props => (props.height ? props.height + `px` : `15px`)};
  cursor: pointer;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  flex-shrink: 0;
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  outline: 1px solid transparent;
  &:focus {
    outline: 1px solid transparent;
  }
  &:active {
    outline: 1px solid transparent;
  }
  -webkit-tap-highlight-color: transparent;
`;
const BarElement = styled.div<BarElementProps>`
  width: 100%;
  user-select: none;
  height: 2px;
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  background: ${props => (props.iconColor ? props.iconColor : `black`)};
  transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  &.center {
    &.clicked {
      transform: translateX(0px);
      opacity: 0;
    }
    transform: translateX(0);
    opacity: 1;
  }
  &.bottom {
    transform: translateY(0) rotate(0);
    &.clicked {
      transform: ${props =>
          props.translateY ? `translateY(-` + props.translateY + `px)` : ``}
        rotate(135deg);
    }
  }
  &.top {
    transform: translateY(0) rotate(0);
    &.clicked {
      transform: ${props =>
          props.translateY ? `translateY(` + props.translateY + `px)` : ``}
        rotate(-135deg);
    }
  }
`;
