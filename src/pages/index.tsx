import * as React from "react";
import { navigate } from "gatsby";
import useTheme from "helpers/hooks/usestyledtheme";
import styled from "styled-components";
import { TypedInDev } from "components/texteffects/";
import HeroButton from "../components/general/buttons/herobutton";
import { SEO } from "components/seo/";
import { PageLabel } from "components/general/pagelabel/";
function IndexPage(): JSX.Element {
  const homePageAccent = useTheme().colors.homePageAccent;
  return (
    <>
      <SEO title="Home" description="Welcome to the home page of my website." />
      <FlexContainer>
        <PageLabel accentColor={homePageAccent}>Hello and Welcome</PageLabel>
        <DetailsTextDiv>
          <TypeEffectText>
            <TypedInDev
              cursorColor={homePageAccent}
              speed={0.04}
              message="Developer For Hire."
            />
          </TypeEffectText>
          <p>
            My name is Jesús Garnica, welcome to my website! I am a passionate
            frontend developer born and raised in the Bay Area.
          </p>
          <p>
            I have experience with a wide variety of technologies, both digital
            and analog. Check out my About page to learn more about me, and
            check back soon for new blog posts about tech, hi-fi, vintage
            computers, and other subjects.
          </p>
          <HeroButton
            aria-label="Go To About Page"
            mainColor={homePageAccent}
            onClick={(
              event: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              event.preventDefault();
              navigate("/about/");
            }}
          >
            Learn More About Me
          </HeroButton>
          <HeroButton
            aria-label="Go To Blog"
            mainColor={homePageAccent}
            margin={"20px 0px 0px 0px"}
            onClick={(
              event: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              event.preventDefault();
              navigate("/blog/");
            }}
          >
            Read About What I’m Up To
          </HeroButton>
        </DetailsTextDiv>
      </FlexContainer>
    </>
  );
}

export default IndexPage;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
`;

const DetailsTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.45em;
  flex: 1;
`;

const TypeEffectText = styled.h1`
  font-weight: normal;
  font-family: ${props =>
    props.theme.baseFontFamily ? props.theme.baseFontFamily : ``};
`;
