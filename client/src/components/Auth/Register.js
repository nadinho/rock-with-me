import React from "react";
import { useHistory } from "react-router-dom";

import { Form } from "../../components/forms/Form";
import { Input } from "../../components/forms/Input";
import { FloatingLabel } from "../../components/forms/FloatingLabel";
import { ButtonFull } from "../../components/buttons/ButtonFull";
import { Wrapper } from "../../components/forms/Wrapper";

import { registerUser } from "../../api/users";

export default function Register() {
  const history = useHistory();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const userInput = {
      name,
      email,
      password,
    };
    await registerUser(userInput);
    alert("Juhu, du hast jetzt einen Account! Bitte logge dich ein.");
    history.push("/auth/login");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <Input
          autoComplete="name"
          required
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <FloatingLabel>Gib deinen Namen ein</FloatingLabel>
      </Wrapper>
      <Wrapper>
        <Input
          autoComplete="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <FloatingLabel>Gib deine E-Mail-Adresse ein</FloatingLabel>
      </Wrapper>
      <Wrapper>
        <Input
          autoComplete="password"
          required
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <FloatingLabel>Wähle ein Passwort</FloatingLabel>
      </Wrapper>

      <ButtonFull>Signup</ButtonFull>
    </Form>
  );
}
