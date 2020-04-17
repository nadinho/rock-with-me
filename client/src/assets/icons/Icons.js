import React from "react";
import styled from "@emotion/styled";
import colors from "../../utils/colors";
import PropTypes from "prop-types";

const SVG = styled.svg`
  fill: ${(props) => (props.active ? colors.gradientOne : colors.primaryText)};
`;

export const Home = ({ active }) => {
  return (
    <SVG width="18" height="18" viewBox="0 0 24 21.913" active={active}>
      <path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
    </SVG>
  );
};

export const Konzerte = ({ active }) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      active={active}
    >
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
    </SVG>
  );
};
export const Messages = ({ active }) => {
  return (
    <SVG
      wxmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      active={active}
    >
      <path d="M0 1v16.981h4v5.019l7-5.019h13v-16.981h-24zm7 10c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5z" />
    </SVG>
  );
};
export const Profil = ({ active }) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      active={active}
    >
      <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
    </SVG>
  );
};

Home.propTypes = {
  active: PropTypes.bool,
};

Konzerte.propTypes = {
  active: PropTypes.bool,
};

Messages.propTypes = {
  active: PropTypes.bool,
};

Profil.propTypes = {
  active: PropTypes.bool,
};
