import React from "react";
import { addDecorator } from "@storybook/react";
import GlobalStyles from "../src/GlobalStyle";
import { withKnobs } from "@storybook/addon-knobs";

const GlobalStyleDecorator = (storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
);
addDecorator(GlobalStyleDecorator);
addDecorator(withKnobs);
