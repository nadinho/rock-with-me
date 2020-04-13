import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import ConcertCardSmall from "../components/ConcertCardSmall";
import ConcertCardBig from "../components/ConcertCardBig";

storiesOf("ConcertCard", module)
  .addDecorator(centered)
  .add("ConcertCard small", () => <ConcertCardSmall />)
  .add("ConcertCard big", () => <ConcertCardBig />);
