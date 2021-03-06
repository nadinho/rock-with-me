import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import FloatingTextArea from "./FloatingTextArea";
import ArrivalDropdown from "./ArrivalDropdown";
import { Form } from "./Form";
import { Input } from "./Input";
import { FloatingLabel } from "./FloatingLabel";
import { ButtonFull } from "../buttons/ButtonFull";

export default function RequestForm() {
  const [artist, setArtist] = React.useState("");
  const [date, setDate] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [city, setCity] = React.useState("");
  const [arrival, setArrival] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [detailText, setDetailText] = React.useState("");

  function handleSubmit(event) {
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

    alert(concert);
  }

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

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
        <ArrivalDropdown
          required
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

      <ButtonFull>Absenden</ButtonFull>
    </Form>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

RequestForm.propTypes = {
  artist: PropTypes.string,
  date: PropTypes.number,
  location: PropTypes.string,
  city: PropTypes.string,
  arrival: PropTypes.string,
  price: PropTypes.number,
  detailText: PropTypes.string,
};
