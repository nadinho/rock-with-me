import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

import GoBackHeader from "../components/GoBackHeader";
import { IntroductionHeading } from "../components/textStyling/IntroductionHeading";
import { IntroductionText } from "../components/textStyling/IntroductionText";
import { TextContainer } from "../components/textStyling/TextContainer";
import FloatingTextArea from "../components/FloatingTextArea";
import { Dropdown } from "../components/Dropdown";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { FloatingLabel } from "../components/FloatingLabel";
import { ButtonFull } from "../components/ButtonFull";
import { postConcert } from "../api/concerts";

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

    const createdConcert = await postConcert(concert);
    history.push(`/concerts/${createdConcert.id}`);
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
          <Dropdown
            required
            value={arrival}
            onChange={(event) => {
              setArrival(event.target.value);
            }}
          >
            <option value="">Wie willst du anreisen?</option>
            <option value="Auto">Auto</option>
            <option value="Zug">ÖPNV</option>
            <option value="Fahrrad">Fahrrad</option>
            <option value="Fuß">Zu Fuß</option>
            <option value="Mitfahrgelegenheit">Mitfahrgelegenheit</option>
            <option value="Sonstiges">Sonstiges</option>
          </Dropdown>
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

        <ButtonFull>Absenden</ButtonFull>
      </Form>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
`;
