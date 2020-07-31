import React from "react";
import styled from "styled-components";
import Layout from "components/layout";
import { useStaticQuery, graphql } from "gatsby";
import PageLabel from "components/general/pagelabel/pagelabel";
import Img from "gatsby-image";
import SocialMediaQuery from "helpers/hooks/queries/socialmedia";
import SkillCard from "components/skillcard/skillcard";
import { LinkedInLogo, GitHubLogo } from "images/icons/";
import { COLORS } from "styles/styles";
import SEO from "components/seo";
import SectionLabel from "components/general/sectionlabel/sectionlabel";
import Projects from "components/landing/githubrepocards";
import AspectRatioBox from "components/general/aspectratiobox/aspectratiobox";
const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about_image_cropped.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 450, quality: 95) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <PotraitImage
      backgroundColor={true}
      fluid={data.file.childImageSharp.fluid}
    />
  );
};

const AboutPage: React.ReactNode = () => {
  const siteQuery = SocialMediaQuery();
  const { aboutPageAccent } = COLORS;
  const githubProfileLink = siteQuery.github;
  const linkedInProfileLink = siteQuery.linkedin;
  return (
    <Layout>
      <SEO title="About" />
      <FlexLayout>
        <PotraitDiv>
          <AspectRatioBox width="100%" maxWidth="500px">
            <AboutImage />
          </AspectRatioBox>
        </PotraitDiv>

        <div>
          <PageLabel margin={"0px 0px 40px 0px"} accentColor={aboutPageAccent}>
            About Me
          </PageLabel>

          <h3>Hello, my name is Jesus.</h3>

          <p>
            I recently just graduated from San Francisco State University with a
            B.S. in Computer Science. I finished working as an intern at
            Trueclap where I leveraged React to create multiple UI elements made
            for the modern web.
          </p>
          <p>
            During my time at SFSU I worked with wide variety of technologies. I
            used Swift and Google&apos;s Places API to create an iOS app. I
            worked with React on two seperate projects with a team. One was to
            get an E-commerce website built for SFSU students. The latter was a
            web app built with ChessJS, NodeJS, AWS, and MongoDB to allow users
            to play games of chess with each other online.
          </p>
          <p>
            When I am not programming, I am usually busy restoring vintage hi-fi
            recievers or other electronics. I have spent a lot free time
            bringing an old Marantz 2230 back alive from the grave, making a La
            Pavoni Espresso machine look better than ever, and restoring other
            various electronics.
          </p>
          <p>
            Want to build something great together? Feel free to contact me at{" "}
            <b>jgarnicacc@gmail.com</b>.
          </p>
          <SectionLabel
            margin={"3rem 0px 3rem 0px"}
            accentColor={aboutPageAccent}
          >
            Skills
          </SectionLabel>
          <CardsContainer>{GenerateSkillCards()}</CardsContainer>
        </div>
        <SectionLabel margin={"0px"} accentColor={aboutPageAccent}>
          Preview My GitHub
        </SectionLabel>

        <ReposContainer>
          <Projects
            textColor={COLORS.sevenBlack}
            backgroundColor={COLORS.siteBackground}
            accentColor={aboutPageAccent}
          />
        </ReposContainer>

        <SectionLabel margin={"0 0 1.45rem 0px"} accentColor={aboutPageAccent}>
          Social
        </SectionLabel>
        <p>
          Feel free to connect with me on LinkedIn or look at the rest of my
          work on GitHub!
        </p>
        <div>
          <StyledLink
            href={linkedInProfileLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInLogo />
          </StyledLink>
          <StyledLink
            href={githubProfileLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogo />
          </StyledLink>
        </div>
      </FlexLayout>
    </Layout>
  );
};

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
        textColor={COLORS.sevenBlack}
        accentColor={COLORS.aboutPageAccent}
        backgroundColor={COLORS.siteBackground}
      />
    );
  });
};
const CardsContainer = styled.div`
  display: grid;
  margin: 3rem 0px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-items: center;
  grid-gap: 1rem;
  max-width: 100%;
`;

const ReposContainer = styled(CardsContainer)`
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  align-items: flex-start;
  grid-gap: 0.5rem;
  align-self: stretch;
`;
const StyledLink = styled.a`
  text-decoration: none;
  margin-right: 10px;
`;

const PotraitDiv = styled.div`
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-bottom: 1.45rem;
  object-fit: contain;
`;

const PotraitImage = styled(Img)`
  border-style: solid;
  border: 1px;
  border-color: transparent;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
