import styled from "@emotion/styled";
import { fadeIn } from "../../utils/animations";

export const IntroductionText = styled.p`
  font-size: 1em;
  animation-delay: 150ms;
  animation: ${fadeIn} 1500ms ease-in;
`;
