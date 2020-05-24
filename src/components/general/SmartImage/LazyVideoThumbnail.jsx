import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import PropTypes from "prop-types"
import LazyLoad from "react-lazyload"
/*
  File: LazyVideoThumbnail.jsx
  Description: Lazy loads an image with a placeholder.

  Example Usage:
   <LazyVideoThumbnail blurFade={true} style={{objectFit:"contain"}} src={"https://placekitten.com/2250/2287"} />

   Props:
  src: PropTypes.node,   Source for the image
  placeHeight: PropTypes.number, sets the placeholder height
  blurFade: PropTypes.bool,  sets whether or not to do fancy out of focus effect for images 
  when loading.


*/
const PlaceholderImg = props => {
  return <Layout {...props} />
}
class LazyVideoThumbnail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
    }
  }
  render() {
    try {
      let className = ""
      if (this.props.blurFade) {
        className = "blur "
      }
      if (this.state.isLoaded) {
        className = "visible"
      }
      return (
        <>
          {this.props.src ? (
            <BackgroundDiv>
            <LazyLoad
              placeholder={
                <PlaceholderImg style={this.props.style}  />
              }
              offset={200}
              height={this.props.placeHeight}
              once
            >
              <ImageDiv
                {...this.props}
                onError={() => {
                  this.props.onError()
                }}
                onLoad={() => {
                  this.setState({
                    isLoaded: true,
                  })
                }}
                src={this.props.src}
                className={className}
              />
            </LazyLoad>
            </BackgroundDiv>
          ) : (
            <></>
          )}
        </>
      )
    } catch (e) {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        console.log(e)
      }
      return null
    }
  }
}
export default LazyVideoThumbnail
LazyVideoThumbnail.propTypes = {
  src: PropTypes.node,
  placeHeight: PropTypes.number,
  blurFade: PropTypes.bool,
  onError: PropTypes.func,
}
LazyVideoThumbnail.defaultProps = {
  blurFade: false,
  onError: function() {},
}

const SwipeAnimation = keyframes`
0%{

    

background-position: -100vw 0px;
}

100%{
   
background-position: 100vw 0px;

}
`
const Layout = styled.div`
  display: inline-block;
  content: "...";
  min-height:100%;
  min-width:100%;
  animation: ${SwipeAnimation} 1.25s normal ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  overflow: hidden;
  border-radius: 0em;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(181, 181, 181, 0)),
    color-stop(30%, rgba(181, 181, 181, 0)),
    color-stop(45%, rgba(250, 250, 250, 1)),
    color-stop(50%, rgba(250, 250, 250, 1)),
    color-stop(55%, rgba(250, 250, 250, 1)),
    color-stop(70%, rgba(181, 181, 181, 0)),
    to(rgba(181, 181, 181, 0))
  );

  background: -webkit-linear-gradient(
    left,
    rgba(181, 181, 181, 0) 0%,
    rgba(181, 181, 181, 0) 30%,
    rgba(250, 250, 250, 1) 45%,
    rgba(250, 250, 250, 1) 50%,
    rgba(250, 250, 250, 1) 55%,
    rgba(181, 181, 181, 0) 70%,
    rgba(181, 181, 181, 0) 100%
  );

  background: -o-linear-gradient(
    left,
    rgba(181, 181, 181, 0) 0%,
    rgba(181, 181, 181, 0) 30%,
    rgba(250, 250, 250, 1) 45%,
    rgba(250, 250, 250, 1) 50%,
    rgba(250, 250, 250, 1) 55%,
    rgba(181, 181, 181, 0) 70%,
    rgba(181, 181, 181, 0) 100%
  );

  background: linear-gradient(
    to right,
    rgba(181, 181, 181, 0.2) 0%,
    
    rgba(250, 250, 250, 0.9) 45%,
    rgba(250, 250, 250, 0.9) 50%,
    rgba(250, 250, 250, 0.9) 55%,
   
    rgba(181, 181, 181, 0.2) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  background-color: rgba(181, 181, 181, 1);
  opacity:0.2;
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
  color: transparent;
`
const ImageEnter = keyframes`
from{
   
    filter:blur(8px);
}
to{
   
    filter:blur(0px);
}
`
const FadeIn = keyframes`
from{
   opacity:0;
}
to{
 
  opacity:1;
}
`
const ImageDiv = styled.img`
  width: ${props => (props.width ? props.width + `px` : `100%`)};
  height: ${props => (props.height ? props.height + `px` : `100%`)};
  overflow: hidden;
  opacity: 0;
  &.blurEnter {
    animation: ${ImageEnter} 0.3s 0.2s ease-out forwards;
    transition: opacity 0.3s ease-out;
    opacity: 1;
  }
  &.visible {
   
    animation: ${FadeIn} 0.3s 0s ease-out forwards;
  }
`
const BackgroundDiv = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(232,232,232,1);
`
