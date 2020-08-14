import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import PostTag from "./posttag";
interface BlogPostPreviewProps {
  title: string;
  description?: string;
  date: string;
  tags: Array<string>;
  accentColor: string;
  postUrl: string;
}
/**
 * @name BlogPostPreview
 * @description Displays a card preview of a blog post. All props are REQUIRED expect for the description.
 * @prop {string} title
 * @prop {string} description
 * @prop {string} date
 * @prop {string[]} tags
 * @prop {string} postUrl
 * @prop {string} accentColor
 * @returns React.ReactElement
 */
function BlogPostPreview({
  title,
  description = "",
  date,
  tags,
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
  const labelsGen = tags.map(tag => {
    return <PostTag labelName={tag} key={tag} />;
  });
  return (
    <PreviewItemContainer accentColor={accentColor}>
      <AccentColorBar accentColor={accentColor} />
      <ContentContainer>
        <TitleDisplay onClick={handleUserLinkClick}>{title}</TitleDisplay>
        <InnerContentContainer onClick={handleUserLinkClick}>
          <LabelsContainer>{labelsGen}</LabelsContainer>
          <DateText>{date}</DateText>
          <DescriptionText>{description}</DescriptionText>
        </InnerContentContainer>
      </ContentContainer>
    </PreviewItemContainer>
  );
}
export default BlogPostPreview;
const InnerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;
`;
const PreviewItemContainer = styled.div<{ accentColor: string }>`
  overflow: hidden;
  height: 100%;

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
`;
const TitleDisplay = styled.div`
  font-size: 1.3em;
  display: flex;
  cursor: pointer;
  padding: 10px;
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
  margin-bottom: 0.45rem;
`;
const LabelsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  margin-bottom: 0.45rem;

  * {
    margin-right: 0.4rem;
  }
`;
