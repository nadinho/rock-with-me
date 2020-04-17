import React from "react";
import styled from "@emotion/styled";
import colors from "../../utils/colors";
import PropTypes from "prop-types";

const SVG = styled.svg`
  fill: ${(props) => (props.active ? colors.gradientOne : colors.primaryText)};
`;

export default function Home({ active }) {
  return (
    <SVG width="24" height="24" viewBox="0 0 24 24" active={active}>
      <defs>
        <linearGradient id="lgstop" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(180,40%,75%)" />
          <stop offset="100%" stopColor="hsl(180,40%,30%)" />
        </linearGradient>
      </defs>
      <path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
    </SVG>
  );
}

Home.propTypes = {
  active: PropTypes.bool,
};
