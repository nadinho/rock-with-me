import styled from "@emotion/styled";
import React from "react";

import { Card } from "./Card";
import ProfilePictures from "../ProfilePictures";
import { RowContainer } from "./RowContainer";
import { Title } from "./Title";
import { CardButton } from "./CardButton";

export default function ConcertCardSmall() {
  return (
    <>
      <Picture
        size="small"
        src={
          "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
        }
      />
      <Card size="small">
        <Title size="small">Love A</Title>
        <TextContainer>
          <Date>25. November 2020</Date>
          <Location>Gebäude 9, Köln</Location>
        </TextContainer>
        <RowContainer>
          <Mitrocker>Mitrocker</Mitrocker>
          <RowContainer>
            <Buddies src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1543&q=80"></Buddies>
            <Buddies src="https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"></Buddies>
            <Buddies src="https://images.unsplash.com/photo-1554780336-390462301acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"></Buddies>
          </RowContainer>
        </RowContainer>

        <CardButton size="small">Mehr</CardButton>
      </Card>
    </>
  );
}

const Picture = styled(ProfilePictures)`
  position: relative;
  top: 25px;
  left: 10px;
`;

const TextContainer = styled.div`
  line-height: 3px;
  margin: 5px 0 10px 0;
`;

const Date = styled.p`
  font-size: 0.65rem;
  font-weight: 400;
`;
const Location = styled.p`
  font-size: 0.65rem;
  font-weight: 400;
`;

const Mitrocker = styled.p`
  margin-right: 10px;
  font-size: 0.65rem;
  font-weight: 900;
  text-transform: uppercase;
  align-self: flex-start;
`;

const Buddies = styled.img`
  border-radius: 100px;
  height: 16px;
  width: 16px;
  margin: -3px;
`;
