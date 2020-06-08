import React from "react";
import styled, { keyframes } from "styled-components";
interface Props {
  message: string; // This is the message that we will display
  speed?: number; // This sets how fast display the message. The higher the number the faster
}

/**
 * @name TypedInDev
 * @description Takes in a string and displays it as if it were being typed in.
 * @param {string} message This is what message will be displayed as it were being typed in.
 * @param {number} speed
 * @returns React Element
 */
const TypedInDev: React.FC<Props> = ({ message, speed }) => {
  const splitUpMessage: string[] = message.split("");
  let totalDelay = 0;
  const lettersGenerated = splitUpMessage.map((letter, index) => {
    const speedFactor = speed ? speed : 16; // This is the default setting
    const delayTime = Number((index / speedFactor).toFixed(3)); // This sets the delay speed
    totalDelay = delayTime;
    return (
      <SingleLetter delay={delayTime} key={index}>
        {letter}
      </SingleLetter>
    );
  });
  return (
    <span>
      {lettersGenerated}
      <CursorElement delay={totalDelay}>|</CursorElement>
    </span>
  );
};

export default TypedInDev;
const AppearAnimation = keyframes`
0% { 
  opacity:0;
  transform:scale(0);
}
100% {
  opacity:1;
  transform:scale(1);
}
`;
interface SingleLetterProps {
  delay?: number;
}
const SingleLetter = styled.span<SingleLetterProps>`
  opacity: 0;
  transform: scale(0);
  animation: ${AppearAnimation} 0s ease forwards;
  animation-delay: ${props => (props.delay ? props.delay + "s" : "0s")};
`;
const BlinkAnimation = keyframes`
from, to {
  opacity: 0;
}
50% {
  opacity: 1;
}
`;
const CursorElement = styled.span<SingleLetterProps>`
  font-weight: 100;
  color: black;
  opacity: 0;
  animation: ${BlinkAnimation} 1s step-end infinite;
  animation-delay: ${props => (props.delay ? props.delay + `s` : `0s`)};
`;
