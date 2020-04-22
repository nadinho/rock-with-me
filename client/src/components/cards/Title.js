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
  big: { size: "1.75rem" },
};

export default titleSize;

export const TitleUnderline = styled(Title)`
  &::after {
    content: "";
    display: block;
    height: 2px;
    position: relative;
    top: 4px;
    left: 22px;
    background: linear-gradient(
      50deg,
      ${colors.gradientOne},
      ${colors.gradientTwo}
    );
    width: 70px;
  }
`;
