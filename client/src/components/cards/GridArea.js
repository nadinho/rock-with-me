import styled from "@emotion/styled";

export const GridArea = styled.div`
  margin: 50px 0px;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 3rem;
`;
