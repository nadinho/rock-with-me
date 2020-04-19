import React from "react";
import { storiesOf } from "@storybook/react";
import Sender from "../components/Sender";
import Receiver from "../components/Receiver";

storiesOf("Messages", module)
  .add("Sender", () => <Sender />)
  .add("Receiver", () => <Receiver />);
