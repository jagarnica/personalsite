import React from "react";
import styled from "styled-components"
import TypedInEffect from "../components/texteffects/typedindev";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SkillCard from "../components/skillcard/skillcard";
import WireframeVideo from "../components/threejs/wireframevideo"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      <TypedInEffect speed={15} message="Developer For Hire." />
    </h1>
    <p>
      My name is Jesus Garnica, welcome to my website. I am a developer in the
      bay area.
    </p>
    <p>
      I just graduated from San Francisco State University with a B.S. in
      Computer Science. I have experience with a wide variety of technologies.
    </p>
    <WireframeVideo/>
    <CardsContainer>{GenerateSkillCards()}</CardsContainer>
  </Layout>
);

const GenerateSkillCards = (cardMargin?: string) => {
  let displayMargins = cardMargin? cardMargin  : "";
  let skills = [
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
grid-template-columns: repeat(3, 1fr);
grid-gap: 25px;
`