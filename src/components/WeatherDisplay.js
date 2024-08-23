// components/WeatherDisplay.js
import React, { Component } from "react";

class WeatherDisplay extends Component {
  getTemperatureColor(temp) {
    if (temp < 0) return "text-blue-600";
    if (temp < 10) return "text-blue-400";
    if (temp < 20) return "text-green-500";
    if (temp < 30) return "text-yellow-500";
    return "text-red-500";
  }

  getWeatherIcon(icon) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  render() {
    const { weatherData } = this.props;
    console.log(weatherData);
    if (!weatherData) {
      // return (
      //   <div className="mt-8 bg-white shadow-md rounded-lg p-6">
      //     <h2 className="text-2xl font-bold ">
      //       City Not Found! Please provide correct city name.
      //     </h2>
      //   </div>
      // );
      return null;
    }

    const {
      temperature,
      humidity,
      description,
      icon,
      windSpeed,
      cityName,
      country,
    } = weatherData;

    return (
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Today Weather</h2>
          <img
            src={this.getWeatherIcon(icon)}
            alt={description}
            className="w-16 h-16"
          />
        </div>
        <h3 className="text-xl mb-2">
          {cityName}, {country}
        </h3>
        <p className="text-gray-600 mb-4 capitalize">{description}</p>
        <p
          className={`text-3xl font-bold mb-4 ${this.getTemperatureColor(
            temperature
          )}`}
        >
          {temperature.toFixed(1)}°C
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Humidity</p>
            <p className="text-xl">{humidity}%</p>
          </div>
          <div>
            <p className="text-gray-600">Wind Speed</p>
            <p className="text-xl">{windSpeed} m/s</p>
          </div>
        </div>
        {temperature > 30 && (
          <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
            Heat alert: Stay hydrated and avoid prolonged sun exposure.
          </div>
        )}
        {temperature < 0 && (
          <div className="mt-4 p-2 bg-blue-100 text-blue-700 rounded">
            Freeze alert: Dress warmly and be cautious of icy conditions.
          </div>
        )}
      </div>
    );
  }
}

export default WeatherDisplay;
