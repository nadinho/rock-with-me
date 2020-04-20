import styled from "@emotion/styled";
import colors from "../../utils/colors";

export const Card = styled.div`
  background: ${colors.background};
  width: ${(props) => cardSize[props.size].width};
  padding: 10px 15px;
  border-radius: 6px;
`;

const cardSize = {
  small: { width: "35%" },
  big: { width: "100%" },
};

export default cardSize;
