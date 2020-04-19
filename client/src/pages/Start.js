import React from "react";
import { ButtonFull } from "../components/ButtonFull";
import { ButtonOutline } from "../components/ButtonOutline";
import { ButtonContainer } from "../components/ButtonContainer";
import AnimatedLogo from "../components/AnimatedLogo";
import { TextContainer } from "../components/textStyling/TextContainer";
import { IntroductionText } from "../components/textStyling/IntroductionText";
import { IntroductionHeading } from "../components/textStyling/IntroductionHeading";

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
