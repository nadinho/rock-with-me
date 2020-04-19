import React from "react";
import FloatingInput from "./FloatingInput";
import PropTypes from "prop-types";
import FloatingTextArea from "./FloatingTextArea";
import { Select } from "./Select";
import { Form } from "./Form";

export default function RequestForm({
  artist,
  date,
  location,
  city,
  arrival,
  price,
  text,
}) {
  return (
    <Form type="submit">
      <FloatingInput value={artist}>Band/Künstler</FloatingInput>
      <FloatingInput type="date" value={date}>
        Veranstaltungsdatum
      </FloatingInput>
      <FloatingInput value={location}>Veranstaltungsort</FloatingInput>
      <FloatingInput value={city}>Stadt</FloatingInput>
      <Select value={arrival}>
        <option value="">Wie willst du anreisen?</option>
        <option value="auto">Auto</option>
        <option value="öpnv">ÖPNV</option>
        <option value="fahrrad" label="test"></option>
        <option value="fuß">Zu Fuß</option>
        <option value="mitfahrgelegenheit">Mitfahrgelegenheit</option>
        <option value="sonstiges">Sonstiges</option>
      </Select>
      <FloatingInput value={price}>Ticketpreis</FloatingInput>
      <FloatingTextArea value={text}>Schreibe hier einen Text</FloatingTextArea>
    </Form>
  );
}

RequestForm.propTypes = {
  artist: PropTypes.string,
  date: PropTypes.number,
  location: PropTypes.string,
  city: PropTypes.string,
  arrival: PropTypes.string,
  price: PropTypes.number,
  text: PropTypes.string,
};
