import styled from "@emotion/styled";
import { zoomIn } from "../../utils/animations";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  animation-delay: 200ms;
  animation: ${zoomIn} 0.8s ease-in;
`;
