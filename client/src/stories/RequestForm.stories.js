import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import RequestForm from "../components/RequestForm";
import GlobalStyle from "../GlobalStyle";

storiesOf("Request form", module)
  .addDecorator(centered)
  .add("Request form", () => (
    <>
      <GlobalStyle />
      <RequestForm />
    </>
  ));
