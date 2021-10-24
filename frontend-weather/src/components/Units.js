import React from "react";
import { UnitsStyles, ToggleTemp } from "../styles/app.styles";

const Units = ({ units, setUnits }) => {
  return (
    <UnitsStyles>
      <label htmlFor="cel">°C</label>
      <ToggleTemp units={units} onClick={() => setUnits((prev) => !prev)} />
      <label htmlFor="far">°F</label>
    </UnitsStyles>
  );
};

export default Units;
