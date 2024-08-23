// utils/api.js
const API_KEY = "9d2762f1b91f5a22631a8eab37a4261b"; // Replace with your actual API key

export async function fetchWeatherData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error("City not found");
  }
  const data = await response.json();

  return {
    temperature: data.main.temp,
    humidity: data.main.humidity,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    windSpeed: data.wind.speed,
    cityName: data.name,
    country: data.sys.country,
  };
}
