import { useState, useEffect } from "react";
import WeatherForeCast from "./WeatherForeCast";

function Weather() {
  const [data, setData] = useState(null);
  async function getWeatherData() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Manila&appid=e4de4a2dfe4265fb34a5c94c75d7813b`
    );
    const weatherData = await response.json();

    setData(weatherData);
  }
  useEffect(() => {
    getWeatherData();
  }, []);

  if (data === null) return <p>Loading</p>;

  return (
    <div>
      <WeatherForeCast data={data} />
    </div>
  );
}

export default Weather;
