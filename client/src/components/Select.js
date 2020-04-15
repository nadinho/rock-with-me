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
  background: transparent;
  background-size: 10px 100%;
  background-position: 0 0, 100% 0;
  background-repeat: no-repeat;
  outline: none;
  font-size: 0.9rem;
  color: ${colors.primaryText};
`;
