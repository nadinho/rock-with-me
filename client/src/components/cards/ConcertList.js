import React from "react";
import PropTypes from "prop-types";
import { StyledLink } from "../StyledLink";

import GridConcertCard from "./GridConcertCard";

export default function ConcertList({ concerts }) {
  if (!concerts) return null;
  return (
    <>
      {concerts.map((concert) => {
        return (
          <>
            <StyledLink to={`/concerts/${concert._id}`}>
              <GridConcertCard key={concert._id} concert={concert} />
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
