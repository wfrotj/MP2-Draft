import React from "react";
import "./WeatherForecast.css";

function WeatherForecast({ data }) {
  const { name, weather, main } = data;
  const { icon, description } = weather[0];
  const temperatureInKelvin = main.temp;
  const describe = description;

  function kelvinToCelsius(temperatureInKelvin) {
    return (temperatureInKelvin - 273.15).toFixed(1);
  }
  function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(" ");

    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    return str.join(" ");
  }

  return (
    <div className="weather-data">
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        <p> {kelvinToCelsius(temperatureInKelvin)}°C</p>
      </div>
      <div className="weather-description">
        <p>
          <img src={`http://openweathermap.org/img/w/${icon}.png`} />
        </p>
      </div>
      <div className="description">
        <p>{titleCase(describe)}</p>
      </div>
    </div>
  );
}

export default WeatherForecast;
