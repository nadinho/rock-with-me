import styled from "@emotion/styled";
import colors from "../utils/colors";

export const Select = styled.select`
  margin: 15px 10px;
  padding: 90px;
  border-right: 2px solid transparent;
  border-image: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
  border-image-slice: 1;
  font-family: "Montserrat", sans-serif;
  background: transparent 10px 100% no-repeat;
  background-position: 0 0, 100% 0;
  font-size: 0.9rem;
  color: ${colors.primaryText};
`;
