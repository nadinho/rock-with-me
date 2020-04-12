import React from "react";
import { action } from "@storybook/addon-actions";
import { ButtonFull } from "../components/ButtonFull";
import { ButtonOutline } from "../components/ButtonOutline";
import { storiesOf } from "@storybook/react";

storiesOf("Buttons", module).add("Buttons", () => (
  <>
    <ButtonFull onClick={action("clicked")}>Full</ButtonFull>
    <ButtonOutline onClick={action("clicked")}>Outline</ButtonOutline>
  </>
));
