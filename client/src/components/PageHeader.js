import styled from "@emotion/styled";
import React from "react";
import Logo from "../assets/icons/platzhalter-logo.png";
import BuddyRequest from "../assets/icons/add-icon.png";

export default function PageHeader(props) {
  return (
    <Header>
      <Img src={Logo} alt="Logo" />
      <PageHeading {...props}></PageHeading>
      <Img src={BuddyRequest} alt="Buddy request" />
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 44px;
  position: fixed;
  top: 0;
`;

const PageHeading = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const Img = styled.img`
  height: 18px;
`;
