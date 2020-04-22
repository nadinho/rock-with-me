import styled from "@emotion/styled";
import colors from "../../utils/colors";
import { appear } from "../../utils/animations";

export const Input = styled.input`
  animation: ${appear} 1000ms ease-in;
  width: 300px;
  margin: 30px 0 30px 0;
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
