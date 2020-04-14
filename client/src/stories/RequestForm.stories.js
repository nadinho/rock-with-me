import React from "react";
import { storiesOf } from "@storybook/react";
import RequestForm from "../components/RequestForm";
import GlobalStyle from "../GlobalStyle";

storiesOf("Request form", module).add("Request form", () => (
  <>
    <GlobalStyle />
    <RequestForm />
  </>
));
