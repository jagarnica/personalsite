import * as React from "react";
import { PostTag } from "../../components/blog/posttag";
import styled, { ThemeProvider, StyleSheetManager } from "styled-components";
import { PreviewTemplateComponentProps } from "netlify-cms-core";
import baseTheme from "../../styles/basesitetheme";

export type BlogPostTemplateProps = PreviewTemplateComponentProps;
const BlogPostTemplate = ({
  entry,
  widgetFor,
}: PreviewTemplateComponentProps) => {
  // Get the post title
  const title: string | undefined = entry.getIn(["data", "title"]);

  // Get if article is published
  const published: boolean | undefined = entry.getIn(["data", "published"]);

  // Get the post date
  const date: Date = entry.getIn(["data", "date"]);

  // Get the post tags
  const tagMap: Map<string, string> = entry.getIn(["data", "tags"]);
  const tags = [...tagMap.values()];
  const TagsGenerated = tags.map(tagName => {
    return <PostTag key={tagName} labelName={tagName} />;
  });

  // Get the document body
  const RenderedBody = widgetFor("body");

  // Inject Styled Components CSS
  const iframe: HTMLIFrameElement | null = document.getElementById(
    "preview-pane"
  ) as HTMLIFrameElement;
  const iframeHeadElem = iframe?.contentDocument?.head;

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <ThemeProvider theme={baseTheme}>
        <PageContainerDiv>
          <article>
            <header>
              <PostTag
                labelColor={published ? "#40af49" : "#C62828"}
                labelName={published ? "PUBLISHED" : "NOT PUBLISHED"}
              />
              <h1 style={{ marginTop: `0.5rem`, marginBottom: `0.5rem` }}>
                {title}
              </h1>
              <p
                style={{
                  display: `block`,
                  marginBottom: `0.5rem`,
                }}
              >
                {date?.toDateString()}
              </p>

              <TagsContainer>{TagsGenerated}</TagsContainer>
              <div style={{ display: "flex", marginBottom: "1.45rem" }}></div>
            </header>
            <section>{RenderedBody}</section>
            <hr />
          </article>

          <nav>
            <p>Bio not available in preview.</p>
          </nav>
        </PageContainerDiv>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default BlogPostTemplate;
const PageContainerDiv = styled.div`
  margin: 0 auto;
  margin-top: calc(30px);
  max-width: 960px;
  font-family: ${props => props.theme.baseFontFamily};
  padding: 0 1.0875rem 1.45rem;
`;
const TagsContainer = styled.div`
  display: flex;
  margin-bottom: 1.45rem;
  * {
    margin-right: 0.4rem;
  }
`;
