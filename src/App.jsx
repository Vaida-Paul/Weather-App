import "./App.css";
import React, { useState, useEffect } from "react";
import { fetchWeather, fetchLocationWeather } from "./api/fetchWeather";
import { fetchTimezone } from "./api/fetchTimezone";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CityInfo from "./components/CityInfo";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);

  const formatedTime = (time) => {
    let hour = time.getHours();
    const minutes = ("0" + time.getMinutes()).slice(-2);
    const amOrPm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    const year = time.getFullYear();
    const month = ("0" + (time.getMonth() + 1)).slice(-2);
    const day = ("0" + time.getDate()).slice(-2);

    return `${hour}:${minutes} ${amOrPm} ${day}/${month}/${year}`;
  };

  const search = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await fetchWeather(query);
        setWeather(data);
        console.log(data);
        const timezoneData = await fetchTimezone(
          data.coord?.lat,
          data.coord?.lon
        );
        const time = new Date(timezoneData);
        setDate(formatedTime(time));
        setQuery("");
        setError(false);
      } catch (error) {
        console.error("Error: ", error);
        setError(true);
      }
    }
  };

  useEffect(() => {
    const getGeolocationWeather = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const data = await fetchLocationWeather(latitude, longitude);
            setWeather(data);
            const timezoneData = await fetchTimezone(latitude, longitude);
            const time = new Date(timezoneData);
            setDate(formatedTime(time));
            setError(false);
          },
          async (error) => {
            console.error("Geolocation error: ", error);
            await search("London"); // default city
          }
        );
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    getGeolocationWeather();
  }, []);

  return (
    <div className="main-container">
      {/* prettier-ignore */}
      <SearchBar query={query} setQuery={setQuery} search={search} error={error}/>
      {weather.main && <CityInfo weather={weather} date={date} />}
    </div>
  );
}

export default App;
