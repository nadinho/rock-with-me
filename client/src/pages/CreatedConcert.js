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
  const [edit, setEdit] = React.useState(false);
  const [updatedArtist, setUpdatedArtist] = React.useState("");
  const [updatedDate, setUpdatedDate] = React.useState("");
  const [updatedArrival, setUpdatedArrival] = React.useState("");
  const [updatedLocation, setUpdatedLocation] = React.useState("");
  const [updatedCity, setUpdatedCity] = React.useState("");
  const [updatedPrice, setUpdatedPrice] = React.useState("");
  const [updatedDetailText, setUpdatedDetailText] = React.useState("");

  // needs to be outsourced
  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }
  if (isLoading) {
    return <div>Is loading...</div>;
  }

  // HANDLE EDIT
  const handleEditClick = (event) => {
    event.preventDefault();

    setUpdatedArtist(concert.artist);
    setUpdatedDetailText(concert.detailText);

    setEdit(true);
  };

  // SAVE EDIT

  const handleSaveClick = () => {
    const updatedConcert = {
      artist: updatedArtist,
      date: updatedDate,
      arrival: updatedArrival,
      location: updatedLocation,
      city: updatedCity,
      price: updatedPrice,
      detailText: updatedDetailText,
    };

    fetch(`/api/concerts/${concertId}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedConcert),
    });

    setEdit(false);
  };

  return (
    <>
      <GoBackHeader></GoBackHeader>

      {!edit && (
        <>
          <Title size="big">{concert.artist}</Title>
        </>
      )}

      {edit && (
        <>
          <EditInput
            value={updatedArtist}
            onChange={(event) => {
              setUpdatedArtist(event.target.value);
            }}
          />
        </>
      )}

      <Divider />

      <InfoContainer>
        <DetailsItem>
          <Icon src={Date} />
          {!edit && (
            <>
              <p>{concert.date}</p>
            </>
          )}
          {edit && (
            <>
              <EditInput
                value={updatedDate}
                type="date"
                onChange={(event) => {
                  setUpdatedDate(event.target.value);
                }}
              />
            </>
          )}
        </DetailsItem>

        <DetailsItem>
          <Icon src={Train} />
          {!edit && (
            <>
              <p>{concert.arrival}</p>
            </>
          )}

          {edit && (
            <>
              <EditInput
                value={updatedArrival}
                onChange={(event) => {
                  setUpdatedArrival(event.target.value);
                }}
              />
            </>
          )}
        </DetailsItem>

        <DetailsItem>
          <Icon src={Location} />
          {!edit && (
            <>
              <p>
                {concert.location}, {concert.city}
              </p>
            </>
          )}
          {edit && (
            <>
              <EditInput
                value={updatedLocation}
                onChange={(event) => {
                  setUpdatedLocation(event.target.value);
                }}
              />
              <EditInput
                value={updatedCity}
                onChange={(event) => {
                  setUpdatedCity(event.target.value);
                }}
              />
            </>
          )}
        </DetailsItem>

        <DetailsItem>
          <Icon src={Euro} />
          {!edit && (
            <>
              <p>{concert.price}</p>
            </>
          )}
          {edit && (
            <>
              <EditInput
                value={updatedPrice}
                type="number"
                onChange={(event) => {
                  setUpdatedPrice(event.target.value);
                }}
              />
            </>
          )}
        </DetailsItem>
      </InfoContainer>

      <Divider />

      <RowContainer>
        <UserCard />

        {!edit && (
          <>
            <DetailTextContainer>{concert.detailText}</DetailTextContainer>
          </>
        )}

        {edit && (
          <>
            <EditTextarea
              value={updatedDetailText}
              onChange={(event) => {
                setUpdatedDetailText(event.target.value);
              }}
            />
          </>
        )}
      </RowContainer>

      <ButtonContainer>
        {edit ? (
          <ButtonFull onClick={handleSaveClick}>Speichern</ButtonFull>
        ) : (
          <ButtonFull onClick={handleEditClick}>Bearbeiten</ButtonFull>
        )}
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

const EditInput = styled.input`
  width: 300px;
  margin: 30px 0 30px 0;
  font-size: 1rem;
  color: white;
  font-family: inherit;
  padding: 10px;
  background: none;
  border: none;
  &::-webkit-datetime-edit {
    padding-left: 80px;
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

const EditTextarea = styled.textarea`
  background: none;
  color: inherit;
  font-family: inherit;
  font-size: 1rem;
  padding: 10px;
  border: none;
  width: 70%;
  height: 200px;
`;
