import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import ProfilePictures from "../components/ProfilePictures";

storiesOf("ProfilePictures", module)
  .addDecorator(centered)
  .add("small", () => (
    <ProfilePictures
      src="https://randomuser.me/api/portraits/women/57.jpg"
      size="small"
    />
  ))
  .add("medium", () => (
    <ProfilePictures
      src="https://randomuser.me/api/portraits/women/57.jpg"
      size="medium"
    />
  ))
  .add("big", () => (
    <ProfilePictures
      src="https://randomuser.me/api/portraits/women/57.jpg"
      size="big"
    />
  ));
