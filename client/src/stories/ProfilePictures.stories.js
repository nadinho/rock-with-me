import React from "react";
import { storiesOf } from "@storybook/react";
import ProfilePictures from "../components/ProfilePictures";

storiesOf("ProfilePictures", module)
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
