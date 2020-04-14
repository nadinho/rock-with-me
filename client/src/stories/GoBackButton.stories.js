import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import GoBackButton from "../components/GoBackButton";

storiesOf("Go back", module).add("Go back button", () => (
  <GoBackButton onClick={action("Go back to previous page")}></GoBackButton>
));
