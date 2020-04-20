import React from "react";
import styled from "@emotion/styled";
import BackArrow from "../assets/icons/back-arrow.png";

export default function GoBackHeader(props) {
  return (
    <Header>
      <Button {...props}>
        <Arrow src={BackArrow} alt="Zurück" />
      </Button>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 44px;
  top: 0;
`;

const Arrow = styled.img`
  height: 24px;
  margin: 15px;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
