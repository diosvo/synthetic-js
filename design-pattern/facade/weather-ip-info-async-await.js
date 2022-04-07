const WEATHER_API_KEY = "75d0116a26d6c8be66e9d67612354e27";
const IP_INFO_API_KEY = "adec6251a9f09e";

const fetchData = (endpoint) => async (query) => {
  const response = await fetch(`${endpoint}?${query}`);

  if (!response.ok) {
    throw new Error(`${response.statusText} (${response.status})`);
  }
  return response.json();
};

async function init() {
  const fetchIpInfo = fetchData("https://ipinfo.io");
  const fetchWeather = fetchData(
    "https://api.openweathermap.org/data/2.5/weather"
  );

  const { city, country } = await fetchIpInfo(`token=${IP_INFO_API_KEY}`);
  const weatherData = await fetchWeather(
    `q=${city}, ${country}&appid=${WEATHER_API_KEY}`
  );

  console.log(weatherData);
}

init();
