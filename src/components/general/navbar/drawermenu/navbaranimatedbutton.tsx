import React from "react";
import styled from "styled-components";
interface NavbarButtonProps {
  width: number;
  active: boolean;
  height: number;
  onClick?: void;
  iconColor: string;
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
  iconColor,
}) => {
  let barClassName = "";
  if (active) {
    barClassName += "clicked";
  }
  const iconHeight = height || 15;
  const transformAmount = Math.round(iconHeight / 1.15384615385) / 2;
  console.log("Color receieved", iconColor);
  return (
    <>
      <Container
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
const Container = styled.div<ContainerProps>`
  width: ${props => (props.width ? props.width + `px` : `20px`)};
  height: ${props => (props.height ? props.height + `px` : `15px`)};
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const BarElement = styled.div<BarElementProps>`
  width: 100%;

  height: 2px;
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
