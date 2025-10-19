import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const res = await axios.get(
        "http://api.weatherapi.com/v1/current.json?key=1ba910c90f154595ace221023250309&q=London&aqi=no"
      );
      setWeather(res.data);
    };
    fetchWeatherData();
  }, []);
  return (
    <>
      <div className="container">
        {weather && (
          <>
            <h1 className="title">
              <img src={weather.current.condition.icon} /> Weather App
            </h1>
            <div className="search-box">
              <input type="text" placeholder="Enter city..." id="cityInput" />
              <button id="searchBtn">Search</button>
            </div>
            <div className="weather-card" id="weatherCard">
              <h2 id="cityName">{weather.location.name}</h2>
              <p id="temperature">🌡️ {weather.current.temp_c}°C</p>
              <p id="description">
                <img src={weather.current.condition.icon} />{" "}
                {weather.current.condition.text}
              </p>
              <p id="humidity">💧 Humidity: {weather.current.humidity}%</p>
              <p id="wind">💨 Wind: {weather.current.wind_kph} km/h</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
