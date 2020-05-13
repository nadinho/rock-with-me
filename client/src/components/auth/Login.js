import React from "react";
import styled from "@emotion/styled";
import colors from "../../utils/colors";

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
  const { login, logout, authenticatedUser } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [register, setRegister] = React.useState(false);

  const [loginUser, { status: loginStatus, error: loginError }] = useMutation(
    login,
    {
      onSuccess: () => {
        history.push(`/profile`);
      },
    }
  );

  const [logoutUser] = useMutation(logout, {
    onSuccess: () => {
      history.push("/");
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

  async function handleLogout() {
    await logoutUser();
  }

  const handleSignupClick = () => {
    setRegister(true);
  };

  return (
    <>
      {authenticatedUser && (
        <>
          {loginStatus && (
            <StatusAuth>
              <div>Du bist bereits eingeloggt.</div>
              <a href="/home">Home</a>
              <button onClick={handleLogout}>Logout</button>
            </StatusAuth>
          )}
        </>
      )}
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
            {loginError && <Error>{loginError.message}</Error>}
            <ButtonContainer>
              <ButtonFull>Login</ButtonFull>

              <small>
                Noch keinen Account?&nbsp;
                <StyledLink to="#" onClick={handleSignupClick}>
                  <u>Jetzt registrieren.</u>
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
  margin-top: 25px;
  display: flex;
  justify-content: center;

  width: 100%;
  height: 40%;
`;

const Error = styled.div`
  padding: 10px;
`;

const StatusAuth = styled.div`
  margin: 0 auto;
  width: 80%;
  margin-top: 40px;
  background: ${colors.gradientOne};
  border-radius: 5px;
  padding: 30px;
  text-align: center;
`;
