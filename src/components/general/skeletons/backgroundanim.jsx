import React from 'react'
import styled,{keyframes} from 'styled-components'
import PropTypes from 'prop-types'
/**
 * @name BackgroundAnim
 * @description Updated October 29, 2019 This is the simple loading animation used for all of
 * the placeholders. 
 * @prop {string} borderRadius 
 */
function BackgroundAnim(props){
    return(
        <MainContainer
        
        borderRadius={props.borderRadius}
        >

        </MainContainer>

    )


}
export default BackgroundAnim
BackgroundAnim.propTypes = {
    borderRadius: PropTypes.string,
}
const BackAnimation = keyframes`
0%{
    opacity: 0.08;
}
50%{
    opacity:0.18;
}
100%{
    opacity:0.08;
}
`
const MainContainer = styled.div`
width:100%;
height:100%;
overflow:hidden;
background-color:black;
border-radius: ${props=>(props.borderRadius? props.borderRadius : `4px`)};
animation: ${BackAnimation} 2s ease-in-out infinite ;
`
