import React from "react";
export interface SvgIconProps {
  width?: number;
  height?: number;
  strokeWidth?: number;
  strokeColor?: string;
  fillColor?: string;
}
export default interface SvgIcon extends React.FC<SvgIconProps> {}
