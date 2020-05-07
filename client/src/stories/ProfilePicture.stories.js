import React from "react";
import { storiesOf } from "@storybook/react";
import ProfilePicture from "../components/user/ProfilePicture";

storiesOf("ProfilePicture", module)
  .add("small", () => (
    <ProfilePicture
      src="https://randomuser.me/api/portraits/women/57.jpg"
      size="small"
    />
  ))
  .add("medium", () => (
    <ProfilePicture
      src="https://randomuser.me/api/portraits/women/57.jpg"
      size="medium"
    />
  ))
  .add("big", () => (
    <ProfilePicture
      src="https://randomuser.me/api/portraits/women/57.jpg"
      size="big"
    />
  ));
