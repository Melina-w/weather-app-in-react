import React from "react";

export default function WeatherDescription() {
  let weatherData = {
    humidity: 99,
    wind: 7,
  };
  return (
    <div className="row col-5 weather-details offset-1">
      <div className="col-12"></div>
      <div>
        <p>
          Humidity: <span>{weatherData.humidity} </span>%
        </p>
        <p>
          Wind: <span> {weatherData.wind} </span> km/h
        </p>
        <p>
          <span className="capitalize"> </span>
        </p>
      </div>
    </div>
  );
}
