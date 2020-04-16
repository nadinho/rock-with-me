import styled from "@emotion/styled";
import React from "react";
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
      <Div>
        <Input
          required
          value={artist}
          onChange={(event) => {
            setArtist(event.target.value);
          }}
        />
        <FloatingLabel>Band/Künstler</FloatingLabel>
      </Div>
      <Div>
        <Input
          required
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
        <FloatingLabel>Datum</FloatingLabel>
      </Div>
      <Div>
        <Input
          required
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
        <FloatingLabel>Location</FloatingLabel>
      </Div>
      <Div>
        <Input
          required
          value={city}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
        <FloatingLabel>Stadt</FloatingLabel>
      </Div>
      <Div>
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
      </Div>
      <Div>
        <Input
          required
          type="number"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <FloatingLabel>Ticketpreis</FloatingLabel>
      </Div>
      <Div>
        <Textarea
          required
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <FloatingLabel>Hier kommt dein Text rein</FloatingLabel>
      </Div>
      <ButtonFull>Absenden</ButtonFull>
    </Form>
  );
}

const Div = styled.div`
  position: relative;
`;

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
