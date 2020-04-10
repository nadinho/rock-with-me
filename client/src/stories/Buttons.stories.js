import React from "react";
import { action } from "@storybook/addon-actions";
import { ButtonFull } from "../components/ButtonFull";
import { ButtonOutline } from "../components/ButtonOutline";
import { storiesOf, addDecorator } from "@storybook/react";

import backgroundColor from "react-storybook-decorator-background";

addDecorator(backgroundColor(["#293133", "#d3d3d3"]));

storiesOf("Buttons", module).add("Buttons", () => (
  <>
    <ButtonFull onClick={action("clicked")}>Full</ButtonFull>
    <ButtonOutline onClick={action("clicked")}>Outline</ButtonOutline>
  </>
));
