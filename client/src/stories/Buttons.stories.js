import React from "react";
import { action } from "@storybook/addon-actions";
import { ButtonFull } from "../components/buttons/ButtonFull";
import { ButtonOutline } from "../components/buttons/ButtonOutline";
import { storiesOf } from "@storybook/react";

storiesOf("Buttons", module).add("Buttons", () => (
  <>
    <ButtonFull onClick={action("clicked")}>Full</ButtonFull>
    <ButtonOutline onClick={action("clicked")}>Outline</ButtonOutline>
  </>
));
