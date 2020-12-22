import React from "react";
import CurrentCityWeather from "./CurrentCityWeather";
import TemperatureUpdate from "./TemperatureUpdate";
import WeatherDescription from "./WeatherDescription";

export default function CurrentWeather() {
  return (
    <div className="row">
      <WeatherDescription />
      <div className="col-6">
        <div className="row">
          <div className="col-12 selected-day">
            <h1>Today</h1>
          </div>
          <CurrentCityWeather />
          <div className="col-6 current-degree">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="current-weather-icon"
              lassName="weather-icon"
              id="current-weather-icon"
            />
            <TemperatureUpdate />
          </div>
        </div>
      </div>
    </div>
  );
}
