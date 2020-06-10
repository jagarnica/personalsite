import React, { ReactNode } from "react";
import styled from "styled-components";
import TypedInEffect from "../components/texteffects/typedindev";
import Layout from "../components/layout";
import * as GLOBAL_STYLES from "../styles/styles";
import SEO from "../components/seo";
import SkillCard from "../components/skillcard/skillcard";
import WireframeVideo from "../components/threejs/wireframevideo";
import HeroContainer from "../components/general/herocontainer/herocontainer";
const CURSOR_ELEMENT_COLOR = `hsl(1, 85%, 65%)`;
const IndexPage: ReactNode = () => (
  <Layout>
    <SEO title="Home" />
    <HeroContainer minHeight={600} heroBackground={<div />}>
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
              cursorColor={CURSOR_ELEMENT_COLOR}
              speed={15}
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
        </DetailsTextDiv>
      </FlexContainer>
    </HeroContainer>
  </Layout>
);

const GenerateSkillCards = (cardMargin?: string) => {
  const displayMargins = cardMargin ? cardMargin : "";
  const skills = [
    { skill: "C++", details: "Software Development" },
    { skill: "ReactJS", details: "Front End Web Development" },
    { skill: "Apollo GraphQl", details: "Database Query" },
    { skill: "Swift", details: "Software Development" },
  ];
  return skills.map(currentSkill => {
    return (
      <SkillCard
        margin={displayMargins}
        skill={currentSkill.skill}
        details={currentSkill.details}
        key={currentSkill.skill}
      />
    );
  });
};

export default IndexPage;

const CardsContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-items: center;
  grid-gap: 1rem;
  max-width: 100%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ColorTextSpan = styled.span`
  color: hsl(1, 85%, 65%);
`;
const IntroTextDiv = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  margin-top: 100px;
  font-family: "IBM Plex Mono", ${GLOBAL_STYLES.FONT_FAMILY};
  font-size: 5em;
  line-height: 1em;
`;
const DetailsTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
