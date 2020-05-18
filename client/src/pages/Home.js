import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import HomeDivider from "../components/divider/HomeDivider";
import PageHeader from "../components/header/PageHeader";
import { ConcertListSmall } from "../components/concerts/ConcertList";
import ProfilePicture from "../components/user/ProfilePicture";
import FloatingActionButton from "../components/buttons/FloatingActionButton";
import {
  Refused,
  Foals,
  Leoniden,
  LoveA,
} from "../components/concerts/favorites/ExampleFav";
import { zoomIn } from "../utils/animations";

import useGetConcerts from "../hooks/useGetConcerts";

export default function Home() {
  const concerts = useGetConcerts();

  return (
    <>
      <PageHeader>Willkommen</PageHeader>

      {/* favorites section */}
      <HomeDivider title="Deine Favoriten" link="Alle Favoriten" />
      <Slider>
        <Foals />
        <Leoniden />
        <Refused />
        <LoveA />
      </Slider>

      {/* new concerts section */}
      <HomeDivider title="Neue Konzerte" link="Alle Konzerte" />
      <Slider>
        <ConcertListSmall concerts={concerts} />
      </Slider>

      {/* new user section */}
      <HomeDivider title="Neue Rocker" link="Alle Rocker" />
      <Slider>
        <NewUser link to="/profile">
          <ProfilePicture src="https://i.pravatar.cc/150?img=56" size="big" />
        </NewUser>
        <NewUser link to="/profile">
          <ProfilePicture src="https://i.pravatar.cc/150?img=41" size="big" />
        </NewUser>
        <NewUser link to="/profile">
          <ProfilePicture src="https://i.pravatar.cc/150?img=58" size="big" />
        </NewUser>
        <NewUser link to="/profile">
          <ProfilePicture src="https://i.pravatar.cc/150?img=10" size="big" />
        </NewUser>
        <NewUser link to="/profile">
          <ProfilePicture src="https://i.pravatar.cc/150?img=16" size="big" />
        </NewUser>
        <NewUser link to="/profile">
          <ProfilePicture src="https://i.pravatar.cc/150?img=19" size="big" />
        </NewUser>
      </Slider>
      <FloatingActionButton />
    </>
  );
}

const Slider = styled.div`
  width: 95%;
  display: grid;
  grid-gap: 15px;
  grid-auto-flow: column;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const NewUser = styled(Link)`
  margin: 5px;
  animation: ${zoomIn} ease-in 0.8s;
`;
