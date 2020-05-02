import React from "react";
import { Redirect } from "react-router-dom";

import { ButtonFull } from "../components/buttons/ButtonFull";
import { ButtonOutline } from "../components/buttons/ButtonOutline";
import { ButtonContainer } from "../components/buttons/ButtonContainer";
import AnimatedLogo from "../components/AnimatedLogo";
import { TextContainer } from "../components/textStyling/TextContainer";
import { IntroductionText } from "../components/textStyling/IntroductionText";
import { IntroductionHeading } from "../components/textStyling/IntroductionHeading";

export default function Start() {
  const [redirect, setRedirect] = React.useState(false);

  function redirectToHome() {
    setTimeout(() => setRedirect(true), 4000);
  }
  redirectToHome();
  return (
    <>
      {redirect ? <Redirect to="/home" /> : true}
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
