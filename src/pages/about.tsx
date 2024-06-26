import * as React from "react";
import styled from "styled-components";
import useStyledTheme from "helpers/hooks/usestyledtheme";
import { useStaticQuery, graphql } from "gatsby";
import { PageLabel } from "components/general/pagelabel/";
import { MTAIcon } from "components/decorative/mtaicon/";
import { useSocialMediaLinks } from "helpers/hooks/queries/";
import { SkillCard } from "components/skillcard/";
import { COLORS } from "styles/styles";
import { SEO } from "components/seo/";
import SectionLabel from "components/general/sectionlabel/sectionlabel";
import { GithubRepoCards } from "components/landing/githubrepocards";
import { AspectRatioBox } from "components/general/aspectratiobox/";
import { GatsbyImage } from "gatsby-plugin-image";
const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about_image_cropped.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);

  return (
    <PortraitImage
      alt="self portrait"
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};
function PageContent() {
  const siteQuery = useSocialMediaLinks();

  const githubProfileLink = siteQuery.github;
  const linkedInProfileLink = siteQuery.linkedin;
  const { aboutPageAccent, sevenBlack, siteBackground } =
    useStyledTheme().colors;

  return (
    <>
      <div>
        <PageLabel margin={"0px 0px 40px 0px"} accentColor={aboutPageAccent}>
          About Me
        </PageLabel>
        <h3>Hello, my name is Jesús.</h3>
        <p>
          {`I was born and raised in Silicon Valley, a literal rock’s throw from
          Facebook HQ and right in the thick of the 2000s tech boom. That
          certainly made an impression, as I am now a graduate of San
          Francisco State University where I earned a B.S. in Computer Science.`}
        </p>
        <p>
          {` During my time in university, I worked with a wide variety of
          technologies: I used Swift and Google's Places API to create Dónde, an
          iOS app; utilized React to create an E-commerce website for SFSU
          students to resell their old (absurdly-priced) textbooks; and created
          a progressive web app built with ChessJS, GatsbyJS, Node.js, AWS, and
          MongoDB. `}
        </p>
        <p>
          After graduating, I interned at the creative video-sharing start-up,
          Trueclap, where I leveraged React and GatsbyJS to create beautiful UI
          elements for the modern web.
        </p>
        <p>
          At LaunchDarkly, I focused on UI testing and maintaining front end
          code quality. This ranged from writing custom tooling for Storybook,
          implementing monitoring for performance, to overhauling existing
          components to leverage modern code practices. I also worked with a
          team to rapidly iterate and address accessibility requirements across
          the entire product.
        </p>
        <p>
          When I am not programming, I am usually busy restoring hi-fi receivers
          or other electronics. I have spent a lot of my free time bringing an
          old Marantz 2230 back from the grave, rescuing a La Pavoni from the
          side of the road, maintaining my vintage computers, and restoring
          vintage Bang & Olufsen gear.
        </p>
        <p>
          Want to build something great together? Feel free to contact me at{" "}
          <b>
            <a style={{ color: `inherit` }} href="mailto:jgarnicacc@gmail.com">
              jgarnicacc@gmail.com
            </a>
          </b>
          .
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
        <GithubRepoCards
          textColor={sevenBlack}
          backgroundColor={siteBackground}
          accentColor={aboutPageAccent}
        />
      </ReposContainer>

      <SectionLabel margin={"0 0 1.45rem 0px"} accentColor={aboutPageAccent}>
        Social
      </SectionLabel>
      <p>
        Feel free to connect with me on LinkedIn or look at the rest of my work
        on GitHub!
      </p>
      <div>
        <StyledLink title="LinkedIn" href={linkedInProfileLink}>
          <MTAIcon size={40} text="LI" />
        </StyledLink>
        <StyledLink title="GitHub" href={githubProfileLink}>
          <MTAIcon size={40} text="GH" />
        </StyledLink>
      </div>
    </>
  );
}
const AboutPage = () => {
  return (
    <>
      <SEO
        title="About"
        description="Hello, my name is Jesus Garnica and this is my about page!"
      />
      <FlexLayout>
        <PortraitDiv>
          <AspectRatioBox width="100%" maxWidth="400px">
            <AboutImage />
          </AspectRatioBox>
        </PortraitDiv>
        <PageContent />
      </FlexLayout>
    </>
  );
};

export default AboutPage;
const GenerateSkillCards = (cardMargin?: string) => {
  const displayMargins = cardMargin ? cardMargin : "";

  const skills = [
    { skill: "Design Systems", details: "Software Development" },
    { skill: "CSS", details: "Front End Web Development" },
    { skill: "React", details: "Front End Web Development" },
    { skill: "NextJS", details: "Front End Web Development" },
    { skill: "React Query", details: "Front End Web Development" },
    { skill: "Storybook", details: "Front End Web Development" },
    { skill: "Typescript", details: "Software Development" },
    { skill: "Cypress", details: "E2E Testing" },
    { skill: "Jest", details: "Unit Testing" },
    { skill: "Python", details: "Software Development" },
    { skill: "Node.js", details: "Web Development" },
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

const PortraitDiv = styled.div`
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

const PortraitImage = styled(GatsbyImage)`
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
