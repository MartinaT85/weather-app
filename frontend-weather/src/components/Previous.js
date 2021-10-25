import React from "react";
import {
  PreviousWrapper,
  Toggle,
  PreviousDays,
  PreviousDay,
} from "../styles/app.styles";

const Previous = () => {
  return (
    <PreviousWrapper>
      <Toggle>
        <span>&#8593;</span>
        <span className="sr-only">Show previous weather</span>
      </Toggle>
      <h2 className="main-title previous-weather__title">Previous 7 days</h2>
      <PreviousDays>Previous Days</PreviousDays>
    </PreviousWrapper>
  );
};

export default Previous;
