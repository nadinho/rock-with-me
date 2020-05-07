import styled from "@emotion/styled";

export const Card = styled.div`
  background: rgba(68, 76, 91, 0.7);
  width: ${(props) => cardSize[props.size].width};
  padding: 10px 15px;
  border-radius: 6px;
  margin: 10px 0px;
`;

const cardSize = {
  small: { width: "35%" },
  big: { width: "90%" },
};
