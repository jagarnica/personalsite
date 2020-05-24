import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

interface Props {
    linkName: string, // This is the name of the link shown to the user 
    activeColor: string // This is color of the bottom of the bar when the tab is active 
    altPathName?: string 
}
/**
 * @param {string} linkName  This is the name shown to the use as the name of nav item.
 * @param {string} activeColor  This is the color shown to highlight that the tab is active 
 * @param {string} altPathName If the path name should be different from the name, this can be set to change it. 
 */
const NavbarItem: React.FC<Props> = ({linkName, activeColor, altPathName}) =>{
    let pathName = (altPathName? altPathName : linkName).toLocaleLowerCase();
    return (  
    <NavLinkDiv 
    isActive={true}
    activeColor={activeColor}
    >
     <Link
        to={`/${pathName}`}
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        {linkName}
      </Link>
    </NavLinkDiv>
   )

};
export default NavbarItem
const NavLinkDiv = styled.div<{isActive: boolean, activeColor: string}>`
    font-size:1.3em;
    height:1.3em;
    margin-bottom:4px;
    color:black;
    justify-content:center;
    align-items:center;
    display:flex;
    padding:0;
    border-bottom: 4px solid transparent;
    border-bottom-color: ${props => props.isActive? props.activeColor : `transparent`};

`
