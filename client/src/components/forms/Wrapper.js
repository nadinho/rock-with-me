import styled from "@emotion/styled";
import { zoomIn } from "../../utils/animations";

export const Wrapper = styled.div`
  position: relative;
  animation: ${zoomIn} 1000ms ease-in;
`;
