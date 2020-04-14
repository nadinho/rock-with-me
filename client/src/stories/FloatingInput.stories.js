import React from "react";
import { storiesOf } from "@storybook/react";
import FloatingInput from "../components/FloatingInput";
import centered from "@storybook/addon-centered/react";

storiesOf("Input", module)
  .addDecorator(centered)
  .add("Input", () => <FloatingInput />);
