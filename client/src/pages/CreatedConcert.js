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
import { EditTitle } from "../components/forms/EditTitle";
import { EditInput } from "../components/forms/EditInput";
import EditArrivalDropdown from "../components/forms/EditArrivalDropdown";
import { EditTextarea } from "../components/forms/EditTextarea";
import useGetConcert from "../hooks/useGetConcert";
import { patchConcert } from "../api/concerts";

export default function CreateConcert() {
  const { concertId } = useParams();
  const { concert, isLoading } = useGetConcert(concertId);
  const [edit, setEdit] = React.useState(false);
  const [updatedArtist, setUpdatedArtist] = React.useState("");
  const [updatedDate, setUpdatedDate] = React.useState("");
  const [updatedArrival, setUpdatedArrival] = React.useState("");
  const [updatedLocation, setUpdatedLocation] = React.useState("");
  const [updatedCity, setUpdatedCity] = React.useState("");
  const [updatedPrice, setUpdatedPrice] = React.useState("");
  const [updatedDetailText, setUpdatedDetailText] = React.useState("");

  // HANDLE EDIT
  const handleEditClick = (event) => {
    event.preventDefault();

    //
    setUpdatedArtist(concert.artist);
    setUpdatedDate(concert.date);
    setUpdatedArrival(concert.arrival);
    setUpdatedLocation(concert.location);
    setUpdatedCity(concert.city);
    setUpdatedPrice(concert.price);
    setUpdatedDetailText(concert.detailText);

    //
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

    patchConcert(concertId, updatedConcert);

    function refreshPage() {
      window.location.reload(false);
    }

    refreshPage();

    setEdit(false);
  };

  return (
    <>
      <GoBackHeader to="/concerts"></GoBackHeader>

      {isLoading && "Loading..."}
      {!isLoading && (
        <>
          {!edit ? (
            <Title size="big">{concert.artist}</Title>
          ) : (
            <EditTitle
              value={updatedArtist}
              onChange={(event) => {
                setUpdatedArtist(event.target.value);
              }}
            />
          )}

          <Divider />

          <InfoContainer>
            <DetailsItem>
              <Icon src={Date} />
              {!edit ? (
                <p>{concert.date}</p>
              ) : (
                <EditInput
                  value={updatedDate}
                  type="date"
                  onChange={(event) => {
                    setUpdatedDate(event.target.value);
                  }}
                />
              )}
            </DetailsItem>

            <DetailsItem>
              <Icon src={Train} />
              {!edit ? (
                <p>{concert.arrival}</p>
              ) : (
                <EditArrivalDropdown
                  value={updatedArrival}
                  onChange={(event) => {
                    setUpdatedArrival(event.target.value);
                  }}
                />
              )}
            </DetailsItem>

            <DetailsItem>
              <Icon src={Location} />
              {!edit ? (
                <p>
                  {concert.location}, {concert.city}
                </p>
              ) : (
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
              {!edit ? (
                <p>{concert.price}</p>
              ) : (
                <EditInput
                  value={updatedPrice}
                  type="number"
                  onChange={(event) => {
                    setUpdatedPrice(event.target.value);
                  }}
                />
              )}
            </DetailsItem>
          </InfoContainer>

          <Divider />

          <RowContainer>
            <UserCard />

            {!edit ? (
              <DetailTextContainer>{concert.detailText}</DetailTextContainer>
            ) : (
              <EditTextarea
                value={updatedDetailText}
                onChange={(event) => {
                  setUpdatedDetailText(event.target.value);
                }}
              />
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
      )}
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
  flex: 2 1 auto;
`;
