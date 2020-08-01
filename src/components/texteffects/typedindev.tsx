import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
interface Props {
  message: string; // This is the message that we will display
  speed: number; // This sets how fast display the message. The higher the number the faster
  cursorColor?: string;
}

/**
 * @name TypedInDev
 * @description Takes in a string and displays it as if it were being typed in.
 * @param {string} message This is what message will be displayed as it were being typed in.
 * @param {string} cursorColor This sets the cursor color, the default is black;
 * @param {number} speed This a the number in terms of seconds between letters showing up.
 * @returns React Element
 */
const TypedInDev: React.FC<Props> = ({ message, speed, cursorColor }) => {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const speedFactor = speed * 1000; // we want to do this in terms of seconds
  const splitUpMessage: string[] = message.split("");
  const amountOfCharacters = splitUpMessage.length;
  useEffect(() => {
    const letterTimer = setTimeout(() => {
      if (visibleCharacters < amountOfCharacters) {
        setVisibleCharacters(visibleCharacters + 1);
      }
    }, speedFactor);
    return () => {
      clearTimeout(letterTimer);
    };
  }, []);
  useEffect(() => {
    const letterTimer = setTimeout(() => {
      if (visibleCharacters < amountOfCharacters) {
        setVisibleCharacters(visibleCharacters + 1);
      }
    }, speedFactor);
    return () => {
      clearTimeout(letterTimer);
    };
  }, [visibleCharacters]);

  const lettersGenerated = splitUpMessage.map((letter, index) => {
    if (index < visibleCharacters) {
      return <SingleLetter key={index}>{letter}</SingleLetter>;
    }
    return null;
  });
  return (
    <AnimatedTextContainedSpan cursorColor={cursorColor}>
      {visibleCharacters > 0 ? lettersGenerated : <span>{""}</span>}
    </AnimatedTextContainedSpan>
  );
};
TypedInDev.defaultProps = {
  speed: 0.1,
  cursorColor: `black`,
};
export default TypedInDev;
const AppearAnimation = keyframes`
0% { 
  opacity:0;
 
}
100% {
  opacity:1;
 
}
`;
interface SingleLetterProps {
  delay?: number;
  cursorColor?: string;
}
const SingleLetter = styled.span<SingleLetterProps>`
  opacity: 0;
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
const AnimatedTextContainedSpan = styled.span<SingleLetterProps>`
  position: relative;
  display: inline-block;
  &:after {
    content: "|";
    line-height: inherit;
    color: ${props => (props.cursorColor ? props.cursorColor : ``)};
    opacity: 0;
    top: 0;
    will-change: opacity;
    position: absolute;
    right: 0;
    transform: translate(75%, -10%);
    animation: ${BlinkAnimation} 0.8s ease infinite;
  }
`;
