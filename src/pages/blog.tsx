import * as React from "react";
import styled from "styled-components";
import { useBlogPosts } from "helpers/hooks/queries/";
import { Layout } from "../components/layout";
import { getMonth } from "helpers/utils/";
import { SEO } from "../components/seo/";
import useTheme from "helpers/hooks/usestyledtheme";
import { BlogPostPreview } from "components/blog/";
import { PageLabel } from "components/general/pagelabel/";
function PageContent() {
  const blogPageAccent = useTheme().colors.blogPageAccent;
  const data = useBlogPosts();

  const listGenerated = data.map(post => {
    let dateString = ``;
    if (!post.date) {
      const testDate = new Date();
      const day = testDate.getDate();
      const month = getMonth(testDate.getMonth());
      const year = testDate.getFullYear();
      dateString = month + ` ` + day + `, ` + year;
      console.warn("Date Auto Generated", testDate.toJSON());
    } else {
      dateString = post.date;
    }

    return post.published ? (
      <BlogPostPreview
        key={post.slug + post.title}
        postUrl={`/${post.slug}`}
        tags={post.tags}
        accentColor={blogPageAccent}
        title={post.title}
        description={post.description}
        date={dateString}
      />
    ) : null;
  });

  return (
    <>
      <PageLabel margin="0px 0px 20px 0px" accentColor={blogPageAccent}>
        Blog
      </PageLabel>
      {listGenerated.length > 0 ? (
        <BlogItemsList>{listGenerated}</BlogItemsList>
      ) : (
        <p>
          Coming soon! Stay tuned for posts about tech, audio, hi-fi, and
          programming.
        </p>
      )}
    </>
  );
}
const ComingSoonPage: React.ReactNode = () => (
  <Layout>
    <SEO
      title="Tech Blog"
      description="The unfocused tech posts from Jesus Garnica"
    />
    <PageContent />
  </Layout>
);
const BlogItemsList = styled.div`
  display: grid;
  grid-gap: 20px 0px;
`;

export default ComingSoonPage;
