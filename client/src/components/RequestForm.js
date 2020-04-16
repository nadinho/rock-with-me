import styled from "@emotion/styled";
import React from "react";
import colors from "../utils/colors";
import { Input } from "./Input";

export default function RequestForm() {
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
