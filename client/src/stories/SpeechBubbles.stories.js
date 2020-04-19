import React from "react";
import { storiesOf } from "@storybook/react";
import Sender from "../components/Sender";
import MessageTwo from "../components/MessageTwo";

storiesOf("Messages", module)
  .add("One", () => <Sender />)
  .add("Two", () => <MessageTwo />);
