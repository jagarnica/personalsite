import React from "react"
import styled from "styled-components"

interface skillCardProps {
  skill: string
  details: string
}
/**
 * @name SkillCard
 * @param {string} skill 
 * @param {string} details 
 */
const SkillCard: React.FC<skillCardProps> = ({ skill, details }) => {
  return (
    <CardContainer>
      <SkillTitle>{skill}</SkillTitle>
      <DetailsText>{details}</DetailsText>
    </CardContainer>
  )
}
export default SkillCard

const CardContainer = styled.div`
  width: 250px;
  height: auto;
  overflow: hidden;
  border: 2px solid black;
  border-radius: 2px;

  display: flex;
  flex-direction: column;
  padding: 10px;
`
const SkillTitle = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`
const DetailsText = styled.span`
  font-size: 1em;
  font-weight: normal;
`
