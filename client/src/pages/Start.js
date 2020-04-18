import React from "react";
import styled from "@emotion/styled";
import { ButtonFull } from "../components/ButtonFull";
import { ButtonOutline } from "../components/ButtonOutline";
import AnimatedLogo from "../components/AnimatedLogo";

export default function Start() {
  return (
    <>
      <AnimatedLogo />
      <TextContainer>
        <IntroductionHeading>
          Dein Lieblingskünstler ist wieder auf Tour...
        </IntroductionHeading>
        <IntroductionText>
          ... aber deine Freunde haben keine Zeit, Geld oder Lust? <br></br>Dann
          finde mit <em>ROCK WITH ME</em> die perfekte Konzertbegleitung und
          rockt zusammen ab!
        </IntroductionText>
      </TextContainer>
      <ButtonContainer>
        <ButtonFull onClick={handleOnClick}>Login</ButtonFull>
        <ButtonOutline onClick={handleOnClick}>Signup</ButtonOutline>
      </ButtonContainer>
    </>
  );
}

function handleOnClick() {
  alert("Redirect");
}

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 50px;
`;

const IntroductionHeading = styled.p`
  font-size: 1.25rem;
  animation-delay: 100ms;
  animation: fadeIn 1500ms ease-in;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

const IntroductionText = styled.p`
  font-size: 1em;
  animation: fadeIn 1500ms ease-in;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  animation-delay: 150ms;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  animation-delay: 200ms;
  animation: fadeIn 1500ms ease-in both;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
