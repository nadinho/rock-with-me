import styled from "@emotion/styled";
import { fadeIn } from "../utils/animations";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  animation-delay: 200ms;
  animation: ${fadeIn} 1500ms ease-in;
`;
