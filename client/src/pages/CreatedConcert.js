import React from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

import Location from "../assets/icons/location.png";
import Date from "../assets/icons/date.png";
import Euro from "../assets/icons/euro.png";
import Train from "../assets/icons/train.png";
import GoBackHeader from "../components/header/GoBackHeader";

import { InfoContainer } from "../components/cards/InfoContainer";
import { Divider } from "../components/Divider";
import { RowContainer } from "../components/cards/RowContainer";
import { Title } from "../components/cards/Title";
import { ButtonFull } from "../components/buttons/ButtonFull";
import { ButtonContainer } from "../components/buttons/ButtonContainer";
import { DetailTextContainer } from "../components/cards/DetailTextContainer";
import UserCard from "../components/User/UserCard";
import useGetConcert from "../hooks/useGetConcert";

export default function CreateConcert() {
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
      <Title size="big">{concert.artist}</Title>

      <Divider />

      <InfoContainer>
        <DetailsItem>
          <Icon src={Date} />
          <p>{concert.date}</p>
        </DetailsItem>

        <DetailsItem>
          <Icon src={Train} />
          <p>{concert.arrival}</p>
        </DetailsItem>

        <DetailsItem>
          <Icon src={Location} />
          <p>
            {concert.location}, {concert.city}
          </p>
        </DetailsItem>

        <DetailsItem>
          <Icon src={Euro} />
          <p>{concert.price}</p>
        </DetailsItem>
      </InfoContainer>

      <Divider />

      <RowContainer>
        <UserCard />
        <DetailTextContainer>{concert.detailText}</DetailTextContainer>
      </RowContainer>

      <ButtonContainer>
        <ButtonFull>Bearbeiten</ButtonFull>
      </ButtonContainer>
    </>
  );
}

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
