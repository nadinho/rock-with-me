import React from "react";
import { storiesOf } from "@storybook/react";
import Sender from "../components/chat/Sender";
import Receiver from "../components/chat/Receiver";

storiesOf("Messages", module)
  .add("Sender", () => <Sender />)
  .add("Receiver", () => <Receiver />);
