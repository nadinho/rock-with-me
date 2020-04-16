import styled from "@emotion/styled";
import colors from "../utils/colors";

export const Input = styled.input`
  width: 90%;
  margin: 15px 10px;
  border-right: 1px solid transparent;
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
  font-size: 1rem;
  color: ${colors.primaryText};
  padding: 10px;
  caret-color: ${colors.gradientTwo};
`;
