import React from "react";
import styled from "@emotion/styled";
import { ButtonFull } from "../components/ButtonFull";
import { ButtonOutline } from "../components/ButtonOutline";

export default function Start() {
  return (
    <>
      <Logo>Rock with me</Logo>
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
  animation: fadeIn 2s ease-in both;
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

const Logo = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  margin-top: 100px;
  animation: fadeInUp ease-in 2s;
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

const IntroductionHeading = styled.p`
  font-size: 1.25rem;
  margin-top: 100px;
`;

const IntroductionText = styled.p`
  font-size: 1em;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  animation: fadeIn 2s ease-in both;
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
