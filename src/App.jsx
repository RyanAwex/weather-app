import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  // useEffect(() => {
  //   const fetchWeatherData = async () => {
  //     const res = await axios.get(
  //       "http://api.weatherapi.com/v1/current.json?key=1ba910c90f154595ace221023250309&q=London&aqi=no"
  //     );
  //     setWeather(res.data);
  //   };
  //   fetchWeatherData();
  // }, []);

  const handleSearch = () => {
    const fetchWeatherData = async () => {
      const res = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=1ba910c90f154595ace221023250309&q=${city}&aqi=no`
      );
      setWeather(res.data);
      setCity("");
    };
    fetchWeatherData();
  };

  return (
    <div className="weather-card">
      <h1 className="app-title">Weather App</h1>

      <div className="input-group">
        <input
          type="text"
          id="cityInput"
          placeholder="Enter city name..."
          className="input-field"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button id="getWeatherBtn" className="btn" onClick={handleSearch}>
          Get Weather
        </button>
      </div>
      {weather && (
        <>
          <div className="weather-info">
            <div className="weather-info-header">
              <h2 className="city-name">{weather.location.name}</h2>
              <p className="weather-description">
                <img src={weather.current.condition.icon} />
                {weather.current.condition.text}
              </p>
            </div>

            <div className="weather-details-grid">
              <div className="info-item">
                <p className="info-label">Temperature</p>
                <p className="info-value">{weather.current.temp_c}°C</p>
              </div>

              <div className="info-item">
                <p className="info-label">Humidity</p>
                <p className="info-value">{weather.current.humidity}%</p>
              </div>

              <div className="info-item">
                <p className="info-label">Wind Speed</p>
                <p className="info-value">{weather.current.wind_kph} km/h</p>
              </div>

              <div className="info-item">
                <p className="info-label">Feels Like</p>
                <p className="info-value">{weather.current.feelslike_c}°C</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
