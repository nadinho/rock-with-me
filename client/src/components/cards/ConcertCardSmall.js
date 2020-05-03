import styled from "@emotion/styled";
import React from "react";
import colors from "../../utils/colors";
import PropTypes from "prop-types";
import { zoomIn } from "../../utils/animations";

export default function ConcertCardSmall({ concert }) {
  return (
    <>
      <Container>
        <CardTitle size="small">{concert.artist}</CardTitle>
        <TextContainer>
          <p>{concert.date}</p>
          <p>{concert.location}</p>
          <p>{concert.city}</p>
        </TextContainer>
      </Container>
    </>
  );
}

ConcertCardSmall.propTypes = {
  concert: PropTypes.array,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  width: 150px;
  padding: 5px;
  font-size: 0.8rem;
  border-radius: 5%;
  transition: transform 300ms ease 100ms;
  background: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  animation: ${zoomIn} ease-in 1000ms;
`;

const CardTitle = styled.h1`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const TextContainer = styled.div`
  line-height: 6px;
  font-size: 0.75rem;
`;
