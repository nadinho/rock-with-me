import styled from "@emotion/styled";
import React from "react";
import colors from "../utils/colors";
import Arrow from "../icons/arrow-right.png";

export default function PageHeader() {
  return (
    <Container>
      <MessageInput placeholder="Gib hier deine Nachricht ein..."></MessageInput>
      <SendButton>
        <SendArrow src={Arrow} />
      </SendButton>
    </Container>
  );
}

const SendArrow = styled.img`
  height: 18px;
  width: 18px;
`;

const Container = styled.div`
  position: fixed;
  background: #444757;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MessageInput = styled.input`
  width: 90%;
  background: none;
  outline: none;
  border: none;
  font-size: 0.8rem;
  color: ${colors.primaryText};
  font-family: "Montserrat", sans-serif;
  ::placeholder {
    color: ${colors.primaryText};
  }
`;

const SendButton = styled.div`
  padding: 8px 10px;
  border-radius: 100%;
  background: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
`;
