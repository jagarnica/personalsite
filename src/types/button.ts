import React from "react";
/**
 *
 */
export interface ButtonProps {
  mainColor?: string;
  accentColor?: string;
  textColor?: string;
  margin?: string;
  padding?: string;
  width?: string;
}
/**
 * @typedef {interface} Button
 * @property {string} mainColor optional
 * @property {string} accentColor optional
 * @property {string} textColor opt
 * @property {string} margin opt
 * @property {string} padding opt
 * @property {string} width Optional, sets the width for the button
 */
export default interface Button
  extends React.FC<
    ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
  > {}
