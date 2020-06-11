import React from "react";
import styled from "styled-components";
import * as GLOBAL_STYLES from "../../../styles/styles";
interface HeroButtonProps {
  children?: React.ReactNode;
}
/**
 * @name HeroButton This is a large button that also takes in all the regular props for a button.
 * @param {React.Node} children This could be anything like text or an icon.
 * @returns {React.Node}
 */
const HeroButton: React.FC<
  HeroButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default HeroButton;
interface ButtonContainerProps {
  margin?: string;
}
const ButtonContainer = styled.button<ButtonContainerProps>`
  border: 1px solid ${GLOBAL_STYLES.COLORS.primaryColor};
  border-style: solid;
  border-radius: 4px;
  margin: ${props => (props.margin ? props.margin : ``)};
  background: ${GLOBAL_STYLES.COLORS.primaryColor};
  width: 312px;
  padding: 8px;
  cursor: pointer;
  font-weight: bold;
  color: ${GLOBAL_STYLES.COLORS.lightWhite};
  transition: all 0.2s ease;
  &:hover {
    border: 1px solid ${GLOBAL_STYLES.COLORS.lightWhite};
    color: ${GLOBAL_STYLES.COLORS.lightWhite};
  }
  &:active {
    outline: none;
    border: 1px solid ${GLOBAL_STYLES.COLORS.lightWhite};
  }
  &:focus {
    outline: none;
    border: 1px solid ${GLOBAL_STYLES.COLORS.lightWhite};
  }
`;
