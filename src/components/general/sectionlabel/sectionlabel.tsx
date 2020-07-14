import React from "react";
import styled from "styled-components";
interface SectionLabelProps {
  accentColor?: string;
}
const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  accentColor,
}) => <SectionName accentColor={accentColor}>{children}</SectionName>;
export default SectionLabel;
const SectionName = styled.h1<SectionLabelProps>`
  display: inline-block;
  border: 0px solid transparent;

  border-bottom: 4px solid
    ${props => (props.accentColor ? props.accentColor : ``)};
`;
