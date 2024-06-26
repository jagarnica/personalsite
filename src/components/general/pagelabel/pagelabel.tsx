import React from "react";
import styled from "styled-components";
import { FONT_FAMILY } from "styles/styles";
export interface PageLabelProps {
  accentColor: string;
  margin?: string;
  children?: React.ReactNode;
}
/**
 * @name PageLabel Create a stylized label intended to let the user know what page they are on.
 * @prop {string} accentColor Sets the accent color for the borders on the top and the bottom
 * @prop {ReactNode} children This sets the content inside of the block.
 */
export const PageLabel = ({
  children,
  accentColor,
  margin,
}: PageLabelProps) => {
  return (
    <Container margin={margin} color={accentColor}>
      {children}
    </Container>
  );
};
const Container = styled.div<{ color: string; margin?: string }>`
  flex: 1;
  display: flex;
  height: 100%;
  margin-top: 0px;
  font-family: ${FONT_FAMILY};
  font-size: 5em;
  font-weight: normal;
  align-content: center;
  padding: 60px 0px;
  border-top: 2px solid ${props => props.color};
  border-bottom: 2px solid ${props => props.color};
  margin: ${props => (props.margin ? props.margin : ``)};
  line-height: 1em;
  max-width: 100%;
  @media only screen and (max-width: 600px) {
    font-size: 3.4em;
  }
`;
