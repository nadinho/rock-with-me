import styled from "@emotion/styled";
import colors from "../utils/colors";

export const Dropdown = styled.select`
  width: 90%;
  height: 40px;
  margin: 15px 10px;
  border-right: 1px solid transparent;
  border-image: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
  border-image-slice: 1;
  background: transparent;
  background-size: 10px 100%;
  background-position: 0 0, 100% 0;
  background-repeat: no-repeat;
  outline: none;
  font-size: 0.9rem;
  color: ${colors.primaryText};
  font-family: inherit;
`;
