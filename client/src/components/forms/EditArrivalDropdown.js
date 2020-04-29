import React from "react";
import styled from "@emotion/styled";

const arrivals = [
  "Anfahrt mit Auto",
  "Anfahrt mit ÖPNV",
  "Anfahrt mit Fahrrad",
  "Anfahrt zu Fuß",
  "Anfahrt mit Mitfahrgelegenheit",
  "Weiß noch nicht",
];
export default function ArrivalDropdown(props) {
  return (
    <Dropdown {...props}>
      {arrivals.map((arrival) => {
        return (
          <option key={arrival} value={arrival}>
            {arrival}
          </option>
        );
      })}
    </Dropdown>
  );
}

const Dropdown = styled.select`
  padding: 5px;
  font-size: inherit;
  color: inherit;
  font-family: inherit;
  background: transparent;
  border: none;
`;
