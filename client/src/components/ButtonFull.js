import styled from "@emotion/styled";
import colors from "../utils/colors";

export const ButtonFull = styled.button`
  height: 50px;
  width: 218px;
  border-radius: 6px;
  border: none;
  margin: 10px;
  background: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
  font-size: 0.8rem;
  font-weight: 500;
  color: ${colors.primaryText};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
`;
