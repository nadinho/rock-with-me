import styled from "@emotion/styled";
import { zoomIn } from "../../utils/animations";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  animation-delay: 200ms;
  animation: ${zoomIn} 1000ms ease-in;
`;
