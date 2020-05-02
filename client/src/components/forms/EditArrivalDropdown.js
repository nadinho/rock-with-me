import React from "react";
import styled from "@emotion/styled";

const arrivals = [
  "Wähle aus...",
  "Anfahrt mit Auto",
  "Anfahrt mit ÖPNV",
  "Anfahrt mit Fahrrad",
  "Zu Fuß",
  "Anfahrt mit Mitfahrgelegenheit",
  "Weiß noch nicht",
  "Sonstiges",
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
  margin: 3px 0 3px 0;
  font-size: inherit;
  color: inherit;
  font-family: inherit;
  background: transparent;
  border: none;
`;
