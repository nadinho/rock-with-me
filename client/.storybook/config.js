import React from "react";
import { configure, addDecorator } from "@storybook/react";
import GlobalStyles from "../src/GlobalStyle";

const GlobalStyleDecorator = (storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
);
addDecorator(GlobalStyleDecorator);
