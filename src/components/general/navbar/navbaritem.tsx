import React from "react"
import styled from "styled-components"


function NavbarItem(){

    return <NavBarItem>Link Here!</NavBarItem>

}
export default NavbarItem

const NavBarItem = styled.div`
    font-size:1.3em;
    margin-bottom:4px;
    border-bottom: 4px solid transparent;
    &:active{
        border-bottom-color: black;
    }

`