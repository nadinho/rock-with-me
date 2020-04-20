import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import GoBackHeader from "../components/GoBackHeader";

storiesOf("Go back", module).add("Go back header", () => (
  <GoBackHeader onClick={action("Go back to previous page")}></GoBackHeader>
));
