import React from "react";
import styled from "styled-components";
import useBlogPosts from "helpers/hooks/queries/useblogposts";
import Layout from "../components/layout";
import getMonth from "helpers/utils/getmonth";
import SEO from "../components/seo";
import useTheme from "helpers/hooks/usestyledtheme";
import BlogPostPreview from "components/blog/blogpostpreview";
import PageLabel from "components/general/pagelabel/pagelabel";
function PageContent() {
  const blogPageAccent = useTheme().colors.blogPageAccent;
  const data = useBlogPosts();

  const listGenerated = data.map(post => {
    const dateObject = new Date(post.date);
    let dateString = ``;
    if (dateObject.toString() !== "Invalid Date") {
      const day = dateObject.getDate();
      const month = getMonth(dateObject.getMonth());
      const year = dateObject.getFullYear();
      dateString = month + ` ` + day + `, ` + year;
    } else {
      console.log("Date Generated", new Date(post.date).toJSON());
    }
    return post.published ? (
      <BlogPostPreview
        key={post.slug + post.title}
        postUrl={post.slug}
        labels={post.labels}
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
      {listGenerated.length > 1 ? (
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
