import styled from "@emotion/styled";
import colors from "../../utils/colors";

export const CardButton = styled.button`
  padding: 10px 20px;
  background: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
  border: none;
  color: inherit;
  border-radius: 20px;
  font-size: ${(props) => buttonSize[props.size].size};
  margin-top: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
`;

const buttonSize = {
  small: { size: "0.6rem" },
  big: { size: "1rem" },
};

export default buttonSize;
