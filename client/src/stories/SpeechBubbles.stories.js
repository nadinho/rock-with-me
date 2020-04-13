import React from "react";
import { storiesOf } from "@storybook/react";
import MessageOne from "../components/MessageOne";
import MessageTwo from "../components/MessageTwo";

storiesOf("Messages", module)
  .add("One", () => <MessageOne />)
  .add("Two", () => <MessageTwo />);
