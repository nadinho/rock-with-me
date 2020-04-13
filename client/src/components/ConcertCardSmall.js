import styled from "@emotion/styled";
import React from "react";
import colors from "../utils/colors";

export default function ConcertCardSmall() {
  return (
    <>
      <Picture
        src={
          "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
        }
      />
      <Card>
        <Title>Love A</Title>
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

        <CardButton>Mehr</CardButton>
      </Card>
    </>
  );
}

const RowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.background};
  width: 160px;
  padding: 10px 5px;
  border-radius: 6px;
`;

const Picture = styled.img`
  border-radius: 100px;
  height: 40px;
  width: 40px;
  position: relative;
  top: 25px;
  left: 10px;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  &::after {
    content: "";
    display: block;
    height: 1px;
    position: relative;
    top: 2px;
    left: 8px;
    background: linear-gradient(
      50deg,
      ${colors.gradientOne},
      ${colors.gradientTwo}
    );
    width: 50px;
  }
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

const CardButton = styled.button`
  padding: 2px 13px;
  background: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
  border: none;
  color: white;
  border-radius: 20px;
  font-size: 0.5rem;
  font-weight: 500;
  outline: none;
  align-self: flex-end;
  margin-top: 12px;
  text-transform: uppercase;
`;
