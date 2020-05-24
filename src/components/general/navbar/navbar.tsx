import React from "react"
import styled from "styled-components"
import NavItem from "./navbaritem"

/**
 * A roadlink is just a custom class used for the links in the navbar. Each one must 
 * have a name attached and also a color that is used to signify it is active.
 * 
 * @param {string} name This is the name displayed as the name of the link. 
 * @param {string} activeColor This is the color used to signify that the nav item is currently being displayed. 
 * @param {string} altPathName If the path name should be different from just using the name provided, this can be used. 
 * @function getPathName Returns the path name for the link as a string. 
 * 
 */
class RoadLink {
    name: string;
    activeColor: string;
    altPathName: string; 
    constructor(name: string, activeColor: string, altPathName? : string) {
        this.name = name;
        this.activeColor = activeColor;
        this.altPathName = altPathName? altPathName : name;
      }

    getPathName(){
        return this.altPathName.toLocaleLowerCase();
    }
}

function Navbar() {
    let homeLink = new RoadLink("Home", "black","/");
    let resumeLink = new RoadLink("Resume", "red");
    let portfolioLink = new RoadLink("Portfolio", "blue");
    const links: RoadLink[] = [homeLink, resumeLink, portfolioLink]
    
    const NavTabs = links.map((roadObj: RoadLink)=>{
        let pathName = roadObj.getPathName();
        let linkName = roadObj.name;
        let activeColor = roadObj.activeColor;
        return <NavItem activeColor={activeColor} linkName={linkName} key={linkName}></NavItem>
    })
    return (
        <NavbarContainer>
            {NavTabs}
        </NavbarContainer>
    )
}

export default Navbar

const NavbarContainer = styled.div`
    width:100%;
    height:69px;
    margin: 0 auto;
    max-width:960px;
    background:white;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display:flex;
    align-content:center;
    justify-content:space-between;
`


