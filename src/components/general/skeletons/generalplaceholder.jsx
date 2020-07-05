import React from "react";
import styled from "styled-components";
import BackgroundAnim from "./backgroundanim";
import PropTypes from "prop-types";
/**
 * @name GeneralPlaceholder
 * @description Updated November 14, 2019. Creates a generic placeholder that is useful to simulate
 * text or anything loading.
 * @prop {string} width Ex: '120px'
 * @prop {string} height Ex: '39px'
 * @prop {string} padding Ex: '10px 20px`
 * @prop {string} margin  Ex: '10px 20px'
 * @prop {string} maxWidth Sets the max-width for the container
 * @prop {string} maxHeight Sets the max-height for the container
 */
function GeneralPlaceholder(props) {
  return (
    <Container
      width={props.width}
      height={props.height}
      margin={props.margin}
      maxHeight={props.maxHeight}
      maxWidth={props.maxWidth}
      padding={props.padding}
    >
      <BackgroundAnim />
    </Container>
  );
}
export default GeneralPlaceholder;
GeneralPlaceholder.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string,
};

const Container = styled.div`
  margin: ${props => (props.margin ? props.margin : ``)};
  width: ${props => (props.width ? props.width : `100%`)};
  height: ${props => (props.height ? props.height : `20px`)};
  max-width: ${props => (props.maxWidth ? props.maxWidth : `100%`)};
  max-height: ${props => (props.maxHeight ? props.maxHeight : ``)};
  user-select: none;
  overflow: hidden;
  padding: ${props => (props.padding ? props.padding : ``)};
  position: relative;
  border-radius: 4px;
  background: white;
  display: flex;
`;
