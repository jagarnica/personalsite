import React from "react";
import styled from "styled-components";
interface SectionLabelProps {
  accentColor?: string;
  margin?: string;
}
const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  accentColor,
  margin,
}) => (
  <SectionName margin={margin} accentColor={accentColor}>
    {children}
  </SectionName>
);
export default SectionLabel;
const SectionName = styled.h1<SectionLabelProps>`
  border: 0px solid transparent;
  text-transform: uppercase;
  font-weight: medium;
  margin: ${props => (props.margin ? props.margin : ``)};
`;
