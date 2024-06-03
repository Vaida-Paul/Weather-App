import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
};
export const fetchLocationWeather = async (lat, lon) => {
  const { data } = await axios.get(
    `${URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  return data;
};