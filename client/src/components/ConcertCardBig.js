import styled from "@emotion/styled";
import React from "react";
import colors from "../utils/colors";
import Location from "../icons/location.png";
import Date from "../icons/date.png";
import Euro from "../icons/euro.png";
import Train from "../icons/train.png";

export default function ConcertCardBig() {
  return (
    <Card>
      <ContentContainer>
        <RowContainer>
          <Title>Love A</Title>
          <Picture
            src={
              "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
            }
            alt="Profil"
          />
        </RowContainer>

        <DetailsContainer>
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
        </DetailsContainer>

        <MitrockerContainer>
          <Mitrocker>Mitrocker</Mitrocker>
          <RowContainer>
            <Buddies src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1543&q=80"></Buddies>
            <Buddies src="https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"></Buddies>
            <Buddies src="https://images.unsplash.com/photo-1554780336-390462301acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"></Buddies>
          </RowContainer>
        </MitrockerContainer>

        <CardButton>Mehr</CardButton>
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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 20px;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Card = styled.div`
  background: ${colors.background};
  width: 380px;
  padding: 10px 5px;
  border-radius: 6px;
`;

const Picture = styled.img`
  border-radius: 100px;
  height: 60px;
  width: 60px;
`;

const Title = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  &::after {
    content: "";
    display: block;
    height: 2px;
    position: relative;
    top: 4px;
    left: 22px;
    background: linear-gradient(
      50deg,
      ${colors.gradientOne},
      ${colors.gradientTwo}
    );
    width: 70px;
  }
`;

const DetailsContainer = styled.div`
  line-height: 0.8px;
  margin: 25px 0 25px 0;
`;

const Detail = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: #fff;
  font-family: "Montserrat", sans-serif;
`;

const Mitrocker = styled.p`
  margin-right: 10px;
  font-size: 0.9rem;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
`;

const Buddies = styled.img`
  border-radius: 100px;
  height: 24px;
  width: 24px;
  margin: -3px;
`;

const CardButton = styled.button`
  padding: 4px 16px;
  background: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
  border: none;
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  outline: none;
  align-self: flex-end;
  margin-top: 12px;
  text-transform: uppercase;
`;
