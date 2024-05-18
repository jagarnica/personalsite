import * as React from "react";
import styled from "styled-components";
import { COLORS } from "styles/styles";
import { ButtonHTMLAttributes } from "react";
import { Link } from "gatsby";

/**
 * @name Button This is general prestyled button that can be further customized.
 * @prop {string} margin Sets the margins around the button
 * @prop {string} padding Sets the padding inside the button
 * @prop {string} mainColor
 * @prop {string} accentColor Sets the color for the border around the button
 * @prop {string} textColor By default the text color will be the same as the accent color.
 * @retuns React.FC
 */

/**
 *
 */

type BaseButtonProps = {
  mainColor?: string;
  accentColor?: string;
  textColor?: string;
  margin?: string;
  padding?: string;
  width?: string;
};

type ButtonElementProps = BaseButtonProps & {
  isLink?: false;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type LinkElementProps = BaseButtonProps & {
  isLink: true;
} & React.ComponentPropsWithoutRef<typeof Link>;

export type ButtonProps = ButtonElementProps | LinkElementProps;

const Button = ({
  margin = "",
  padding = "",
  mainColor = COLORS.primaryColor,
  accentColor = COLORS.sevenBlack,
  width = "",
  textColor = "white",
  isLink,
  children,
  ...props
}: ButtonProps) => {
  if (isLink) {
    return (
      <LinkButtonContainer
        {...(props as LinkElementProps)}
        width={width}
        margin={margin}
        padding={padding}
        accentColor={accentColor}
        mainColor={mainColor}
        textColor={textColor ? textColor : accentColor}
      >
        {children}
      </LinkButtonContainer>
    );
  }

  return (
    <ButtonContainer
      {...(props as ButtonElementProps)}
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
  border-radius: 0px;
  font-family: ${props => props.theme.baseFontFamily};
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

const LinkButtonContainer = styled(Link)<ButtonContainerProps>`
  border: 1px solid ${props => props.mainColor};
  border-style: solid;
  width: ${props => props.width};
  border-radius: 0px;
  font-family: ${props => props.theme.baseFontFamily};
  margin: ${props => props.margin};
  background: ${props => props.mainColor};
  padding: ${props => props.padding};
  cursor: pointer;
  color: ${props => props.textColor};
  transition: all 0.2s ease;
  text-align: center;
  text-decoration: none;
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
