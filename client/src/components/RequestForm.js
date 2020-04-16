import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "./Dropdown";
import { Input } from "./Input";
import { FloatingLabel } from "./FloatingLabel";
import { ButtonFull } from "./ButtonFull";
import { Textarea } from "./Textarea";

export default function RequestForm() {
  const [artist, setArtist] = React.useState("");
  const [date, setDate] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [city, setCity] = React.useState("");
  const [arrival, setArrival] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [text, setText] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const request = {
      artist,
      date,
      location,
      city,
      arrival,
      price,
      text,
    };

    alert(JSON.stringify(request));
  }

  return (
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
          <option value="auto">Auto</option>
          <option value="öpnv">ÖPNV</option>
          <option value="fahrrad">Fahrrad</option>
          <option value="fuß">Zu Fuß</option>
          <option value="mitfahrgelegenheit">Mitfahrgelegenheit</option>
          <option value="sonstiges">Sonstiges</option>
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
      <Wrapper>
        <Textarea
          required
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <FloatingLabel>Hier kommt dein Text rein</FloatingLabel>
      </Wrapper>
      <ButtonFull>Absenden</ButtonFull>
    </Form>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

RequestForm.propTypes = {
  artist: PropTypes.string,
  date: PropTypes.number,
  location: PropTypes.string,
  city: PropTypes.string,
  arrival: PropTypes.string,
  price: PropTypes.number,
  text: PropTypes.string,
};
