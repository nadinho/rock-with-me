import styled from "@emotion/styled";
import colors from "../../utils/colors";

export const Card = styled.div`
  /* background: ${colors.background}; */
  background: rgba(68,76,91,.7);
  width: ${(props) => cardSize[props.size].width};
  padding: 10px 15px;
  border-radius: 6px;
  margin: 10px 0px;
`;

const cardSize = {
  small: { width: "35%" },
  big: { width: "90%" },
};

export default cardSize;
