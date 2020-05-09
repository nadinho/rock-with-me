import React from "react";
import styled from "@emotion/styled";
import { CardButton } from "../concerts/CardButton";
import ProfilePicture from "../user/ProfilePicture";
import { zoomIn } from "../../utils/animations";

function UserCard() {
  return (
    <Card>
      <ProfilePicture
        size="big"
        src={"https://i.pravatar.cc/150?img=30"}
        alt="User"
      ></ProfilePicture>
      <Wrapper>
        <Name>Anna</Name>
        <p>24, Berlin</p>
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
  animation: ${zoomIn} 0.8s ease-in;
`;

const Name = styled.h1`
  font-size: 1rem;
  font-weight: 500;
`;

const Wrapper = styled.div`
  line-height: 2px;
`;
