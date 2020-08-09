import React from "react";
import { navigate } from "gatsby";
import useTheme from "helpers/hooks/usestyledtheme";
import styled from "styled-components";
import TypedInEffect from "components/texteffects/typedindev";
import Layout from "components/layout";
import HeroButton from "../components/general/buttons/herobutton";
import SEO from "components/seo";
import PageLabel from "components/general/pagelabel/pagelabel";
function PageContents() {
  const homePageAccent = useTheme().colors.homePageAccent;
  return (
    <FlexContainer>
      <PageLabel accentColor={homePageAccent}>Hello and Welcome</PageLabel>
      <DetailsTextDiv>
        <TypeEffectText>
          <TypedInEffect
            cursorColor={homePageAccent}
            speed={0.04}
            message="Developer For Hire."
          />
        </TypeEffectText>
        <p>
          My name is Jesus Garnica, welcome to my website! I am a passionate
          developer in the bay area.
        </p>
        <p>
          I just graduated from San Francisco State University with a B.S. in
          Computer Science. I have experience with a wide variety of
          technologies.
        </p>
        <p>
          If you would like to learn more about me just click below to get to my
          about page. Also, feel free to take a look at my blog where I will be
          soon be making posts about tech, hi-fi, vintage computers, and other
          various subjects.
        </p>
        <HeroButton
          aria-label="Go To About Page"
          mainColor={homePageAccent}
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault();
            navigate("/about/");
          }}
        >
          Learn More About Me
        </HeroButton>
        <HeroButton
          aria-label="Go To Blog"
          mainColor={homePageAccent}
          margin={"20px 0px"}
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault();
            navigate("/blog/");
          }}
        >
          Read About What I Am Up To
        </HeroButton>
      </DetailsTextDiv>
    </FlexContainer>
  );
}
const IndexPage: React.ReactNode = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <PageContents />
    </Layout>
  );
};

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
