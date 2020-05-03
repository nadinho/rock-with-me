import styled from "@emotion/styled";
import { zoomIn } from "../../utils/animations";

export const DetailTextContainer = styled.div`
  width: 65%;
  margin: 20px 30px 0 20px;
  text-align: justify;
  white-space: pre-wrap;
  animation: ${zoomIn} 1000ms ease-in;
`;
