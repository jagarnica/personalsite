import React from "react";
import styled from "styled-components";

interface HeroContainerProps {
  minHeight?: number;
  heroBackground: React.ReactNode;
}

const HeroContainer: React.FC<HeroContainerProps> = ({
  children,
  minHeight,
  heroBackground,
}) => {
  return (
    <>
      <HeroBackgroundDiv minHeight={minHeight}>
        {heroBackground}
      </HeroBackgroundDiv>
      <HeroDiv>{children}</HeroDiv>
    </>
  );
};

export default HeroContainer;

const HeroDiv = styled.div`
  position: relative;
  max-width: 100%;
`;

const HeroBackgroundDiv = styled.div<{minHeight?: number;maxHeight?: number;}>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  max-height: ${props => (props.maxHeight ? props.maxHeight + `px` : ``)};
  min-height: ${props => (props.minHeight ? props.minHeight + `px` : ``)};
`;
