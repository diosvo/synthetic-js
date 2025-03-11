const fromCache = (key, cacheInMinutes) => {
  const cacheInMilliseconds = cacheInMinutes * 60 * 1000;
  if (localStorage[key] !== undefined) {
    const cache = JSON.parse(localStorage[key]);
    if (Date.now() - cache.datetime < cacheInMilliseconds) {
      return { ...cache.data, cache: cache.datetime + cacheInMilliseconds };
    }
    localStorage.removeItem(key);
  }
  return false;
};

const fetchData =
  ({ endpoint, cacheInMinutes }) =>
  async (query) => {
    const url = `${endpoint}?${query}`;
    const cache = fromCache(url, cacheInMinutes);
    if (cache) {
      return cache;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.statusText} (${response.status})`);
    }

    const data = await response.json();
    localStorage[url] = JSON.stringify({ datetime: Date.now(), data });

    return { ...data, cache: false };
  };

async function init() {
  const fetchIpInfo = fetchData({
    endpoint: 'https://ipinfo.io',
    cacheInMinutes: 30,
  });
  const fetchWeather = fetchData({
    endpoint: 'https://api.openweathermap.org/data/2.5/weather',
    cacheInMinutes: 10,
  });

  const { city, country } = await fetchIpInfo(
    `token=${process.env.IP_INFO_API_KEY}`
  );
  const weatherData = await fetchWeather(
    `q=${city}, ${country}&appid=${process.env.WEATHER_API_KEY}`
  );

  console.log(weatherData);
}

init();
