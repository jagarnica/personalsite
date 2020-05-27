import React from "react"
import styled from "styled-components"
import * as globalStyles from "../../styles/styles"
interface skillCardProps {
  skill: string
  details: string
  margin?: string // this should be typed in like a regular margin css property 
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
  )
}
export default SkillCard

interface CardContainerProps {
  margin? : string 
}

const CardContainer = styled.div<CardContainerProps>`
  width: 250px;
  height: auto;
  overflow: hidden;
  border: 0px solid black;
  cursor:default;
  border-radius: 4px;
  transition: 0.3s ease ;
 
  box-shadow: ${globalStyles.BOX_SHADOWS.shadow1};
  &:hover{
 
    box-shadow: ${globalStyles.BOX_SHADOWS.shadow2};
  }
  display: flex;
  flex-direction: column;
  padding: 10px;

  margin: ${props=>(props.margin? props.margin : "")};
`
const SkillTitle = styled.span`
  font-size: 1.1em;
  font-weight: bold;
`
const DetailsText = styled.span`
  font-size: 0.9em;
  font-weight: normal;
`
