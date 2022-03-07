import * as React from "react";
import styled from "styled-components";
export interface PostTagProps {
  labelName: string;
  labelColor?: string;
  textColor?: string;
}
/**
 * @name Label
 * @description Creates a small label with a background color. These are used for the blog posts.
 * @prop {string} labelName REQUIRED This sets the text inside.
 * @prop {string} labelColor
 * @prop {string} textColor
 */
export function PostTag({
  labelName,
  textColor = "white",
  labelColor,
}: PostTagProps): React.ReactElement {
  return (
    <LabelText
      onClick={(event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        // Do nothing for now.
      }}
      textColor={textColor}
      labelColor={labelColor}
    >
      {labelName}
    </LabelText>
  );
}
const LabelText = styled.div<{ labelColor?: string; textColor?: string }>`
  font-weight: bolder;
  background: ${props =>
    props.labelColor ? props.labelColor : props.theme.colors.blogPageAccent};
  color: ${props =>
    props.textColor ? props.textColor : props.theme.colors.siteBackground};
  padding: 4px 8px;
  margin-bottom: 0px;
  text-align: center;
  display: block;
  cursor: auto;
`;
