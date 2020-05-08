import React from "react";
import styled from "@emotion/styled";
import { StyledLink } from "../../components/StyledLink";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";

import { Form } from "../../components/forms/Form";
import { Input } from "../../components/forms/Input";
import { FloatingLabel } from "../../components/forms/FloatingLabel";
import { ButtonContainer } from "../../components/buttons/ButtonContainer";
import { ButtonFull } from "../../components/buttons/ButtonFull";
import { Wrapper } from "../../components/forms/Wrapper";

import Register from "./Register";

import useAuth from "../../contexts/useAuth";

export default function Login() {
  const history = useHistory();
  const { login, authenticatedUser } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [register, setRegister] = React.useState(false);

  const [loginUser, { error: loginError }] = useMutation(login, {
    onSuccess: () => {
      history.push("/home");
    },
  });

  async function handleLogin(event) {
    event.preventDefault();

    const userInput = {
      email,
      password,
    };

    await loginUser(userInput);
  }

  const handleSignupClick = () => {
    setRegister(true);
  };

  return (
    <>
      {authenticatedUser && <Status>Du bist bereits eingeloggt.</Status>}
      <ModalContainer>
        {!register && !authenticatedUser && (
          <Form onSubmit={handleLogin}>
            <Wrapper>
              <Input
                autoComplete="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <FloatingLabel>Deine E-Mail-Adresse</FloatingLabel>
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
              <FloatingLabel>Dein Passwort</FloatingLabel>
            </Wrapper>
            {loginError && <Error>{"nope"}</Error>}
            <ButtonContainer>
              <ButtonFull>Login</ButtonFull>

              <small>
                Noch keinen Account?&nbsp;
                <StyledLink to="#" onClick={handleSignupClick}>
                  Jetzt registrieren.
                </StyledLink>
              </small>
            </ButtonContainer>
          </Form>
        )}
        {register && <Register />}
      </ModalContainer>
    </>
  );
}

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  width: 100%;
  height: 40%;
`;

// will be replaced by toasts
const Error = styled.div`
  padding: 10px;
`;

// will be replaced by toasts
const Status = styled.div`
  margin-top: 20px;
  border: 2px solid red;
  padding: 10px;
  text-align: center;
`;
