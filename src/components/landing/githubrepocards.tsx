import React from "react";
import styled from "styled-components";
import { COLORS } from "styles/styles";
import MTAIcon from "components/decorative/mtaicon/mtaicon";
import GithubRepoData from "helpers/hooks/queries/githubrepos";
interface GitHubRepoProps {
  margin?: string; // this should be typed in like a regular margin css property
  textColor?: string;
  backgroundColor?: string;
  accentColor?: string;
}

const ProgrammingLanguageLogo: React.FC<{
  lang?: string;
}> = ({ lang = "" }) => {
  let _langLowercase = "";
  try {
    _langLowercase = lang.toLocaleLowerCase();
  } catch (e) {
    return <span></span>;
  }
  let iconText = "";
  let textSize = "";
  switch (_langLowercase) {
    case "react":
      iconText = "react";
      break;
    case "c++":
      iconText = "C++";
      break;
    case "python":
      iconText = "py";
      break;

    case "javascript":
      iconText = "js";
      break;

    case "rust":
      iconText = "rs";
      break;
    case "ruby":
      iconText = "rb";
      break;
    case "typescript":
      iconText = "ts";
      break;
    case "swift":
      textSize = "0.65em";
      iconText = "swift";
      break;
    case "css":
      iconText = "CSS";
      break;
    case "html":
      iconText = "html";
      break;
    case "java":
      textSize = "0.80em";
      iconText = "java";
      break;
  }
  return (
    <MTAIcon
      fontSize={textSize}
      padding="5%"
      title={lang}
      size={20}
      text={iconText}
    />
  );
};

const GithubRepoCards: React.FC<GitHubRepoProps> = ({
  margin,
  textColor = "white",
  accentColor,
  backgroundColor = "black",
}) => {
  const data = GithubRepoData();

  if (!data) {
    return null;
  }
  const cards: React.ReactNode = data.map(repo => {
    const languages = repo.languages.nodes;
    const url = repo.url ? repo.url : ``;

    const languagesText = languages.map(lang => {
      const languageName: string = lang.name;
      const LogoFound = (
        <ProgrammingLanguageLogo key={lang.name} lang={languageName} />
      );

      return LogoFound;
    });
    const keyName: string = repo.name ? repo.name : url;
    return (
      <ProjectCard
        accentColor={accentColor}
        textColor={textColor}
        backgroundColor={backgroundColor}
        margin={margin}
        key={keyName}
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
  return cards;
};
export default GithubRepoCards;

const ProjectCard = styled.div<GitHubRepoProps>`
  overflow: hidden;
  height: 100%;
  cursor: default;
  border-radius: 0px;
  color: ${props => (props.textColor ? props.textColor : ``)};
  transition: 0.3s ease;
  background: ${props => (props.backgroundColor ? props.backgroundColor : ``)};
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLORS.sevenBlack};
  border-top: 14px solid
    ${props => (props.accentColor ? props.accentColor : ``)};
  padding: 10px;
  margin: ${props => (props.margin ? props.margin : "")};
`;
const Title = styled.div`
  font-size: 1.3em;
  display: flex;
  background: ${COLORS.sevenBlack};

  font-weight: bold;
`;
const RepoLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${COLORS.siteBackground};
  text-transform: uppercase;
  padding: 10px 3px;
  font-weight: 900;
  transition: color 0.2s ease;
  &:hover {
  }
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
