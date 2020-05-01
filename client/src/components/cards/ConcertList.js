import React from "react";
import PropTypes from "prop-types";
import { StyledLink } from "../StyledLink";

import ConcertCard from "./ConcertCard";
import ConcertCardSmall from "./ConcertCardSmall";

export function ConcertList({ concerts }) {
  if (!concerts) return null;
  return (
    <>
      {concerts.map((concert) => {
        return (
          <>
            <StyledLink to={`/concerts/${concert._id}`}>
              <ConcertCard key={concert._id} concert={concert} />
            </StyledLink>
          </>
        );
      })}
    </>
  );
}

export function ConcertListSmall({ concerts }) {
  if (!concerts) return null;
  return (
    <>
      {concerts.map((concert) => {
        return (
          <>
            <StyledLink to={`/concerts/${concert._id}`}>
              <ConcertCardSmall key={concert._id} concert={concert} />
            </StyledLink>
          </>
        );
      })}
    </>
  );
}

ConcertList.propTypes = {
  concerts: PropTypes.array,
};
ConcertListSmall.propTypes = {
  concerts: PropTypes.array,
};
