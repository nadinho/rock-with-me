import React from "react";
import ConcertCardSmall from "../components/cards/ConcertCardSmall";
import ConcertCardBig from "../components/cards/ConcertCardBig";
import ConcertCardSingle from "../components/cards/ConcertCardSingle";

export default {
  title: "Cards",
};

export const small = () => <ConcertCardSmall />;
export const big = () => <ConcertCardBig />;
export const single = () => <ConcertCardSingle />;
