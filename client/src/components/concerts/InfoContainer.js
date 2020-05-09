import styled from "@emotion/styled";
import { zoomIn } from "../../utils/animations";

export const InfoContainer = styled.div`
  display: flex;
  line-height: 0.8px;
  width: 70%;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px 0px 10px 0px;
  animation: ${zoomIn} 0.8s ease-in;
`;
