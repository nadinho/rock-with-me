import React from "react";
import styled from "@emotion/styled";
import { StyledLink } from "../../components/StyledLink";
import { useHistory } from "react-router-dom";

import { Form } from "../../components/forms/Form";
import { Input } from "../../components/forms/Input";
import { FloatingLabel } from "../../components/forms/FloatingLabel";
import { ButtonContainer } from "../../components/buttons/ButtonContainer";
import { ButtonFull } from "../../components/buttons/ButtonFull";
import { ButtonOutline } from "../../components/buttons/ButtonOutline";
import { Wrapper } from "../../components/forms/Wrapper";

import Register from "./Register";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [register, setRegister] = React.useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    history.push("/profile");
  }

  const handleSignupClick = () => {
    setRegister(true);
  };

  return (
    <ModalContainer>
      {!register && (
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
          <ButtonContainer>
            <ButtonFull>Login</ButtonFull>

            <StyledLink to="/home">
              <ButtonOutline type="button">Ohne Login weiter</ButtonOutline>
            </StyledLink>

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
  );
}

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  width: 80%;
  height: 40%;
`;
