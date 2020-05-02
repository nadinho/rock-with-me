import styled from "@emotion/styled";
import colors from "../../utils/colors";

export const Title = styled.h1`
  font-size: ${(props) => titleSize[props.size].size};
  font-weight: 700;
  color: ${colors.primaryText};
  text-transform: uppercase;
`;

const titleSize = {
  small: { size: "0.9rem" },
  medium: { size: "1.25" },
  big: { size: "1.75rem" },
};

export default titleSize;
