import React from "react";

import AnimatedLogo from "../components/AnimatedLogo";
import { ButtonFull } from "../components/buttons/ButtonFull";
import { ButtonContainer } from "../components/buttons/ButtonContainer";
import { TextContainer } from "../components/textStyling/TextContainer";
import { IntroductionText } from "../components/textStyling/IntroductionText";
import { IntroductionHeading } from "../components/textStyling/IntroductionHeading";
import Login from "../components/auth/Login";

export default function Start() {
  const [login, setLogin] = React.useState(false);

  const handleLoginClick = () => {
    setLogin(true);
  };

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

      {!login && (
        <ButtonContainer>
          <ButtonFull onClick={handleLoginClick}>Getting started</ButtonFull>
        </ButtonContainer>
      )}
      {login && <Login />}
    </>
  );
}
