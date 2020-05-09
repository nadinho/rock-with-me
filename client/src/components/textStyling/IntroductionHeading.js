import styled from "@emotion/styled";
import { zoomIn } from "../../utils/animations";

export const IntroductionHeading = styled.p`
  font-size: 1.25rem;
  animation-delay: 100ms;
  animation: ${zoomIn} 0.8s ease-in;
`;
