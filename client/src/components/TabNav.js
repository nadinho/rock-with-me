import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import Home from "../assets/icons/home.png";
import Konzerte from "../assets/icons/star.png";
import Profil from "../assets/icons/user-profile.png";
import Messages from "../assets/icons/speech-bubble.png";
import colors from "../utils/colors";

export default function TabNav() {
  return (
    <TabBar>
      <StyledLink to="/home">
        <Img src={Home} alt="Logo" />
        <IconText>Home</IconText>
      </StyledLink>

      <StyledLink to="/concerts">
        <Img src={Konzerte} alt="Konzerte" />
        <IconText>Konzerte</IconText>
      </StyledLink>

      <StyledLink to="/messages">
        <Img src={Messages} alt="Messages" />
        <IconText>Messages</IconText>
      </StyledLink>

      <StyledLink to="/profile">
        <Img src={Profil} alt="Profil" />
        <IconText>Profil</IconText>
      </StyledLink>
    </TabBar>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 25%;
  flex-direction: column;
  align-items: center;
  &:focus,
  &:hover,
  &:visited,
  &:link {
    text-decoration: none;
    color: ${colors.primaryText};
  }
  &:active {
    background: linear-gradient(
      50deg,
      ${colors.gradientOne},
      ${colors.gradientTwo}
    );
  }
`;

const TabBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${colors.background};
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const IconText = styled.p`
  font-size: 0.65rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const Img = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  top: 6px;
`;
