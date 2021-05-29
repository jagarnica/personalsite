import * as React from "react";
import styled from "styled-components";
import { useBlogPosts } from "helpers/hooks/queries/";
import { SEO } from "../components/seo/";
import useTheme from "helpers/hooks/usestyledtheme";
import { BlogPostPreview } from "components/blog/";
import { PageLabel } from "components/general/pagelabel/";
function BlogPageContent(): JSX.Element {
  const blogPageAccent = useTheme().colors.blogPageAccent;
  const data = useBlogPosts();

  const listGenerated = data.map(post => {
    if (!post || !post.published) return null;

    const { title, slug, description, tags, date: postDate } = post;
    const bPostItem = {
      slug,
      title,
      description,
      date: postDate || "",
      tags,
    };
    return (
      <BlogPostPreview
        key={slug}
        accentColor={blogPageAccent}
        blogPost={bPostItem}
      />
    );
  });

  return (
    <>
      <SEO
        title="Tech Blog"
        description="The unfocused tech posts from Jesus Garnica"
      />
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

const BlogItemsList = styled.div`
  display: grid;
  grid-gap: 20px 0px;
`;

export default BlogPageContent;
