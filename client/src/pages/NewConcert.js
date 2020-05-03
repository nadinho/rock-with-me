import React from "react";
import { useHistory } from "react-router-dom";

import GoBackHeader from "../components/header/GoBackHeader";
import { IntroductionHeading } from "../components/textStyling/IntroductionHeading";
import { IntroductionText } from "../components/textStyling/IntroductionText";
import { TextContainer } from "../components/textStyling/TextContainer";
import FloatingTextArea from "../components/forms/FloatingTextArea";
import ArrivalDropdown from "../components/forms/ArrivalDropdown";
import { Form } from "../components/forms/Form";
import { Input } from "../components/forms/Input";
import { FloatingLabel } from "../components/forms/FloatingLabel";
import { ButtonFull } from "../components/buttons/ButtonFull";
import { postConcert } from "../api/concerts";
import { Wrapper } from "../components/forms/Wrapper";
import { ButtonContainer } from "../components/buttons/ButtonContainer";

export default function NewConcert() {
  const history = useHistory();
  const [artist, setArtist] = React.useState("");
  const [date, setDate] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [city, setCity] = React.useState("");
  const [arrival, setArrival] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [detailText, setDetailText] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const concert = {
      artist,
      date,
      location,
      city,
      arrival,
      price,
      detailText,
    };

    const createdConcertId = await postConcert(concert);
    history.push(`/concerts/${createdConcertId}`);
  }

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
      <Form onSubmit={handleSubmit}>
        <Wrapper>
          <Input
            required
            value={artist}
            onChange={(event) => {
              setArtist(event.target.value);
            }}
          />
          <FloatingLabel>Band/Künstler</FloatingLabel>
        </Wrapper>
        <Wrapper>
          <Input
            required
            type="date"
            value={date}
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
          <FloatingLabel>Datum</FloatingLabel>
        </Wrapper>
        <Wrapper>
          <Input
            required
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
          <FloatingLabel>Veranstaltungsort</FloatingLabel>
        </Wrapper>
        <Wrapper>
          <Input
            required
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
          <FloatingLabel>Stadt</FloatingLabel>
        </Wrapper>
        <Wrapper>
          <ArrivalDropdown
            value={arrival}
            onChange={(event) => {
              setArrival(event.target.value);
            }}
          ></ArrivalDropdown>
        </Wrapper>
        <Wrapper>
          <Input
            required
            type="number"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <FloatingLabel>Ticketpreis</FloatingLabel>
        </Wrapper>

        <FloatingTextArea
          required
          value={detailText}
          onChange={(event) => {
            setDetailText(event.target.value);
          }}
        >
          Platz für Details
        </FloatingTextArea>

        <ButtonContainer>
          <ButtonFull>Absenden</ButtonFull>
        </ButtonContainer>
      </Form>
    </>
  );
}
