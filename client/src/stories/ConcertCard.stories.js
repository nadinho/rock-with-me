import React from "react";
import { storiesOf } from "@storybook/react";
import ConcertCardSmall from "../components/ConcertCardSmall";
import ConcertCardBig from "../components/ConcertCardBig";

storiesOf("ConcertCard", module)
  .add("ConcertCard small", () => <ConcertCardSmall />)
  .add("ConcertCard big", () => <ConcertCardBig />);
