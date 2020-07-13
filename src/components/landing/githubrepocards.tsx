import React from "react";
import styled from "styled-components";
import { FONT_FAMILY, COLORS } from "styles/styles";
import * as Logo from "images/icons";
import GithubRepoData from "helpers/hooks/queries/githubrepos";
interface GitHubRepoProps {
  margin?: string; // this should be typed in like a regular margin css property
  textColor?: string;
  backgroundColor?: string;
}

const ProgrammingLanguageLogo: React.FC<{
  lang?: string;
  textColor?: string;
}> = ({ lang = "", textColor = "#000000" }) => {
  let _langLowercase = "";
  try {
    _langLowercase = lang.toLocaleLowerCase();
  } catch (e) {
    return <span></span>;
  }
  switch (_langLowercase) {
    case "react":
      return <Logo.ReactLogo />;

    case "c++":
      return <Logo.CppLogo />;

    case "python":
      return <Logo.PythonLogo />;

    case "javascript":
      return <Logo.JsLogo />;
    case "rust":
      return <Logo.RustLogo />;
    case "css":
      return <Logo.CSSLogo />;
    case "html":
      return <Logo.Html5Logo />;
    case "java":
      return <Logo.JavaLogo />;
    default:
      return <LangauageDetail textColor={textColor}>{lang}</LangauageDetail>;
  }
};

const GithubRepoCards: React.FC<GitHubRepoProps> = ({
  margin,
  textColor,
  backgroundColor,
}) => {
  const data = GithubRepoData();

  if (!data) {
    return <></>;
  }
  return data.map(repo => {
    const languages = repo.languages.nodes;
    const url = repo.url ? repo.url : ``;

    const languagesText = languages.map(lang => {
      const color = lang.color ? lang.color : ``;
      const languageName = lang.name;
      const LogoFound = (
        <ProgrammingLanguageLogo
          key={lang.name}
          textColor={color}
          lang={languageName}
        />
      );

      return LogoFound;
    });
    return (
      <ProjectCard
        textColor={textColor}
        backgroundColor={backgroundColor}
        margin={margin}
        key={repo.name}
      >
        <Title>
          <RepoLink href={url} target="_blank" rel="noopener">
            {repo.name}
          </RepoLink>
        </Title>
        <LangaugesContainer>{languagesText}</LangaugesContainer>
        {repo.description ? (
          <DescriptionText>{repo.description}</DescriptionText>
        ) : (
          <></>
        )}
      </ProjectCard>
    );
  });
};
export default GithubRepoCards;
GithubRepoCards.defaultProps = {
  backgroundColor: `black`,
  textColor: `white`,
};
const ProjectCard = styled.div<GitHubRepoProps>`
  overflow: hidden;
  height: 100%;
  border: 1px solid transparent;
  cursor: default;
  border-radius: 0px;
  color: ${props => (props.textColor ? props.textColor : ``)};
  transition: 0.3s ease;
  background: ${props => (props.backgroundColor ? props.backgroundColor : ``)};
  display: flex;
  flex-direction: column;

  padding: 10px;
  margin: ${props => (props.margin ? props.margin : "")};
`;
const Title = styled.div`
  font-size: 1.3em;
  display: flex;
  font-weight: bold;
`;
const RepoLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease;
  &:hover {
    color: white;
  }
`;
const LangauageDetail = styled.div<GitHubRepoProps>`
  font-size: 0.8em;
  margin: 0;
  font-family: "IBM Plex Mono", ${FONT_FAMILY};
  display: flex;
  max-height: 24px;
  align-items: center;
  color: ${props => (props.textColor ? props.textColor : ``)};
  border-radius: 0px;
  padding: 0px 12px;
  background: ${COLORS.darkGrey};
  margin-right: 4px;
`;
const DescriptionText = styled.span`
  font-size: 0.9em;
`;
const LangaugesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  * {
    margin-right: 4px;
  }
  margin: 6px 0px;
`;
