import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import TypedInEffect from "components/texteffects/typedindev";
import Layout from "components/layout";
import * as GLOBAL_STYLES from "styles/styles";
import HeroButton from "../components/general/buttons/herobutton";
import SEO from "components/seo";
import PageLabel from "components/general/pagelabel/pagelabel";
const IndexPage: React.ReactNode = () => (
  <Layout>
    <SEO title="Home" />

    <FlexContainer>
      <PageLabel accentColor={GLOBAL_STYLES.COLORS.homePageAccent}>
        Hello and Welcome
      </PageLabel>
      <DetailsTextDiv>
        <TypeEffectText>
          <TypedInEffect
            cursorColor={GLOBAL_STYLES.COLORS.homePageAccent}
            speed={0.04}
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
