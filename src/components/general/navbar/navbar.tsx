import React from "react"
import styled from "styled-components"
import NavItem from "./navbaritem"
import DrawerMenu from "./drawermenu/index"
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
    let homeLink:RoadLink = new RoadLink("Home", "#4700ff","/");
    let aboutLink: RoadLink = new RoadLink("About", "purple", "/about/");
    let blogLink: RoadLink = new RoadLink("Blog", "red", "/comingsoon/");
    let resumeLink: RoadLink = new RoadLink("Resume", "red", "/comingsoon/");
    let portfolioLink: RoadLink = new RoadLink("Portfolio", "blue", "/comingsoon/");
    const links: RoadLink[] = [homeLink, aboutLink,blogLink, resumeLink, portfolioLink]

    const NavTabs = links.map((roadObj: RoadLink)=>{
        let pathName = roadObj.getPathName();
        let linkName = roadObj.name;
        let activeColor = roadObj.activeColor;
        return <NavItem pathName={pathName} activeColor={activeColor} linkName={linkName} key={linkName}></NavItem>
    })
    return (
        <NavbarContainer>
            <TitleSpan>JESUS GARNICA</TitleSpan>
            <DrawerMenu>
                <TabsLayoutDiv>
                {NavTabs}
                </TabsLayoutDiv>

            </DrawerMenu>

        </NavbarContainer>
    )
}

export default Navbar

const NavbarContainer = styled.div`
    
    height:69px;
    margin: 0 auto;

    max-width:960px;
    background:white;
    display:flex;
    font-family:'IBM Plex Mono',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    align-items:center;
    justify-content:space-between;
    padding-left: 1.0875rem;
    padding-right: 1.0875rem;    


`
const TitleSpan = styled.span`
line-height:1.2em;
font-size:1.2em;

`

const TabsLayoutDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin:auto 0;
padding: 20px 0px;
height:100%;
max-height:100%;
`