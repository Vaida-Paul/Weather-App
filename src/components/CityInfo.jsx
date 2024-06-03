import React from "react";
import WeatherDetails from "./WeatherDetails";

const CityInfo = ({ weather, date }) => (
  <div className="city">
    <h2 className="city-name">
      <span>{weather.name}</span>
      <img
        src={`https://flagsapi.com/${weather.sys.country}/flat/64.png`}
        alt=""
      />
    </h2>
    <div className="city-temp">
      {Math.round(weather.main.temp)}
      <sup>&deg;C</sup>
    </div>
    <div className="info">
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={`${weather.weather[0].description}`}
        title={`${weather.weather[0].description}`}
        className="city-icon"
      />
      <WeatherDetails
        humidity={weather.main.humidity}
        windSpeed={weather.wind.speed}
      />
    </div>
    <p className="date">{date}</p>
  </div>
);

export default CityInfo;
