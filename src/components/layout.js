/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "./general/navbar/navbar"
import styled from "styled-components"
import "./layout.css"
const Layout = ({ children }) => {

  return (
    <>
      <Navbar></Navbar>
      <PageContainerDiv
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} 
        </footer>
      </PageContainerDiv>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const PageContainerDiv = styled.div`
margin: 0 auto;
max-width: 960px;
font-family:'Source Sans Pro',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
padding: 0 1.0875rem 1.45rem;
`