import styled from "@emotion/styled";
import { ButtonFull } from "./ButtonFull";
import colors from "../../utils/colors";

export const ButtonOutline = styled(ButtonFull)`
  border-left: 3px solid ${colors.gradientOne};
  border-right: 3px solid ${colors.gradientTwo};
  background-image: linear-gradient(
      50deg,
      ${colors.gradientOne},
      ${colors.gradientTwo}
    ),
    linear-gradient(50deg, ${colors.gradientOne}, ${colors.gradientTwo});
  background-size: 100% 3px;
  background-position: 0 0, 0 100%;
  background-repeat: no-repeat;
`;
