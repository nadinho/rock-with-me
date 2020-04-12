import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import BuddyRequestFormular from "../components/BuddyRequestFormular";

storiesOf("BuddyRequestFormular", module)
  .addDecorator(centered)
  .add("BuddyRequestFormular", () => <BuddyRequestFormular />);
