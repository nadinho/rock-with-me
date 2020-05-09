import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { zoomIn } from "../../utils/animations";

export default function HomeDivider({ title, link }) {
  return (
    <Container>
      <AllLink>
        <LinkText>
          {link}

          <SVG
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </SVG>
        </LinkText>
      </AllLink>
      <Title>{title}</Title>
      <Divider />
    </Container>
  );
}

HomeDivider.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 35%;
  grid-template-rows: 10px 1fr;
  padding: 15px;
  width: 100%;
  animation: ${zoomIn} ease-in 0.8s;
`;

const LinkText = styled.p`
  font-size: 0.7rem;
  text-transform: uppercase;
`;

const AllLink = styled.div`
  grid-column: 3/4;
  grid-row: 1/2;
  align-items: center;
`;

const SVG = styled.svg`
  margin-left: 6px;
`;

const Title = styled.h2`
  align-self: center;
  justify-self: start;
  grid-column: 1/3;
  grid-row: 2/3;
  font-size: 0.9rem;
  font-weight: 400;
  text-transform: uppercase;
`;

const Divider = styled.div`
  align-self: center;
  justify-self: end;
  grid-column: 2/4;
  grid-row: 2/3;
  height: 1px;
  margin: 0.5em 0 0.5em 0;
  width: 80%;
  display: block;
  background: grey;
`;
