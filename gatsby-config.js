const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `Jesus Garnica`,
    github: `https://github.com/jagarnica`,
    linkedin: `https://www.linkedin.com/in/jesus-garnica/`,
    description: `Jesus Garnica's portfolio and unfocused tech blog.`,
    author: `@jagarnica`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${process.env.GATSBY_PORTFOLIO_GITHUB_TOKEN}`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        styles: path.join(__dirname, "src/styles"),
        helpers: path.join(__dirname, "src/helpers"),
        components: path.join(__dirname, "src/components"),
        images: path.join(__dirname, "src/images"),
        types: path.join(__dirname, "src/types"),
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$|\.tsx$|\.ts$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`IBM Plex Mono`, `IBM Plex Sans`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jesus Garnica`,
        short_name: `JG`,
        start_url: `/`,
        background_color: `#f2efe9`,
        theme_color: `#f2efe9`,
        display: `minimal-ui`,
        icon: `src/images/site_logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: false,
        jsxPragma: `React`,
        allExtensions: false,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: `${process.env.S3_BUCKET_NAME}`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
