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
export const TypedInDev: React.FC<Props> = ({
  message,
  speed,
  cursorColor,
}) => {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const speedFactor = speed * 1000; // we want to do this in terms of seconds
  const amountOfCharacters = message.split("").length;
  // This is our timer for getting the letters to display.
  useEffect(() => {
    const letterTimer = setTimeout(() => {
      if (visibleCharacters < amountOfCharacters) {
        setVisibleCharacters(visibleCharacters + 1);
      }
    }, speedFactor);
    return () => {
      // Clear our timer just incase.
      clearTimeout(letterTimer);
    };
  }, [visibleCharacters]);
  // These are the letters that are generated
  const lettersGenerated = message
    .substr(0, visibleCharacters)
    .split("")
    .map((letter, index) => {
      return <SingleLetter key={index}>{letter}</SingleLetter>;
    });
  return (
    <AnimatedTextContainedSpan
      className={visibleCharacters > 0 ? "" : "blank"}
      cursorColor={cursorColor}
    >
      {lettersGenerated}
    </AnimatedTextContainedSpan>
  );
};
TypedInDev.defaultProps = {
  speed: 0.1,
  cursorColor: `black`,
};

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
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  &.blank {
    color: transparent;
    &:before {
      content: "|";
    }
    width: 0;
  }
  &:after {
    content: "|";
    line-height: inherit;
    color: ${props => (props.cursorColor ? props.cursorColor : ``)};
    opacity: 0;
    top: 0;
    position: absolute;
    right: 0;
    transform: translate3d(75%, -10%, 0);
    transform-style: preserve-3d;
    animation: ${BlinkAnimation} 0.8s ease infinite;
  }
`;
