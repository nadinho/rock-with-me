import React from "react";
import styled from "@emotion/styled";
import colors from "../utils/colors";

export default function FloatingTextArea(props) {
  return (
    <Wrapper>
      <TextArea {...props} />
      <Label {...props}></Label>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 300px;
  margin: 30px 10px;
  border-right: 2px solid transparent;
  border-image: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
  border-image-slice: 1;
  font-family: inherit;
  background: transparent 10px 100% no-repeat;
  background-size: 10px 100%;
  font-size: 1rem;
  color: ${colors.primaryText};
  padding: 10px;
  caret-color: ${colors.gradientTwo};
`;

const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 28px;
  top: 44px;
  transition: 0.2s ease all;
  TextArea:focus ~ & {
    top: 4px;
    left: 14px;
    font-size: 0.75rem;
  }
  TextArea:valid ~ & {
    top: 4px;
    left: 14px;
    font-size: 0.75rem;
  }
`;
