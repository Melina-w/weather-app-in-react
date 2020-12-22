import "./App.css";
import React from "react";
import "./styles.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import WeatherForecastDay from "./WeatherForecastDay";
import OpenSourceCode from "./OpenSourceCode";

function App() {
  return (
    <div className="App">
      <div className="container weather-box">
        <Search />
      </div>
      <CurrentWeather />
      <div className="container days-forecast">
        <WeatherForecastDay
          day="Wednesday"
          tempMin="19"
          tempMax="20"
          description="Overcast Clouds"
        />
        <WeatherForecastDay
          day="Thursday"
          tempMin="19"
          tempMax="20"
          description="Overcast Clouds"
        />
        <WeatherForecastDay
          day="Friday"
          tempMin="19"
          tempMax="20"
          description="Overcast Clouds"
        />
        <WeatherForecastDay
          day="Saturday"
          tempMin="19"
          tempMax="20"
          description="Overcast Clouds"
        />
        <WeatherForecastDay
          day="Sunday"
          tempMin="19"
          tempMax="20"
          description="Overcast Clouds"
        />
      </div>
      <OpenSourceCode />
    </div>
  );
}

export default App;
