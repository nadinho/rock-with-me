import React from "react";
import GoBackHeader from "../components/GoBackHeader";
import { IntroductionHeading } from "../components/textStyling/IntroductionHeading";
import { IntroductionText } from "../components/textStyling/IntroductionText";
import { TextContainer } from "../components/textStyling/TextContainer";
import RequestForm from "../components/RequestForm";

function NewRequest() {
  return (
    <>
      <GoBackHeader></GoBackHeader>
      <TextContainer>
        <IntroductionHeading>Keine Lust alleine zu gehen?</IntroductionHeading>
        <IntroductionText>
          Teil der Community mit, auf welches Konzert du gehen willst und finde
          die perfekte Begleitung für ein klasse Erlebnis!
        </IntroductionText>
      </TextContainer>
      <RequestForm></RequestForm>
    </>
  );
}

export default NewRequest;
