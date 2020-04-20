import styled from "@emotion/styled";
import React from "react";
import Location from "../../assets/icons/location.png";
import Date from "../../assets/icons/date.png";
import Euro from "../../assets/icons/euro.png";
import Train from "../../assets/icons/train.png";

import { InfoContainer } from "./InfoContainer";
import { ContentContainer } from "./ContentContainer";
import ProfilePictures from "../ProfilePictures";
import { RowContainer } from "./RowContainer";
import { Title } from "./Title";
import { ButtonFull } from "../ButtonFull";
import { ButtonContainer } from "../ButtonContainer";

export default function ConcertCardSingle() {
  return (
    <ContentContainer>
      <RowContainer>
        <Title size="big">Love A</Title>
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

      <RowContainer>
        <ProfilePictures
          size="big"
          src={
            "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
          }
          alt="Profil"
        />
        <TextContainer>
          Hallo zusammen, nachdem es schon öfters in der Vergangenheit geklappt
          hat suche ich wieder eine Begleitung, diesmal für die großartigen Love
          A! Das Konzert findet in Köln statt, ich selbst komme aus Bochum und
          würde mit der Bahn anreisen. Cool wäre es, wenn man auch ein Stück
          zusammenfahren würde.
        </TextContainer>
      </RowContainer>
      <ButtonContainer>
        <ButtonFull>Nachricht an Selina</ButtonFull>
      </ButtonContainer>
    </ContentContainer>
  );
}

const TextContainer = styled.div`
  width: 65%;
  margin: 20px 30px 0 20px;
  text-align: justify;
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
