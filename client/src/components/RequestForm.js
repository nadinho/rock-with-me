import styled from "@emotion/styled";
import React from "react";
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
      <Div>
        <Input required />
        <FloatingLabel>Anfahrt</FloatingLabel>
      </Div>
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
  width: 80%;
  display: flex;
  flex-direction: column;
`;
