import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
/**
 * @name SmartImg
 * @description Updated December 9 2019 Lazy Loads Images and presents a placeholder when they are loading.
 * @author Jesus Garnica
 * @prop {boolean} blurFade Enables a blur effect for images loading in. This does not speed up loading.
 * @prop {function} onError This is called when the images faces an issue loading the image.
 * @prop {function} onLoad This is called when the image successfully loads in.
 * @prop {React.Node || string} src This is the src for the image.
 * @prop {number} offset Sets how soon things should relative to the viewport. Default is 400.
 * @prop {object} style Sets the appearance for the image. Ex: style={{objectFit:"contain"}}
 */
const PlaceholderImg = props => {
  return <Layout {...props} />;
};
class SmartImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageError: false,
      isLoaded: false,
    };
    this.disabledAnimationIntro = false;
  }
  handleSuccessfulLoad = event => {
    event.preventDefault();
    event.stopPropagation();
    this.disabledAnimationIntro = true;
  };
  componentDidUpdate(prevProps) {
    if (prevProps.src !== this.props.src) {
      //new src has been set.
      this.setState({
        imageError: false,
        isLoaded: false,
      });
    }
  }
  render() {
    try {
      let className = "";

      if (this.state.isLoaded) {
        if (this.props.blurFade) {
          className = "blurEnter ";
        } else {
          className = "visible";
          if (this.disabledAnimationIntro === true) {
            className = "noAnimationVisible";
          }
        }
      }
      return (
        <>
          {this.props.src && !this.state.imageError ? (
            <BackgroundDiv
              className={!this.state.isLoaded ? "visible" : ""}
              style={this.props.style}
            >
              <LazyLoad
                placeholder={<PlaceholderImg style={this.props.style} />}
                offset={this.props.offset}
                height={this.props.placeHeight}
                once
              >
                <ImageDiv
                  onAnimationEnd={this.handleSuccessfulLoad}
                  {...this.props}
                  onError={() => {
                    this.setState({ imageError: true });
                    this.props.onError();
                  }}
                  onLoad={() => {
                    this.setState({ imageError: false, isLoaded: true });
                    this.props.onLoad();
                  }}
                  style={this.props.style}
                  src={this.props.src}
                  className={className}
                />
              </LazyLoad>
            </BackgroundDiv>
          ) : (
            <>
              <PlaceholderImg style={this.props.style} />
            </>
          )}
        </>
      );
    } catch (e) {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        console.log(e);
      }
      return null;
    }
  }
}
export default SmartImg;
SmartImg.propTypes = {
  src: PropTypes.node,
  placeHeight: PropTypes.number,
  blurFade: PropTypes.bool,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  offset: PropTypes.number,
};
SmartImg.defaultProps = {
  blurFade: false,
  onError: function () {},
  onLoad: function () {},
  offset: 400,
};
const BackgroundAnimation = keyframes`
0%{

  background: rgba(232, 232, 232, 1);
}
50%{
background: rgba(242, 242, 242, 1);
}
100%{
  background: rgba(232, 232, 232, 1);
}
`;
const Layout = styled.div`
  content: "...";

  background: rgba(232, 232, 232, 1);
  animation: ${BackgroundAnimation}
    ${props => (props.animationTime ? props.animationTime + `s` : `1.3s`)}
    ease-in-out infinite;
`;
const ImageEnter = keyframes`
from{
    opacity:0;
    filter:blur(4px);
}
to{
  opacity:1;
    filter:blur(0px);
}
`;
const FadeIntoView = keyframes`

to{
  opacity:1;
}
`;

const BackgroundDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;

  background: rgba(232, 232, 232, 0);
  &.visible {
    opacity: 1;
    background: rgba(232, 232, 232, 1);
  }
`;

const ImageDiv = styled.img`
  overflow: hidden;
  opacity: 0;

  &.blurEnter {
    overflow: hidden;

    animation: ${ImageEnter} 0.2s 0s ease-out forwards;
  }
  &.visible {
    /* opacity: 1; */
    animation: ${FadeIntoView} 0.1s ease-out forwards;
    /* transition: opacity 0.1s ease-out; */
  }
  &.noAnimationVisible {
    transition: opacity 0s !important;
    animation: ${FadeIntoView} 0s linear forwards;
    opacity: 0;
  }
`;
