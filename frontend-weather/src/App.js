import axios from "axios";
import { useState, useEffect } from "react";
import { formatDate } from "./HelpersfuncAndApi/helpersFunctions.js";
import { API_URL } from "./HelpersfuncAndApi/helpersFunctions";
import WeatherData from "./components/WeatherData.js";
import Info from "./components/Info.js";
import Units from "./components/Units";
import Previous from "./components/Previous.js";
import GlobalStyle from "./components/GlobalStyles.js";
const woeid = "44418";

const baseURL = `https://www.metaweather.com/api/location/44418/`;

function App() {
  const [loading, setloading] = useState(true);
  const [weatherDays, setWeatherdays] = useState([]);
  const [activeDay, setActiveDay] = useState();
  const [units, setUnits] = useState(true);
  const [togglePrev, setTogglePrev] = useState(false);

  async function requestWeather() {
    const res = await fetch(baseURL);
    const json = await res.json();
    console.log(json);
  }
  console.log(setActiveDay);

  useEffect(() => {
    requestWeather();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <h1>it works</h1>
    </div>
  );
}

export default App;
