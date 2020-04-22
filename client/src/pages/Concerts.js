import React from "react";

import PageHeader from "../components/header/PageHeader";
import { IntroductionHeading } from "../components/textStyling/IntroductionHeading";
import { IntroductionText } from "../components/textStyling/IntroductionText";
import { TextContainer } from "../components/textStyling/TextContainer";
import { ButtonFull } from "../components/buttons/ButtonFull";
import { ButtonContainer } from "../components/buttons/ButtonContainer";
import { GridArea } from "../components/cards/GridArea";
import GridConcertCard from "../components/cards/GridConcertCard";
import { StyledLink } from "../components/StyledLink";

export default function Concerts() {
  return (
    <>
      <PageHeader>Konzerte</PageHeader>
      <TextContainer>
        <IntroductionHeading>
          Auf der Suche nach Mitrockern?
        </IntroductionHeading>
        <IntroductionText>
          Hier findest du alle aktuellen Suchen auf einen Blick. Planst du
          selbst noch ein Konzert, für das du nette Mitrocker suchst? Dann
          klicke ganz einfach auf den Button!
        </IntroductionText>
      </TextContainer>
      <StyledLink to="/newconcert">
        <ButtonContainer>
          <ButtonFull>Let&apos;s go</ButtonFull>
        </ButtonContainer>
      </StyledLink>

      <GridArea>
        <GridConcertCard />
        <GridConcertCard />
        <GridConcertCard />
        <GridConcertCard />
        <GridConcertCard />
        <GridConcertCard />
        <GridConcertCard />
      </GridArea>
    </>
  );
}
