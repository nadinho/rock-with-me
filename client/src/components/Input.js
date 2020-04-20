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
  font-family: inherit;
  background: transparent 10px 100% no-repeat;
  font-size: 1rem;
  color: ${colors.primaryText};
  padding: 10px;
  caret-color: ${colors.gradientTwo};
  &::-webkit-datetime-edit {
    padding-left: 80px;
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;
