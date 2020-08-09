import React from "react";
import PropTypes from "prop-types";
import Navbar from "./general/navbar/";
import styled, { ThemeProvider } from "styled-components";
import BaseSiteTheme from "styles/basesitetheme";
import "./layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={BaseSiteTheme}>
        <Navbar />
        <PageContainerDiv>
          {children}
          <footer></footer>
        </PageContainerDiv>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const PageContainerDiv = styled.div`
  margin: 0 auto;
  margin-top: calc(69px + 1.45rem);
  max-width: 960px;
  font-family: ${props => props.theme.baseFontFamily};
  padding: 0 1.0875rem 1.45rem;
`;
