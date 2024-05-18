import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { PostTag } from "./posttag";
import { useMemo } from "react";

type BlogPostDetails = {
  title: string;
  description?: string;
  tags: Array<string>;
  slug: string;
  date: string;
};

export interface BlogPostPreviewProps {
  accentColor?: string;
  blogPost: BlogPostDetails;
}
/**
 * @name BlogPostPreview
 * @description Displays a card preview of a blog post. All props are REQUIRED expect for the description.
 * @prop {string} accentColor Sets the color of the top border
 * @prop {object} blogPost This is the object used to set the details, should have the
 * following properties: title, description, date, tags, postUrl, accentColor
 * @returns React.ReactElement
 */
export function BlogPostPreview({
  accentColor = "#000",
  blogPost,
}: BlogPostPreviewProps) {
  const { title, date, description, tags, slug } = blogPost;

  const labels = useMemo(
    () =>
      tags.map(tag => {
        return <PostTag labelName={tag} key={tag} />;
      }),
    [tags]
  );

  return (
    <PreviewItemContainer accentColor={accentColor}>
      <AccentColorBar accentColor={accentColor} />
      <ContentContainer>
        <TitleDisplay accentColor={accentColor}>
          <StyledLink to={"/" + slug}>{title}</StyledLink>
        </TitleDisplay>
        <InnerContentContainer>
          <LabelsContainer>{labels}</LabelsContainer>
          <DateText>{date}</DateText>
          <DescriptionText>{description || ``}</DescriptionText>
        </InnerContentContainer>
      </ContentContainer>
    </PreviewItemContainer>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const InnerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const PreviewItemContainer = styled.article<{ accentColor: string }>`
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
const TitleDisplay = styled.div<{ accentColor: string }>`
  font-size: 1.3em;
  display: flex;
  cursor: pointer;
  padding: 10px;
  background: ${props => props.theme.colors.sevenBlack};
  color: ${props => props.theme.colors.siteBackground};
  font-weight: bold;
  position: relative;
  &.loading {
    cursor: default;
  }
  &:focus-visible {
    outline: none;
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: "";
      outline: 2px solid #008678;
      margin: 2px;
      box-shadow: 0 0 0 6px #00ffe5;
    }
  }
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
  color: white;

  * {
    margin-right: 0.4rem;
  }
`;
