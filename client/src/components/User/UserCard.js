import React from "react";
import styled from "@emotion/styled";
import { CardButton } from "../cards/CardButton";
import ProfilePictures from "../ProfilePictures";
import { zoomIn } from "../../utils/animations";

function UserCard() {
  return (
    <Card>
      <ProfilePictures
        size="big"
        src={
          "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
        }
        alt="User"
      ></ProfilePictures>
      <Wrapper>
        <Name>Selina</Name>
        <p>24, Bochum</p>
      </Wrapper>
      <CardButton size="small">Profil</CardButton>
    </Card>
  );
}

export default UserCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6%;
  padding: 20px;
  font-size: 0.8rem;
  animation: ${zoomIn} 1000ms ease-in;
`;

const Name = styled.h1`
  font-size: 1rem;
  font-weight: 500;
`;

const Wrapper = styled.div`
  line-height: 2px;
`;
