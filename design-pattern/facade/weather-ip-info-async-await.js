const WEATHER_API_KEY = "75d0116a26d6c8be66e9d67612354e27";
const IP_INFO_API_KEY = "adec6251a9f09e";

async function fetchData(endpoint, query) {
  const response = await fetch(`${endpoint}?${query}`);

  if (!response.ok) {
    throw new Error(`${response.statusText} (${response.status})`);
  }
  return response.json();
}

async function fetchWeather(city) {
  const endpoint = "https://api.openweathermap.org/data/2.5/weather";
  const query = `q=${city}&appid=${WEATHER_API_KEY}`;
  return fetchData(endpoint, query);
}

async function fetchIpInfo() {
  const endpoint = "https://ipinfo.io";
  const query = `token=${IP_INFO_API_KEY}`;
  return fetchData(endpoint, query);
}

async function init() {
  const { city, country } = await fetchIpInfo();
  const weatherData = await fetchWeather(`${city}, ${country}`);
  console.log(weatherData);
}

init();
