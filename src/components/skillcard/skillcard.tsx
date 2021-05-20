import React from "react";
import styled from "styled-components";
import { COLORS } from "styles/styles";
export interface SkillCardProps {
  skill?: string;
  details?: string;
  margin?: string; // this should be typed in like a regular margin css property
  textColor?: string;
  backgroundColor?: string;
  accentColor?: string;
}
/**
 * @name SkillCard
 * @param {string} skill
 * @param {string} details
 * @param {string} margin
 * @param {string} backgroundColor
 * @param {string} textColor
 */
export const SkillCard: React.FC<SkillCardProps> = ({
  skill = "",
  details = "",
  margin,
  backgroundColor = "black",
  textColor = "white",
  accentColor,
}) => {
  return (
    <CardContainer
      backgroundColor={backgroundColor}
      textColor={textColor}
      margin={margin}
      accentColor={accentColor}
    >
      <SkillTitle>{skill}</SkillTitle>
      <DetailsText>{details}</DetailsText>
    </CardContainer>
  );
};

const CardContainer = styled.div<SkillCardProps>`
  height: auto;
  overflow: hidden;
  border: 1px solid ${COLORS.sevenBlack};
  cursor: default;
  border-radius: 0px;
  color: ${props => (props.textColor ? props.textColor : ``)};
  transition: 0.3s ease;
  background: ${props => (props.backgroundColor ? props.backgroundColor : ``)};
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-top: 6px solid ${props => (props.accentColor ? props.accentColor : ``)};
  margin: ${props => (props.margin ? props.margin : "")};
`;
const SkillTitle = styled.span`
  font-size: 1.1em;
  font-weight: 500;
`;
const DetailsText = styled.span`
  font-size: 0.9em;
  font-weight: 200;
`;
