import React from 'react'
import styled from 'styled-components'
import BackgroundAnim from './backgroundanim'
import PropTypes from 'prop-types'
/**
 * @name ProfileImagePlaceholder
 * @description Updated October 29, 2019. Creates a placeholder to simulate a profile image loading. 
 * 
 * @prop {string} size 
 * @prop {string} margin
 * @prop {string} padding
 */
function ProfileImagePlaceholder(props){
    return(
        <Container 
        size={props.size}
        margin={props.margin}
        padding={props.padding}
        >
            <BackgroundAnim
             borderRadius={"50%"}
            />
        </Container>
    )


}
export default ProfileImagePlaceholder
ProfileImagePlaceholder.propTypes = {
    size: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
}
const Container = styled.div`
margin: ${props=>(props.margin? props.margin: ``)};
width: ${props=>(props.size? props.size : `70px`)};
height: ${props=>(props.size? props.size: `70px`)};
flex-shrink:0;

user-select:none;
overflow:hidden;
background:white;
padding: ${props=>(props.padding? props.padding : ``)};
position: relative;
border-radius:50%;
display:flex;
`