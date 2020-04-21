import styled from "@emotion/styled";
import colors from "../../utils/colors";

export const Dropdown = styled.select`
  width: 300px;
  margin: 30px 10px;
  padding: 10px 0px 10px 15px;
  border-right: 2px solid transparent;
  border-image: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
  border-image-slice: 1;
  background: transparent 10px 100% no-repeat;
  font-size: 0.9rem;
  color: ${colors.primaryText};
  background: transparent;
  font-family: inherit;
`;
