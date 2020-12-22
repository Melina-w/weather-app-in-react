import React from "react";
export default function TemperatureUpdate() {
  let weatherTemperature = {
    temperature: 20,
  };
  return (
    <span className="temperature">
      <span>{weatherTemperature.temperature}</span>
      <a href="/">°C</a> /<a href="/">°F</a>
    </span>
  );
}
