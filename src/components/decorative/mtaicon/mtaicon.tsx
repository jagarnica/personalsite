import React from "react";
import styled from "styled-components";
import { COLORS } from "styles/styles";
interface MTAIconProp {
  size?: number;
  text: string;
  margin?: string;
  padding?: string;
  fontSize?: string;
  title?: string;
}
/**
 * @name MTAIcon Creates a round icon with the text inside
 * @type {React.FC}
 * @prop {number} size This is the size of the icon. The default is 32.
 * @prop {string} margin Sets the margin around the icon
 * @prop {string} title Sets the title for the icon.
 * @prop {string} text REQUIRED: Sets the text inside the icon
 * @prop {string} fontSize Sets the size of the font.
 * @returns ReactNode
 */
const MTAIcon: React.FC<MTAIconProp> = ({
  size = 32,
  text = "",
  margin,
  title = "",
  fontSize = "",
  padding = "8px",
}) => {
  return (
    <IconDiv
      fontSize={fontSize}
      title={title}
      margin={margin}
      padding={padding}
      backgroundColor={COLORS.sevenBlack}
      size={size}
    >
      <span>{text}</span>
    </IconDiv>
  );
};
export default MTAIcon;
const IconDiv = styled.div<{
  backgroundColor: string;
  size: number;
  margin?: string;
  padding?: string;
  fontSize?: string;
}>`
  background: ${props => props.backgroundColor};
  width: ${props => props.size + `px`};
  height: ${props => props.size + `px`};
  color: ${props => props.theme.colors.siteBackground};
  border-radius: 50%;
  text-transform: uppercase;
  display: inline-flex;
  align-content: center;
  justify-content: center;
  font-size: ${props => (props.fontSize ? props.fontSize : ``)};
  margin: ${props => (props.margin ? props.margin : ``)};
  align-items: center;
  padding: ${props => (props.padding ? props.padding : ``)};
  font-weight: 800;
  font-family: ${props => props.theme.baseFontFamily};
  text-align: center;
`;
