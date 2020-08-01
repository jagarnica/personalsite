import React from "react";
import Button from "./button";
import ButtonType from "types/button";
import styled from "styled-components";
/**
 * @name HeroButton This is a large button that also takes in all the regular props for a button.
 * @param {React.Node} children This could be anything like text or an icon.
 * @returns Button
 */
const HeroButton: ButtonType = ({
  width = "312px",
  padding = "8px",
  children,
  ...props
}) => {
  return (
    <StyledButton width={width} padding={padding} {...props}>
      {children}
    </StyledButton>
  );
};

export default HeroButton;
const StyledButton = styled(Button)`
  font-weight: normal;
`;
