import * as React from "react";
import Button from "./button";
import { ButtonProps } from "./button";
import styled from "styled-components";

/**
 * @name HeroButton This is a large button that also takes in all the regular props for a button.
 * @param {React.Node} children This could be anything like text or an icon.
 * @returns Button
 */
const HeroButton = ({
  width = "312px",
  padding = "8px",
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton width={width} padding={padding} {...props}>
      {children}
    </StyledButton>
  );
};

export default HeroButton;
const StyledButton = styled(Button)`
  font-weight: normal;
  &:focus-visible {
    box-shadow: inset 0 0 0 1px black;
  }
`;
