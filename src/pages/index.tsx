import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import TypedInEffect from "components/texteffects/typedindev";
import Layout from "components/layout";
import * as GLOBAL_STYLES from "styles/styles";
import HeroButton from "../components/general/buttons/herobutton";
import SEO from "components/seo";
const IndexPage: React.ReactNode = () => (
  <Layout>
    <SEO title="Home" />

    <FlexContainer>
      <IntroTextDiv>
        <span>Hello and Welcome.</span>
      </IntroTextDiv>
      <DetailsTextDiv>
        <TypeEffectText>
          <TypedInEffect
            cursorColor={GLOBAL_STYLES.COLORS.homePageAccent}
            speed={0.08}
            message="Developer For Hire."
          />
        </TypeEffectText>
        <p>
          My name is Jesus Garnica, welcome to my website. I am a developer in
          the bay area.
        </p>
        <p>
          I just graduated from San Francisco State University with a B.S. in
          Computer Science. I have experience with a wide variety of
          technologies.
        </p>
        <HeroButton
          mainColor={GLOBAL_STYLES.COLORS.homePageAccent}
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault();
            navigate("/about/");
          }}
        >
          Learn More About Me
        </HeroButton>
        <HeroButton
          mainColor={GLOBAL_STYLES.COLORS.homePageAccent}
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
  </Layout>
);

export default IndexPage;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
`;

const IntroTextDiv = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  margin-top: 0px;
  font-family: "IBM Plex", ${GLOBAL_STYLES.FONT_FAMILY};
  font-size: 5em;
  font-weight: normal;
  align-content: center;
  padding: 60px 0px;
  border-top: 2px solid ${GLOBAL_STYLES.COLORS.homePageAccent};
  border-bottom: 2px solid ${GLOBAL_STYLES.COLORS.homePageAccent};

  line-height: 1em;
  max-width: 100%;
  @media only screen and (max-width: 600px) {
    font-size: 4em;
  }
`;
const DetailsTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.45em;
  flex: 1;
`;

const TypeEffectText = styled.h1`
  font-weight: normal;
  font-family: ${GLOBAL_STYLES.FONT_FAMILY};
`;
