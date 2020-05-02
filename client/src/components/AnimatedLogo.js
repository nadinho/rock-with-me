import React from "react";
import styled from "@emotion/styled";
import colors from "../utils/colors";
import { MusicNote } from "../assets/MusicNote";
import { fadeInUp } from "../utils/animations";

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
  animation: ${fadeInUp} ease-in 1000ms;
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
