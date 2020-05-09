import React from "react";
import styled from "@emotion/styled";
import colors from "../utils/colors";

import PageHeader from "../components/header/PageHeader";
import ProfilePicture from "../components/user/ProfilePicture";
import { FavContainer } from "../components/user/FavContainer";
import { ButtonContainer } from "../components/buttons/ButtonContainer";
import { ButtonFull } from "../components/buttons/ButtonFull";
import { ButtonOutline } from "../components/buttons/ButtonOutline";
import { Divider } from "../components/divider/Divider";
import { zoomIn } from "../utils/animations";

import useGetUser from "../hooks/useGetUser";
import useAuth from "../contexts/useAuth";

export default function Profile() {
  const { authenticatedUser } = useAuth();
  const userId = authenticatedUser.userId;
  const { user, loading, error, doGetUser } = useGetUser(userId);

  return (
    <>
      <PageHeader>Profil</PageHeader>
      {error && (
        <>
          <div>Can not get user!</div>
          <button onClick={doGetUser}>Try again</button>
        </>
      )}
      {loading && (
        <>
          <div>Loading... </div>
          <div>Pls refresh the page.</div>
        </>
      )}
      {!loading && (
        <>
          <UserHead>
            <ProfilePicture
              size="extraBig"
              src="https://i.pravatar.cc/150?img=30"
            />
            <div>
              <h1>{user.name}</h1>
              <h2>24, Berlin</h2>
              <p>
                <i>
                  Immer am rocken, manchmal am schocken! <span>🤪</span>{" "}
                </i>
              </p>
              <Button>Profil bearbeiten</Button>
            </div>
          </UserHead>

          <Divider />

          <FavContainer>
            <Heading>
              <span role="img" aria-label="alert-emoji">
                💜
              </span>
              GENRES
            </Heading>
            <Row>
              <Genre>Post Punk</Genre>
              <Genre>New Wave</Genre>
              <Genre>Rock</Genre>
            </Row>
          </FavContainer>

          <Divider />

          <FavContainer>
            <Heading>
              <span role="img" aria-label="alert-emoji">
                💜
              </span>
              Bands
            </Heading>

            <Row>
              <IMG>
                <ProfilePicture
                  size="medium"
                  src="https://guitar.com/wp-content/uploads/2019/09/foals-band-1@1400x1050.jpg"
                />
                <figcaption>Foals</figcaption>
              </IMG>
              <IMG>
                <ProfilePicture
                  size="medium"
                  src="https://www.laut.de/The-Cure/the-cure-166130.jpg"
                />
                <figcaption>The Cure</figcaption>
              </IMG>
              <IMG>
                <ProfilePicture
                  size="medium"
                  src="https://www.laut.de/Joy-Division/joy-division-167444.jpg"
                />
                <figcaption>Joy Division</figcaption>
              </IMG>
            </Row>
          </FavContainer>

          <Divider />

          <FavContainer>
            <Heading>
              <span role="img" aria-label="alert-emoji">
                💜
              </span>
              Songs
            </Heading>
            <Row>
              <Genre>The runner</Genre>
              <Genre>Feels like heaven</Genre>
              <Genre>Soothe me</Genre>
            </Row>
          </FavContainer>

          <Divider />

          <FavContainer>
            <Heading>Buddies</Heading>
            <Row>
              <IMG>
                <ProfilePicture
                  size="medium"
                  src="https://i.pravatar.cc/150?img=56"
                />
                <figcaption>Daniel</figcaption>
              </IMG>
              <IMG>
                <ProfilePicture
                  size="medium"
                  src="https://i.pravatar.cc/150?img=41"
                />
                <figcaption>Luisa</figcaption>
              </IMG>
              <IMG>
                <ProfilePicture
                  size="medium"
                  src="https://i.pravatar.cc/150?img=58"
                />
                <figcaption>Jörn</figcaption>
              </IMG>
              <IMG>
                <ProfilePicture
                  size="medium"
                  src="https://i.pravatar.cc/150?img=10"
                />
                <figcaption>Lea</figcaption>
              </IMG>
              <IMG>
                <ProfilePicture
                  size="medium"
                  src="https://i.pravatar.cc/150?img=16"
                />
                <figcaption>Malia</figcaption>
              </IMG>
            </Row>
          </FavContainer>

          <Divider />

          <ButtonContainer>
            <ButtonFull>Werdet Buddies</ButtonFull>
            <ButtonOutline>Schreib &apos;ne Nachricht</ButtonOutline>
          </ButtonContainer>
        </>
      )}
    </>
  );
}

const UserHead = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 0px 0 20px 0;
  justify-content: space-between;
  animation: ${zoomIn} 0.8s ease-in;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: -10px;
  animation: ${zoomIn} 0.8s ease-in;
`;

const Genre = styled.p`
  background: ${colors.background};
  border-radius: 20px;
  padding: 8px 12px;
  margin: 5px;
`;

const Heading = styled.h3`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.9rem;
  letter-spacing: 0.3em;
`;

const IMG = styled.figure`
  margin: 15px;
  text-align: center;
`;

const Button = styled.button`
  color: inherit;
  background: ${colors.background};
  border-radius: 20px;
  padding: 8px 12px;
  cursor: pointer;
`;
