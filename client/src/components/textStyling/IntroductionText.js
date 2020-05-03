import styled from "@emotion/styled";
import { zoomIn } from "../../utils/animations";

export const IntroductionText = styled.p`
  font-size: 1em;
  animation-delay: 150ms;
  animation: ${zoomIn} 1000ms ease-in;
`;
