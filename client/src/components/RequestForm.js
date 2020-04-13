import styled from "@emotion/styled";
import React from "react";
import colors from "../utils/colors";

export default function ConcertCardBig() {
  return (
    <Form type="submit">
      <Div>
        <Label>Band/Künstler</Label>
        <Input type="text" placeholder=""></Input>
      </Div>
      <Div>
        <Label>Datum</Label>
        <Input type="date" placeholder=""></Input>
      </Div>
      <Div>
        <Label>Location</Label>
        <Input type="text" placeholder=""></Input>
      </Div>
      <Div>
        <Label>Stadt</Label>
        <Input type="text" placeholder=""></Input>
      </Div>
      <Div>
        <Label>Anfahrt</Label>
        <Input type="text" placeholder=""></Input>
      </Div>
      <Div>
        <Label>Ticketpreis</Label>
        <Input type="text" placeholder=""></Input>
      </Div>
      <Div>
        <Label>Dein Text</Label>
        <Input type="text" placeholder=""></Input>
      </Div>
    </Form>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 13px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  color: ${colors.primaryText};
`;

const Input = styled.input`
  margin: 10px;

  border-right: 2px solid transparent;
  border-image: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
  border-image-slice: 1;
  font-family: "Montserrat", sans-serif;
  background: transparent;
  background-size: 10px 100%;
  background-position: 0 0, 100% 0;
  background-repeat: no-repeat;
  outline: none;

  font-size: 1rem;
  color: ${colors.primaryText};
  padding: 10px;

  caret-color: red;

  ::placeholder {
    color: ${colors.primaryText};
    opacity: 0.6;
  }
`;
