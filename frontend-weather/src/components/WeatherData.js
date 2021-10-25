import React from "react";
import {
  temperatureConverter,
  milesToKm,
} from "../HelpersfuncAndApi/helpersFunctions";
import { Wrapper, Date, Temp, Wind } from "../styles/app.styles";

const WeatherData = ({ active, isMetric }) => {
  console.log(active);
  return (
    <Wrapper>
      <Date>
        <h2>{active.dateTime}</h2>
      </Date>

      <Temp>
        <h2 className="section-title">Temp</h2>
        <p className="reading">
          High:
          <span> {temperatureConverter(active.maxTemp, isMetric)}</span> °
          <span>{isMetric ? "C" : "F"}</span>
        </p>
        <p className="reading">
          Low:
          <span> {temperatureConverter(active.minTemp, isMetric, true)}</span> °
          <span>{isMetric ? "C" : "F"}</span>
        </p>
      </Temp>

      <Wind deg={active.windDirection}>
        <h2 className="section-title">Wind</h2>
        <p className="reading">
          <span>{milesToKm(active.windSpeed, isMetric)} </span>
          <span>{isMetric ? "kph" : "mph"}</span>
        </p>

        <div className="wind__direction">
          <div className="wind__arrow"></div>
        </div>
      </Wind>
    </Wrapper>
  );
};

export default WeatherData;
