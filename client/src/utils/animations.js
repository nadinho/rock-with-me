import { keyframes } from "@emotion/core";

export const fadeInUp = keyframes`
    0% {
      opacity: 0;
      transform: translate3d(0, 20%, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
`;

export const fadeIn = keyframes`
    0% {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
`;

export const fadeInRight = keyframes`
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
`;

export const zoomIn = keyframes`  
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    100% {
      opacity: 1;
      
    }
`;

export const appear = keyframes`  
    0% {
      opacity: 0;
      
    }
    100% {
      opacity: 1;
      
    }
`;
