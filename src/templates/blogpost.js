import React from "react";
import { Link, graphql } from "gatsby";
import Bio from "../components/blog/bio";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PostLabel from "../components/blog/posttag";
const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  let tags = post.frontmatter.tags;

  const TagsGenerated = tags.map(tag => {
    return <PostLabel key={tag} labelName={tag} />;
  });
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1 style={{ marginBottom: `0.5rem` }}>{post.frontmatter.title}</h1>
          <p
            style={{
              display: `block`,
              marginBottom: `0.5rem`,
            }}
          >
            {post.frontmatter.date}
          </p>
          <TagsContainer>{TagsGenerated}</TagsContainer>
        </header>
        <StyledSection>
          <MDXRenderer>{post.body}</MDXRenderer>
        </StyledSection>
        <hr />
        <footer>
          <span>
            <Bio />
          </span>
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/` + previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/` + next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;
const StyledSection = styled.section`
  * pre {
    margin-bottom: 1.45rem;
  }
`;
const TagsContainer = styled.div`
  display: flex;
  margin-bottom: 1.45rem;
  * {
    margin-right: 0.4rem;
  }
`;
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
