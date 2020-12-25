import "./App.css";
import React from "react";
import "./styles.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import OpenSourceCode from "./OpenSourceCode";
import DailyForecastData from "./DailyForecastData";

function App() {
  let Data = [
    {
      day: "Wednesday",
      tempMin: "19",
      tempMax: "20",
      description: "Overcast Clouds",
    },
    {
      day: "Thursday",
      tempMin: "17",
      tempMax: "22",
      description: "Overcast Clouds",
    },
    {
      day: "Friday",
      tempMin: "18",
      tempMax: "22",
      description: "Overcast Clouds",
    },
    {
      day: "Saturday",
      tempMin: "15",
      tempMax: "25",
      description: "Overcast Clouds",
    },
    {
      day: "Sunday",
      tempMin: "11",
      tempMax: "30",
      description: "Sunny",
    },
  ];
  return (
    <div className="App">
      <div className="container weather-box">
        <Search />
      </div>
      <CurrentWeather />

      <DailyForecastData Data={Data} />

      <OpenSourceCode />
    </div>
  );
}

export default App;
