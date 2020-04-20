import styled from "@emotion/styled";
import React from "react";

import { InfoContainer } from "./InfoContainer";
import { Card } from "./Card";
import { ContentContainer } from "./ContentContainer";
import ProfilePictures from "../ProfilePictures";
import { RowContainer } from "./RowContainer";
import { Title } from "./Title";
import { CardButton } from "./CardButton";

import Location from "../../assets/icons/location.png";
import Date from "../../assets/icons/date.png";
import Euro from "../../assets/icons/euro.png";
import Train from "../../assets/icons/train.png";

export default function ConcertCardBig() {
  return (
    <Card size="big">
      <ContentContainer>
        <RowContainer>
          <Title size="big">Love A</Title>
          <ProfilePictures
            size="big"
            src={
              "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
            }
            alt="Profil"
          />
        </RowContainer>

        <InfoContainer>
          <RowContainer>
            <DetailsItem>
              <Icon src={Date} />
              <Detail>25. November 2020</Detail>
            </DetailsItem>

            <DetailsItem>
              <Icon src={Train} />
              <Detail>Anreise mit Zug</Detail>
            </DetailsItem>
          </RowContainer>

          <RowContainer>
            <DetailsItem>
              <Icon src={Location} />
              <Detail>Gebäude 9, Köln</Detail>
            </DetailsItem>

            <DetailsItem>
              <Icon src={Euro} />
              <Detail>34 Euro</Detail>
            </DetailsItem>
          </RowContainer>
        </InfoContainer>

        <MitrockerContainer>
          <Mitrocker>Mitrocker</Mitrocker>
          <RowContainer>
            <Buddies src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1543&q=80"></Buddies>
            <Buddies src="https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"></Buddies>
            <Buddies src="https://images.unsplash.com/photo-1554780336-390462301acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"></Buddies>
          </RowContainer>
        </MitrockerContainer>

        <CardButton size="big">Mehr</CardButton>
      </ContentContainer>
    </Card>
  );
}

const MitrockerContainer = styled.div`
  display: flex;
`;

const Icon = styled.img`
  height: 12px;
  width: 12px;
  margin-right: 7px;
`;

const DetailsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Detail = styled.p`
  font-weight: 400;
`;

const Mitrocker = styled.p`
  margin-right: 10px;
  font-weight: 900;
  text-transform: uppercase;
`;

const Buddies = styled.img`
  border-radius: 100px;
  height: 24px;
  width: 24px;
  margin: -3px;
`;
