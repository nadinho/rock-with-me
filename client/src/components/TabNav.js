import styled from "@emotion/styled";
import React from "react";
import Home from "../icons/home.png";
import Konzerte from "../icons/star.png";
import Profil from "../icons/user-profile.png";
import Messages from "../icons/speech-bubble.png";

const TabBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #212330;
  width: 100%;
  height: 69;
  position: fixed;
  bottom: 0;
`;

const IconText = styled.p`
  font-size: 0.65rem;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  position: relative;
  top: -2px;
`;

const Img = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  top: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  &:active {
    background: linear-gradient(50deg, #00a8ff, #ad00a4);
  }
`;

export default function TabNav() {
  return (
    <TabBar>
      <Container>
        <Img src={Home} alt="Logo" />
        <IconText>Home</IconText>
      </Container>
      <Container>
        <Img src={Konzerte} alt="Konzerte" />
        <IconText>Konzerte</IconText>
      </Container>
      <Container>
        <Img src={Messages} alt="Messages" />
        <IconText>Messages</IconText>
      </Container>
      <Container>
        <Img src={Profil} alt="Profil" />
        <IconText>Profil</IconText>
      </Container>
    </TabBar>
  );
}
