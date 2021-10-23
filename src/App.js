import { useState, useEffect } from "react";
import { formatDate } from "./HelpersfuncAndApi/helpersFunctions.js";
import { API_URL } from "./HelpersfuncAndApi/helpersFunctions";
import WeatherData from "./components/WeatherData.js";
import Info from "./components/Info.js";
import Units from "./components/Units";
import GlobalStyle from "./components/GlobalStyles.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>it works</h1>
    </div>
  );
}

export default App;
