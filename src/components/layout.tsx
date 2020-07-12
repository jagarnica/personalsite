import React from "react";
import PropTypes from "prop-types";
import Navbar from "./general/navbar/";
import styled from "styled-components";
import { FONT_FAMILY } from "styles/styles";
import "./layout.css";
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <PageContainerDiv>
        {children}
        <footer></footer>
      </PageContainerDiv>
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
  font-family: ${FONT_FAMILY};
  padding: 0 1.0875rem 1.45rem;
`;
const MainContainer = styled.main``;
