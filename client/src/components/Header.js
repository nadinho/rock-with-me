import styled from "@emotion/styled";
import React from "react";
import Logo from "../icons/platzhalter-logo.png";
import buddyRequest from "../icons/add-icon.png";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #212330;
  width: 100%;
  height: 44px;
  position: fixed;
  top: 0;
`;

const PageHeading = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;

  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
`;

const Img = styled.img`
  height: 18px;
`;

export default function PageHeader(props) {
  return (
    <Header>
      <Img src={Logo} alt="Logo" />
      <PageHeading {...props}></PageHeading>
      <Img src={buddyRequest} alt="Buddy request" />
    </Header>
  );
}
