import React from "react";
import ButtonType from "types/button";
import styled from "styled-components";
import { COLORS, FONT_FAMILY } from "styles/styles";
/**
 * @name Button This is general prestyled button that can be further customized.
 * @prop {string} margin Sets the margins around the button
 * @prop {string} padding Sets the padding inside the button
 * @prop {string} mainColor
 * @prop {string} accentColor Sets the color for the border around the button
 * @prop {string} textColor By default the text color will be the same as the accent color.
 * @retuns React.FC
 */
const Button: ButtonType = ({
  margin = "",
  padding = "",
  mainColor = COLORS.primaryColor,
  accentColor = COLORS.lightWhite,
  width = "",
  textColor = "",
  children,
  ...props
}) => {
  return (
    <ButtonContainer
      {...props}
      width={width}
      margin={margin}
      padding={padding}
      accentColor={accentColor}
      mainColor={mainColor}
      textColor={textColor ? textColor : accentColor}
    >
      {children}
    </ButtonContainer>
  );
};
export default Button;
interface ButtonContainerProps {
  margin?: string;
  mainColor?: string;
  accentColor?: string;
  width?: string;
  padding?: string;
  textColor?: string;
}
const ButtonContainer = styled.button<ButtonContainerProps>`
  border: 1px solid ${props => props.mainColor};
  border-style: solid;
  width: ${props => props.width};
  border-radius: 4px;
  font-family: ${FONT_FAMILY};
  margin: ${props => props.margin};
  background: ${props => props.mainColor};
  padding: ${props => props.padding};
  cursor: pointer;
  color: ${props => props.textColor};
  transition: all 0.2s ease;
  &:hover {
    border: 1px solid ${props => props.accentColor};
  }
  &:active {
    outline: none;
    border: 1px solid ${props => props.accentColor};
  }
  &:focus {
    outline: none;
    border: 1px solid ${props => props.accentColor};
  }
`;
