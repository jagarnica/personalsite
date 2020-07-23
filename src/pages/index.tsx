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
        <span>
          hello and
          <ColorTextSpan>
            <br />
            welcome.
          </ColorTextSpan>
        </span>
      </IntroTextDiv>
      <DetailsTextDiv>
        <h1>
          <TypedInEffect
            cursorColor={GLOBAL_STYLES.COLORS.homePageAccent}
            speed={0.08}
            message="Developer For Hire."
          />
        </h1>
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
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault();
            navigate("/about/");
          }}
        >
          Learn More About Me
        </HeroButton>
        <HeroButton
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
const ColorTextSpan = styled.span`
  color: ${GLOBAL_STYLES.COLORS.homePageAccent};
`;
const IntroTextDiv = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  margin-top: 0px;
  font-family: "IBM Plex Mono", ${GLOBAL_STYLES.FONT_FAMILY};
  font-size: 5em;
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
