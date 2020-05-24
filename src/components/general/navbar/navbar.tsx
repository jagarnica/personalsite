import React from "react"
import styled from "styled-components"
import NavItem from "./navbaritem"
function Navbar() {

    return (
        <NavbarContainer>
            <NavItem>Home</NavItem>
            <NavItem>Resume</NavItem>
            <NavItem>Portfolio</NavItem>
        </NavbarContainer>
    )
}

export default Navbar

const NavbarContainer = styled.div`
    width:100%;
    height:69px;

    background:white;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display:flex;
    align-content:center;
    justify-content:center;
`


