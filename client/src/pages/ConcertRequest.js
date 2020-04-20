import React from "react";
import GoBackHeader from "../components/GoBackHeader";
import ConcertCardSingle from "../components/cards/ConcertCardSingle";

export default function ConcertRequest() {
  return (
    <>
      {/* should go back to overview */}
      <GoBackHeader></GoBackHeader>
      <ConcertCardSingle />
    </>
  );
}
