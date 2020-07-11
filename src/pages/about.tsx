import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import * as Buttons from "components/general/buttons";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import SkillCard from "../components/skillcard/skillcard";
import * as GLOBAL_STYLES from "styles/styles";
import SEO from "../components/seo";
import Projects from "components/landing/githubrepocards";
const SocialMediaLinks = () => {
  const link = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          github
          linkedin
        }
      }
    }
  `);
  return link;
};
const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about_image_cropped.jpg" }) {
        childImageSharp {
          fixed(width: 450, height: 450, quality: 95, fit: CONTAIN) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <PotraitImage
      backgroundColor={true}
      fixed={data.placeholderImage.childImageSharp.fixed}
    />
  );
};

const AboutPage: React.ReactNode = () => (
  <Layout>
    <SEO title="About" />
    <GridLayout>
      <PotraitDiv>
        <AboutImage />
      </PotraitDiv>

      <div>
        <h1>Hello, my name is Jesus Garnica.</h1>
        <p>
          I recently just graduated from San Francisco State University with a
          B.S. in Computer Science. I finished working as an intern at Trueclap
          where I leveraged React to create multiple UI elements made for the
          modern web.
        </p>
        <p>
          During my time at SFSU I worked with wide variety of technologies. I
          used Swift and Google&apos;s Places API to create an iOS app. I worked
          with React on two seperate projects with a team. One was to get an
          E-commerce website built for SFSU students. The latter was a web app
          built with ChessJS, NodeJS, AWS, and MongoDB to allow users to play
          games of chess with each other online.
        </p>
        <p>
          When I am not programming, I am usually busy restoring vintage hi-fi
          recievers or other electronics. I have spent a lot free time bringing
          an old Marantz 2230 back alive from the grave, making a La Pavoni
          Espresso machine look better than ever, and restoring other various
          electronics.
        </p>
        <p>
          Want to build something great together? Feel free to contact me at{" "}
          <b>jgarnicacc@gmail.com</b>.
        </p>
        <h1>Skills</h1>
        <CardsContainer>{GenerateSkillCards()}</CardsContainer>
      </div>
      <h1>My Github Repos</h1>
      <StyledLink href={SocialMediaLinks.github} target="_blank" rel="noopener">
        <Buttons.HeroButton>View all</Buttons.HeroButton>
      </StyledLink>

      <ReposContainer>
        <Projects
          textColor={GLOBAL_STYLES.COLORS.lightWhite}
          backgroundColor={GLOBAL_STYLES.COLORS.aboutPageAccent}
        />
      </ReposContainer>
    </GridLayout>
  </Layout>
);

export default AboutPage;
const GenerateSkillCards = (cardMargin?: string) => {
  const displayMargins = cardMargin ? cardMargin : "";
  const skills = [
    { skill: "C++", details: "Software Development" },
    { skill: "CSS", details: "Front End Web Development" },
    { skill: "ReactJS", details: "Front End Web Development" },
    { skill: "Apollo GraphQl", details: "Database Query" },
    { skill: "Swift", details: "Software Development" },
    { skill: "Typescript", details: "Software Development" },
    { skill: "Selenium", details: "Testing" },
    { skill: "Jest", details: "Testing" },
    { skill: "Python", details: "Software Development" },
    { skill: "Javascript", details: "Web Development" },
    { skill: "ThreeJS", details: "Web Animation and Graphics" },
    { skill: "Java", details: "Software Development" },
  ];
  return skills.map(currentSkill => {
    return (
      <SkillCard
        margin={displayMargins}
        skill={currentSkill.skill}
        details={currentSkill.details}
        key={currentSkill.skill}
        textColor={GLOBAL_STYLES.COLORS.lightWhite}
        backgroundColor={GLOBAL_STYLES.COLORS.aboutPageAccent}
      />
    );
  });
};
const CardsContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-items: center;
  grid-gap: 1rem;
  max-width: 100%;
`;

const ReposContainer = styled(CardsContainer)`
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  align-items: flex-start;
  grid-gap: 0.5rem;
`;
const StyledLink = styled.a`
  text-decoration: none;
`;
const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: center;
  grid-row-gap: 1rem;
`;
const PotraitDiv = styled.div`
  margin: 0 auto;
`;

const PotraitImage = styled(Img)`
  border-style: solid;
  border: 1px;
  border-color: transparent;
  border-radius: 50%;
  overflow: hidden;
`;
