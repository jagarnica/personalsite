import React from "react";
import styled from "styled-components";
import * as globalStyles from "../../styles/styles";
interface skillCardProps {
  skill: string;
  details: string;
  margin?: string; // this should be typed in like a regular margin css property
}
/**
 * @name SkillCard
 * @param {string} skill
 * @param {string} details
 * @param {string} margin
 */
const SkillCard: React.FC<skillCardProps> = ({ skill, details, margin }) => {
  return (
    <CardContainer margin={margin}>
      <SkillTitle>{skill}</SkillTitle>
      <DetailsText>{details}</DetailsText>
    </CardContainer>
  );
};
export default SkillCard;

interface CardContainerProps {
  margin?: string;
}

const CardContainer = styled.div<CardContainerProps>`
  height: auto;
  overflow: hidden;
  border: 1px solid transparent;
  cursor: default;
  border-radius: 0px;
  color: white;
  transition: 0.3s ease;
  background: #145593;

  display: flex;
  flex-direction: column;
  padding: 10px;

  margin: ${props => (props.margin ? props.margin : "")};
`;
const SkillTitle = styled.span`
  font-size: 1.1em;
  font-weight: bold;
`;
const DetailsText = styled.span`
  font-size: 0.9em;
  font-weight: 200;
`;
