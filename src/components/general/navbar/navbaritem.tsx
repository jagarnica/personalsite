import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

interface Props {
    linkName: string, // This is the name of the link shown to the user 
    activeColor: string // This is color of the bottom of the bar when the tab is active 
    pathName: string // This is the pathname for the link 
    location?: any
}
/**
 * @param {string} linkName  This is the name shown to the use as the name of nav item.
 * @param {string} activeColor  This is the color shown to highlight that the tab is active 
 * @param {string} pathName the path name should be different from the name, this can be set to change it. 
 */
const NavbarItem: React.FC<Props> = ({linkName, activeColor, pathName, location}) =>{
    console.log("location?", location? location : "no...");
    return (  
   
     <NavLinkDiv
        to={pathName}
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
        activeStyle={{
          
          borderBottomColor : activeColor
        }}
      >
         
          {linkName}
       
        
      </NavLinkDiv>
  
   )

};
export default NavbarItem
const NavLinkDiv = styled(Link)`
    font-size:1.3em;
    height:1.3em;
    margin-bottom:4px;
    color:black;
    padding: 0px 1px;
    justify-content:center;
    align-items:center;
    display:flex;
    border-color: transparent;
    border-bottom: 2px solid transparent;
    margin-left: 10px;
    margin-right:10px;

`
