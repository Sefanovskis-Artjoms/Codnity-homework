// src/pages/Weather.js
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Riga&appid=YOUR_API_KEY"
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Weather in Riga
      </Typography>
      {weather ? (
        <div>
          <Typography>
            Temperature: {Math.round(weather.main.temp - 273.15)}°C
          </Typography>
          <Typography>Weather: {weather.weather[0].description}</Typography>
        </div>
      ) : (
        <Typography>Loading weather data...</Typography>
      )}
    </div>
  );
};

export default Weather;
