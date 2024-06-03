import React from "react";
import humidityImg from "../icons/humidity.png";
import wind from "../icons/storm.png";

const WeatherDetails = ({ humidity, windSpeed }) => (
  <div className="weather-details">
    <div className="detail-column">
      <img src={humidityImg} alt="Humidity" height="50rem" />
      {humidity}%
    </div>
    <div className="detail-column">
      <img src={wind} alt="Wind Speed" height="50rem" />
      {windSpeed} m/s
    </div>
  </div>
);

export default WeatherDetails;
