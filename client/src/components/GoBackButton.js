import React from "react";
import styled from "@emotion/styled";
import BackArrow from "../assets/icons/back-arrow.png";

export default function GoBackButton(props) {
  return (
    <Button {...props}>
      <Arrow src={BackArrow} alt="Zurück" />
    </Button>
  );
}

const Arrow = styled.img`
  height: 20px;
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;
