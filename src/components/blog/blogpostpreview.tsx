import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

interface BlogPostPreviewProps {
  title: string;
  description?: string;
  date: string;
  labels: Array<string>;
  accentColor: string;
  postUrl: string;
}
/**
 * @name BlogPostPreview
 * @description Displays a card preview of a blog post. All props are REQUIRED expect for the description.
 * @prop {string} title
 * @prop {string} description
 * @prop {string} date
 * @prop {string[]} labels
 * @prop {string} postUrl
 * @prop {string} accentColor
 * @returns React.ReactElement
 */
function BlogPostPreview({
  title,
  description = "",
  date,
  labels,
  postUrl,
  accentColor,
}: BlogPostPreviewProps): React.ReactElement {
  function handleUserLinkClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    event.preventDefault();
    event.stopPropagation();
    navigate(postUrl);
  }
  const labelsGen = labels.map(labelName => {
    return <LabelText key={labelName}>{labelName}</LabelText>;
  });
  return (
    <PreviewItemContainer accentColor={accentColor}>
      <AccentColorBar accentColor={accentColor} />
      <ContentContainer>
        <TitleDisplay onClick={handleUserLinkClick}>{title}</TitleDisplay>
        <LabelsContainer>{labelsGen}</LabelsContainer>
        <DateText>{date}</DateText>
        <DescriptionText>{description}</DescriptionText>
      </ContentContainer>
    </PreviewItemContainer>
  );
}
export default BlogPostPreview;
const PreviewItemContainer = styled.div<{ accentColor: string }>`
  overflow: hidden;
  height: 100%;
  cursor: default;
  border-radius: 0px;
  color: ${props =>
    props.theme.colors.primaryFontColor
      ? props.theme.colors.primaryFontColor
      : `black`};

  background: transparent;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border: 0px solid
    ${props =>
      props.theme.colors.borderColor
        ? props.theme.colors.borderColor
        : `transparent`};

  padding: 0px;
`;
const AccentColorBar = styled.div<{ accentColor: string }>`
  align-self: stretch;
  background: ${props => props.accentColor};
  height: 14px;
`;
const ContentContainer = styled.div`
  border: 1px solid
    ${props =>
      props.theme.colors.borderColor
        ? props.theme.colors.borderColor
        : `transparent`};
  border-top: 0px;
  * {
    padding: 10px;
  }
`;
const TitleDisplay = styled.div`
  font-size: 1.3em;
  display: flex;
  cursor: pointer;
  background: ${props => props.theme.colors.sevenBlack};
  color: ${props => props.theme.colors.siteBackground};
  font-weight: bold;
`;
const DescriptionText = styled.div`
  font-size: 0.9em;
  font-weight: normal;
`;
const DateText = styled.div`
  font-weight: bold;
  padding-bottom: 0px;
`;
const LabelsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  padding-bottom: 0px;
  * {
    margin-right: 5px;
  }
`;
const LabelText = styled.div`
  font-weight: bolder;
  background: ${props => props.theme.colors.blogPageAccent};
  color: ${props => props.theme.colors.siteBackground};
  padding: 4px 8px;
  margin-bottom: 0px;
  text-align: center;
  display: block;
`;
