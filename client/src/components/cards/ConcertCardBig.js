import styled from "@emotion/styled";
import React from "react";

import { InfoContainer } from "./InfoContainer";
import { Card } from "./Card";
import ProfilePictures from "../ProfilePictures";
import { TitleUnderline } from "./Title";

import { CardButton } from "./CardButton";

import Location from "../../assets/icons/location.png";
import Date from "../../assets/icons/date.png";
import Euro from "../../assets/icons/euro.png";
import Train from "../../assets/icons/train.png";

export default function ConcertCardBig() {
  return (
    <Card size="big">
      <Wrapper>
        <TitleUnderline size="big">Love A</TitleUnderline>
        <ProfilePictures
          size="big"
          src={
            "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
          }
          alt="Profil"
        />
      </Wrapper>

      <InfoContainer>
        <DetailsItem>
          <Icon src={Date} />
          <p>25. November 2020</p>
        </DetailsItem>

        <DetailsItem>
          <Icon src={Train} />
          <p>Anreise mit Zug</p>
        </DetailsItem>

        <DetailsItem>
          <Icon src={Location} />
          <p>Gebäude 9, Köln</p>
        </DetailsItem>

        <DetailsItem>
          <Icon src={Euro} />
          <p>34 Euro</p>
        </DetailsItem>
      </InfoContainer>

      <Wrapper>
        <MitrockerContainer>
          <Mitrocker>Mitrocker</Mitrocker>
          <ProfilePictures
            size="small"
            src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1543&q=80"
          />
          <ProfilePictures
            size="small"
            src="https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
          />
          <ProfilePictures
            size="small"
            src="https://images.unsplash.com/photo-1554780336-390462301acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
          />
        </MitrockerContainer>
        <CardButton size="big">Mehr</CardButton>
      </Wrapper>
    </Card>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const MitrockerContainer = styled.div`
  display: flex;
  align-items: center;
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

const Mitrocker = styled.p`
  margin-right: 15px;
  font-weight: 500;
  text-transform: uppercase;
`;
