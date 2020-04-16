import styled from "@emotion/styled";
import React from "react";
import { Dropdown } from "./Dropdown";
import { Input } from "./Input";
import { FloatingLabel } from "./FloatingLabel";

export default function RequestForm() {
  return (
    <Form type="submit">
      <Div>
        <Input required></Input>
        <FloatingLabel>Band/Künstler</FloatingLabel>
      </Div>
      <Div>
        <Input required />
        <FloatingLabel>Datum</FloatingLabel>
      </Div>
      <Div>
        <Input required />
        <FloatingLabel>Location</FloatingLabel>
      </Div>
      <Div>
        <Input required />
        <FloatingLabel>Stadt</FloatingLabel>
      </Div>

      <Dropdown required>
        <option value="">Wie willst du anreisen?</option>
        <option value="auto">Auto</option>
        <option value="öpnv">ÖPNV</option>
        <option value="fahrrad">Fahrrad</option>
        <option value="fuß">Zu Fuß</option>
        <option value="mitfahrgelegenheit">Mitfahrgelegenheit</option>
        <option value="sonstiges">Sonstiges</option>
      </Dropdown>

      <Div>
        <Input required />
        <FloatingLabel>Ticketpreis</FloatingLabel>
      </Div>
      <Div>
        <Input required />
        <FloatingLabel>Dein Text</FloatingLabel>
      </Div>
    </Form>
  );
}

const Div = styled.div`
  position: relative;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
