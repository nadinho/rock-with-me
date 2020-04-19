import React from "react";
import styled from "@emotion/styled";
import colors from "../utils/colors";

const SVG = styled.svg`
  width: 38%;
  fill: none;
  stroke: #7634c0;
  stroke-linecap: round;
  stroke-miterlimit: 10;
  stroke-width: 1px;
  -webkit-animation: dance 1s infinite;
  -moz-animation: dance 1s infinite;
  -ms-animation: dance 1s ease-in-out infinite;
  animation: dance 1s ease-in-out infinite;

  @keyframes dance {
    0% {
      transform: scale(0.9);
      stroke: ${colors.gradientTwo};
      stroke-width: 1px;
    }
    50% {
      transform: scale(1);
      stroke: ${colors.gradientOne};
      stroke-width: 1.2px;
    }
    100% {
      transform: scale(0.9);
      stroke: ${colors.gradientTwo};
      stroke-width: 1px;
    }
  }
`;

export const MusicNote = () => {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M7,16a3,3,0,1,1-3-3A3,3,0,0,1,7,16Zm8-4a3,3,0,1,0,3,3A3,3,0,0,0,15,12Zm3-7.81a2,2,0,0,0-2.18-2l-7,.64A2,2,0,0,0,7,4.83V7L18,6ZM7,16V5.5M18,15V5.5" />
    </SVG>
  );
};
