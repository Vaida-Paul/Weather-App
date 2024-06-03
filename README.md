# Weather React App

A React application that provides real-time weather information, including temperature, humidity, wind speed, and the current time and date for each searched city. At the start, users get the weather of their current location and the city they are in. This is a Progressive Web App (PWA) that users can download.

## Features

- Real-time weather updates
- Current temperature, humidity, and wind speed
- Real-time date and time for searched cities
- Weather information for the user's current location on startup
- Progressive Web App (PWA) capabilities for offline access
- Error handling for invalid city names

## Live Demo

You can access the live demo of the project [here](https://weather-react-project-api-app.netlify.app/).

## APIs Used

- [OpenWeatherMap API](https://openweathermap.org/api) for weather data
- [TimeZoneDB API](https://timezonedb.com/) for date and time data

## Installation and Setup

To run this project locally, follow these steps:

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Create a `.env` file in the root directory and add your API keys:**

    ```sh
    REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key REACT_APP_TIME_API_KEY=your_timezonedb_api_key
    ```

4. **Run the app:**

    ```sh
    npm start
    ```

    The app will be available at `http://localhost:3000`.

## How to Use

1. **Search for a city:**
   - Enter the city name in the search bar.
   - If the city name is valid, the app will display the weather information.
   - If the city name is invalid, the search bar border will turn red to indicate an error.

2. **View current location weather:**
   - On initial load, the app fetches and displays weather information for the user's current location.

## Learning More About React

To learn more about React, visit the [official React documentation](https://reactjs.org/docs/getting-started.html).

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. We appreciate your contributions!
