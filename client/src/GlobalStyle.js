import React from "react";
import { Global, css } from "@emotion/core";
import colors from "../src/utils/colors";
import Background from "./assets/images/background.png";

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          height: 100vh;
          font-size: 0.9rem;
          font-family: "Montserrat", sans-serif;
          color: ${colors.primaryText};
          background-image: url(${Background});
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
        }
      `}
    />
  );
}
