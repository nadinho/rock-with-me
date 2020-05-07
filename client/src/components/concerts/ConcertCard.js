import styled from "@emotion/styled";
import React from "react";
import colors from "../../utils/colors";
import PropTypes from "prop-types";

import { zoomIn } from "../../utils/animations";

import ProfilePicture from "../user/ProfilePicture";
import { Title } from "./Title";

// BOOKMARK FUNCTION - will be displayed

export default function ConcertCard({ concert }) {
  const addFavorite = () => {
    alert("Add to favorites 🎶");
  };

  return (
    <>
      <Grid>
        <Bookmark onClick={() => addFavorite()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#fff"
            viewBox="0 0 24 24"
          >
            <path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z" />
          </svg>
        </Bookmark>

        <User>
          <ProfilePicture size="big" src={"https://i.pravatar.cc/150?img=30"} />
          <p>Anna</p>
        </User>

        <CardTitle size="medium">{concert.artist}</CardTitle>
        <TextContainer>
          <p>{concert.date}</p>
          <p>{concert.location}</p>
          <p>{concert.city}</p>
        </TextContainer>
      </Grid>
    </>
  );
}

ConcertCard.propTypes = {
  concert: PropTypes.array,
};

const Grid = styled.section`
  height: auto;
  display: grid;
  grid-template-columns: 40% 2fr;
  grid-template-rows: 10% 1fr;
  /* padding: 15px 15px 30px 15px; */
  padding: 5px 5px 15px 5px;

  background: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
  cursor: pointer;
  animation: ${zoomIn} 1000ms ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

const CardTitle = styled(Title)`
  grid-column: 1/3;
  grid-row: 1/3;
  margin-bottom: 20px;
  letter-spacing: 1.8px;
`;

const User = styled.div`
  grid-column: 1/2;
  grid-row: 3/4;

  padding: 0px 10px;
  align-self: center;
`;

const TextContainer = styled.div`
  grid-column: 2/4;
  grid-row: 3/4;
  padding: 0px 10px;
  border-left: 1px dashed white;
`;

const Bookmark = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  grid-column: 3/4;
  grid-row: 1/2;

  svg {
    &:hover {
      transform: scale(1.1);
    }
  }
`;
