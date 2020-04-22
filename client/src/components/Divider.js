import styled from "@emotion/styled";
import colors from "../utils/colors";
import { zoomIn } from "../utils/animations";

export const Divider = styled.div`
  height: 1px;
  margin: 0.5em 0 0.5em 0;
  width: 90%;
  display: block;
  background-image: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
  animation: ${zoomIn} ease-in 1500ms;
`;
