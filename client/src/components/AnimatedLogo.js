import React from "react";
import styled from "@emotion/styled";
import colors from "../utils/colors";
import { MusicNote } from "../assets/MusicNote";

export default function AnimatedLogo() {
  return (
    <Container>
      <MusicNote />
      <Logo>Rock with me</Logo>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeInUp ease-in 1500ms;
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 20%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;

  background: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;
