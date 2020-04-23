import React from "react";
import PropTypes from "prop-types";

import GridConcertCard from "./GridConcertCard";

export default function ConcertList({ concerts }) {
  if (!concerts) return null;
  return (
    <>
      {concerts.map((concert) => {
        return <GridConcertCard key={concert.id} concert={concert} />;
      })}
    </>
  );
}

ConcertList.propTypes = {
  concerts: PropTypes.array,
};
