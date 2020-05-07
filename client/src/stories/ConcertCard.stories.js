import React from "react";
import ConcertCardSmall from "../components/concerts/ConcertCardSmall";
import ConcertCard from "../components/concerts/ConcertCard";

export default {
  title: "Cards",
};

export const small = () => <ConcertCardSmall />;
export const big = () => <ConcertCard />;
