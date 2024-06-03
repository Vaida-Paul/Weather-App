import axios from "axios";
const URL = "https://api.timezonedb.com/v2.1/get-time-zone";
const API_KEY = process.env.REACT_APP_TIME_API_KEY;

export const fetchTimezone = async (lat, lon) => {
  const { data } = await axios.get(URL, {
    params: {
      key: API_KEY,
      format: "json",
      by: "position",
      lat: lat,
      lng: lon,
    },
  });
  return data.formatted;
};
