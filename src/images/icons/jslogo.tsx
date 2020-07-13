import React from "react";
import SvgIcon from "types/svgicon";
const JSLogo: SvgIcon = ({
  height = 32,
  width = 32,
  fillColor = "#F0DB4F",
  strokeWidth = 1,
  strokeColor = "#000000",
}) => (
  <svg
    height={height}
    width={width}
    fill={strokeColor}
    viewBox="0 0 60 60"
    x="0px"
    y="0px"
  >
    <title>Javascript</title>
    <g
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="none"
      fillRule="evenodd"
    >
      <g transform="translate(-1200.000000, -580.000000)" fill={fillColor}>
        <g transform="translate(1200.000000, 580.000000)">
          <path d="M46,37 C50.963,37 55,41.038 55,46 C55,50.962 50.963,55 46,55 C41.037,55 37,50.962 37,46 C37,45.448 37.447,45 38,45 C38.553,45 39,45.448 39,46 C39,49.86 42.141,53 46,53 C49.859,53 53,49.86 53,46 C53,42.14 49.859,39 46,39 C41.037,39 37,34.962 37,30 C37,25.038 41.037,21 46,21 C50.963,21 55,25.038 55,30 C55,30.552 54.553,31 54,31 C53.447,31 53,30.552 53,30 C53,26.14 49.859,23 46,23 C42.141,23 39,26.14 39,30 C39,33.86 42.141,37 46,37 L46,37 Z M34,46 C34,50.962 29.963,55 25,55 C20.037,55 16,50.962 16,46 C16,45.448 16.447,45 17,45 C17.553,45 18,45.448 18,46 C18,49.86 21.141,53 25,53 C28.859,53 32,49.86 32,46 L32,22 C32,21.448 32.447,21 33,21 C33.553,21 34,21.448 34,22 L34,46 Z M59,0 L1,0 C0.447,0 0,0.448 0,1 L0,59 C0,59.552 0.447,60 1,60 L59,60 C59.553,60 60,59.552 60,59 L60,1 C60,0.448 59.553,0 59,0 L59,0 Z"></path>
        </g>
      </g>
    </g>
  </svg>
);
export default JSLogo;
