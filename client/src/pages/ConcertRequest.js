import React from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

import Location from "../assets/icons/location.png";
import Date from "../assets/icons/date.png";
import Euro from "../assets/icons/euro.png";
import Train from "../assets/icons/train.png";
import GoBackHeader from "../components/GoBackHeader";

import { InfoContainer } from "../components/cards/InfoContainer";
import { ContentContainer } from "../components/cards/ContentContainer";
import ProfilePictures from "../components/ProfilePictures";
import { RowContainer } from "../components/cards/RowContainer";
import { Title } from "../components/cards/Title";
import { ButtonFull } from "../components/ButtonFull";
import { ButtonContainer } from "../components/ButtonContainer";

import useGetConcert from "../hooks/useGetConcert";

export default function ConcertRequest() {
  const { concertId } = useParams();
  const { concert, isLoading, errorMessage } = useGetConcert(concertId);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }
  if (isLoading) {
    return <div>Is loading...</div>;
  }

  return (
    <>
      <GoBackHeader></GoBackHeader>
      <ContentContainer>
        <RowContainer>
          <Title size="big">{concert.artist}</Title>
        </RowContainer>

        <InfoContainer>
          <RowContainer>
            <DetailsItem>
              <Icon src={Date} />
              <Detail>{concert.date}</Detail>
            </DetailsItem>

            <DetailsItem>
              <Icon src={Train} />
              <Detail>{concert.arrival}</Detail>
            </DetailsItem>
          </RowContainer>

          <RowContainer>
            <DetailsItem>
              <Icon src={Location} />
              <Detail>
                {concert.location}, {concert.city}
              </Detail>
            </DetailsItem>

            <DetailsItem>
              <Icon src={Euro} />
              <Detail>{concert.price}</Detail>
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
          <TextContainer>{concert.detailText}</TextContainer>
        </RowContainer>
        <ButtonContainer>
          <ButtonFull>Nachricht an Selina</ButtonFull>
        </ButtonContainer>
      </ContentContainer>
    </>
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
