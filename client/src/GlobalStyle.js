import React from "react";
import { Global, css } from "@emotion/core";
import colors from "../src/utils/colors";

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
          margin: 0;
          font-family: "Montserrat", sans-serif;
          color: ${colors.primaryText};
          background-color: ${colors.background};
          &:after {
            content: "";
            background: url("https://images.unsplash.com/photo-1563841930606-67e2bce48b78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1276&q=80");
            opacity: 0.3;
            background-repeat: no-repeat;
            background-size: cover;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            position: absolute;
            z-index: -1;
          }
        }
      `}
    />
  );
}
