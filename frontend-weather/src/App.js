import { useState, useEffect } from "react";
// import { Switch, Route } from "react-router-dom";
// import ChartPage from "./pages/ChartPage.js";
// import HeatIndex from "./pages/HeatIndex.js";
import Nav from "./components/Nav";
import WeatherData from "./components/WeatherData.js";
import Info from "./components/Info.js";
import Units from "./components/Units";
import Previous from "./components/Previous.js";
import GlobalStyle from "./components/GlobalStyles.js";
import { AppWrapper, LondonWeather, InfoWrapper } from "./styles/app.styles";
const baseURL = `/location/44418/2018/4/30`;

// const days = [
//   "2018/4/23/",
//   "2018/4/24/",
//   "2018/4/25/",
//   "2018/4/26/",
//   "2018/4/27/",
//   "2018/4/28/",
//   "2018/4/29/",
//   "2018/4/30/",
// ];
// const weatherCall = days.map((day) => `${day}`);
// console.log(weatherCall);
function App() {
  const [loading, setloading] = useState(true);
  const [weatherDays, setWeatherdays] = useState([]);
  const [activeDay, setActiveDay] = useState();
  const [units, setUnits] = useState(true);
  const [togglePrev, setTogglePrev] = useState(false);

  async function requestWeather() {
    try {
      const res = await fetch(baseURL);
      const json = await res.json();
      console.log(json);
      const londonWeather = json.map((el) => {
        return {
          dateTime: el?.applicable_date || "No data",
          weatherState: el?.weather_state_name || "No data",
          maxTemp: el?.max_temp || "No data",
          minTemp: el?.min_temp || "No data",
          airPressure: el?.air_pressure || "No data",
          humidity: el?.humidity || "No data",
          windDirection: el?.wind_direction || "No data",
          windSpeed: el?.wind_speed || "No data",
        };
      });
      console.log(londonWeather);
      setActiveDay(londonWeather[0]);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    requestWeather();
  }, []);

  return (
    <>
      <Nav />
      <main className="App">
        <GlobalStyle />

        <AppWrapper>
          <LondonWeather>
            {loading ? (
              <div>Loading ...</div>
            ) : (
              <>
                <h1 className="main-title">Weather in London on the date:</h1>
                <WeatherData active={activeDay} isMetric={units} />
                <InfoWrapper>
                  <Info />
                  <Units units={units} setUnits={setUnits} />
                </InfoWrapper>
              </>
            )}
          </LondonWeather>
          <Previous />
        </AppWrapper>
      </main>
    </>
  );
}

export default App;
