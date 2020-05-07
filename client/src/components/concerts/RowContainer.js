import styled from "@emotion/styled";

export const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 90%;
  margin-top: 20px;
  justify-content: space-around;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
