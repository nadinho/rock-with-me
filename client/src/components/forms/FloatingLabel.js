import styled from "@emotion/styled";

export const FloatingLabel = styled.label`
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 27px;
  transition: 0.2s ease all;
  Input:focus ~ & {
    top: -4px;
    left: 4px;
    font-size: 0.75rem;
  }
  Input:valid ~ & {
    top: -4px;
    left: 4px;
    font-size: 0.75rem;
  }
`;
