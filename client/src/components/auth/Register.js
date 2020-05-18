import React from "react";
import styled from "@emotion/styled";

import { Form } from "../../components/forms/Form";
import { Input } from "../../components/forms/Input";
import { FloatingLabel } from "../../components/forms/FloatingLabel";
import { ButtonFull } from "../../components/buttons/ButtonFull";
import { Wrapper } from "../../components/forms/Wrapper";

import { useMutation } from "react-query";
import { registerUser } from "../../api/users";
import Login from "./Login";

import { store } from "react-notifications-component";

export default function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [login, setLogin] = React.useState(false);

  const [createUser, { error: registerError }] = useMutation(registerUser, {
    onSuccess: () => {
      store.addNotification({
        title: "Yaaay! Account erstellt!",
        message: "Bitte logge dich jetzt ein",
        type: "success",
        container: "top-right",
        dismiss: {
          duration: 3000,
          showIcon: true,
        },
        slidingExit: {
          duration: 800,
          timingFunction: "ease-out",
          delay: 0,
        },
      });
      setLogin(true);
    },
  });

  async function handleRegisterClick(event) {
    event.preventDefault();

    const userInput = {
      name,
      email,
      password,
    };
    await createUser(userInput);
  }

  return (
    <>
      <>
        {!login && (
          <Form onSubmit={handleRegisterClick} autoFill="on" autoComplete="on">
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
            {registerError && <Error>{registerError.message}</Error>}
          </Form>
        )}
      </>
      <>{login && <Login />}</>
    </>
  );
}

const Error = styled.div`
  padding: 10px;
`;
