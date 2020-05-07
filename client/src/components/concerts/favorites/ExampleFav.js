import styled from "@emotion/styled";
import React from "react";
import colors from "../../../utils/colors";
import { zoomIn } from "../../../utils/animations";

export function Foals() {
  return (
    <>
      <Grid>
        <CardTitle size="small">Foals c/o pop</CardTitle>
        <Div>
          <p>2020-04-24</p>
          <p>Palladium</p>
          <p>Köln</p>
        </Div>
      </Grid>
    </>
  );
}

export function Leoniden() {
  return (
    <>
      <Grid>
        <CardTitle size="small">Leoniden</CardTitle>
        <Div>
          <p>2020-05-01</p>
          <p>Rosenhof</p>
          <p>Osnabrück</p>
        </Div>
      </Grid>
    </>
  );
}

export function Refused() {
  return (
    <>
      <Grid>
        <CardTitle size="small">Refused</CardTitle>
        <Div>
          <p>2020-05-25</p>
          <p>Skaters Palace</p>
          <p>Münster</p>
        </Div>
      </Grid>
    </>
  );
}
export function LoveA() {
  return (
    <>
      <Grid>
        <CardTitle size="small">Love A</CardTitle>
        <Div>
          <p>2020-11-25</p>
          <p>Gebäude 9</p>
          <p>Köln</p>
        </Div>
      </Grid>
    </>
  );
}

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  width: 150px;
  padding: 5px;
  font-size: 0.8rem;
  border-radius: 5%;
  transition: transform 300ms ease 100ms;
  background: linear-gradient(
    50deg,
    ${colors.gradientOne},
    ${colors.gradientTwo}
  );
  cursor: pointer;
  animation: ${zoomIn} ease-in 1000ms;
  &:hover {
    transform: scale(1.1);
  }
`;

const CardTitle = styled.h1`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const Div = styled.div`
  line-height: 6px;
  font-size: 0.75rem;
`;
