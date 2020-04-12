import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import MessageOne from "../components/MessageOne";
import MessageTwo from "../components/MessageTwo";

storiesOf("Messages", module)
  .addDecorator(centered)
  .add("One", () => <MessageOne />)
  .add("Two", () => <MessageTwo />);
