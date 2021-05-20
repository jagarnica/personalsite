import React from "react";
import styled from "styled-components";
import { COLORS } from "styles/styles";
import { MTAIcon } from "components/decorative/mtaicon/";
import { useGitHubRepositories } from "helpers/hooks/queries/";
export interface GitHubRepoProps {
  margin?: string; // this should be typed in like a regular margin css property
  textColor?: string;
  backgroundColor?: string;
  accentColor?: string;
}
type GitLanguageObj = {
  id: string;
  name: string;
  color: string;
};
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
      padding="24px"
      title={lang}
      size={20}
      text={iconText}
    />
  );
};

const SwitchRepoName = function (
  id: string | null,
  name: string | null
): string {
  switch (id) {
    case "MDEwOlJlcG9zaXRvcnkyNjg5OTg5NjM=":
      return "Chess";
    case "MDEwOlJlcG9zaXRvcnkyODQzNjMwMjA=":
      return "Dónde";
    case "MDEwOlJlcG9zaXRvcnkyNjY0NDM3NTE=":
      return "PersonalSite";
    default:
      return name ? name : ``;
  }
};
export function GithubRepoCards({
  margin,
  textColor = "white",
  accentColor,
  backgroundColor = "black",
}: GitHubRepoProps): React.ReactElement | null {
  const data = useGitHubRepositories();

  if (!data) {
    return null;
  }
  const cards: React.ReactNode = data.map(repo => {
    const languages = repo.languages.nodes;
    const url = repo.url ? repo.url : ``;

    const languagesText = languages.map((lang: GitLanguageObj) => {
      const languageName: string = lang.name;
      const LogoFound = (
        <ProgrammingLanguageLogo key={lang.name} lang={languageName} />
      );

      return LogoFound;
    });
    const nameToDisplay = SwitchRepoName(repo.id, repo.name);
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
            {nameToDisplay}
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
  if (cards) {
    return cards as React.ReactElement;
  }
  return null;
}

const ProjectCard = styled.div<GitHubRepoProps>`
  overflow: hidden;
  height: 100%;
  cursor: default;
  border-radius: 0px;
  color: ${props => (props.textColor ? props.textColor : ``)};

  background: ${props => (props.backgroundColor ? props.backgroundColor : ``)};
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLORS.sevenBlack};
  border-top: 14px solid
    ${props => (props.accentColor ? props.accentColor : ``)};
  padding: 0px;
  margin: ${props => (props.margin ? props.margin : "")};
`;
const Title = styled.div`
  font-size: 1.3em;
  display: flex;
  background: ${COLORS.sevenBlack};
  border-bottom: 1px solid ${COLORS.sevenBlack};
  font-weight: bold;
`;
const RepoLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${COLORS.siteBackground};
  padding: 7px 10px;
  font-weight: 800;
  transition: color 0.2s ease;
`;

const DescriptionText = styled.span`
  font-size: 0.9em;
  font-weight: normal;
  padding: 10px;
`;
const LangaugesContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid transparent;
  border-bottom: 1px solid ${COLORS.sevenBlack};
  div {
    margin-right: 4px;
  }
  margin: 0px 0px 6px 0px;
`;
