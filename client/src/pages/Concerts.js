import React from "react";

import PageHeader from "../components/header/PageHeader";
import { IntroductionHeading } from "../components/textStyling/IntroductionHeading";
import { IntroductionText } from "../components/textStyling/IntroductionText";
import { TextContainer } from "../components/textStyling/TextContainer";
import { ButtonFull } from "../components/buttons/ButtonFull";
import { ButtonContainer } from "../components/buttons/ButtonContainer";
import { GridArea } from "../components/concerts/GridArea";
import { StyledLink } from "../components/StyledLink";
import useGetConcerts from "../hooks/useGetConcerts";
import { ConcertList } from "../components/concerts/ConcertList";

export default function Concerts() {
  const concerts = useGetConcerts();

  return (
    <>
      <PageHeader>Konzerte</PageHeader>
      {!concerts && "Loading..."}
      {concerts && (
        <>
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
            <ConcertList concerts={concerts} />
          </GridArea>
        </>
      )}
    </>
  );
}
