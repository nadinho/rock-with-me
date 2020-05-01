import React from "react";
import ConcertCardSmall from "../components/cards/ConcertCardSmall";
import ConcertCard from "../components/cards/ConcertCard";
import ConcertCardSingle from "../components/cards/ConcertCardSingle";

export default {
  title: "Cards",
};

export const small = () => <ConcertCardSmall />;
export const big = () => <ConcertCard />;
export const single = () => <ConcertCardSingle />;
