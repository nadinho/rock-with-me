import React from "react";
import styled from "@emotion/styled";
import colors from "../../utils/colors";

const arrivals = [
  "Wähle deine Anfahrt",
  "Anfahrt mit Auto",
  "Anfahrt mit den Öffis",
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
  width: 300px;
  margin: 30px 10px;
  padding: 10px 0px 10px 15px;
  border-right: 2px solid transparent;
  border-image: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
  border-image-slice: 1;
  background: transparent 10px 100% no-repeat;
  font-size: 0.9rem;
  color: ${colors.primaryText};
  background: transparent;
  font-family: inherit;
`;
