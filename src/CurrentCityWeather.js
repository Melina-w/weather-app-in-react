import React from "react";

export default function CurrentCityWeather() {
  let weatherData = {
    city: "Auckland",
    date: "Sun 18 Oct, 2020",
    time: "6:01 PM",
  };
  return (
    <div className="col-6 selected-city">
      <p>{weatherData.city}</p>
      <p>{weatherData.date}</p>
      <p>{weatherData.time}</p>
    </div>
  );
}
