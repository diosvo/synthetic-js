import axios from "axios";
const WEATHER_API_KEY = "75d0116a26d6c8be66e9d67612354e27";
const IP_INFO_API_KEY = "adec6251a9f09e";

/*
 * use-case: Doing fetch requests
 * 🔥 Pros:
 * - it is a wrapper class used to hide the implementation details
 */

/* >>>  Case 1: fetch requests from jsonplaceholder.com - Promise <<< */

function getUsers() {
  return getFetchAxios("https://jsonplaceholder.typicode.com/users");
}

function getUserPosts(userId) {
  return getFetchAxios("https://jsonplaceholder.typicode.com/posts", {
    userId,
  });
}

getUsers().then((users) => {
  users.forEach((user) =>
    getUserPosts(user.id).then((posts) =>
      console.log(`${user.name} - ${posts.length}`)
    )
  );
});

// Without axios

function getFetch(url, params = {}) {
  const query = Object.entries(params)
    .map((params) => `${params[0]}=${params[1]}`)
    .join("&");

  return fetch(`${url}?${query}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
}

// With axios

function getFetchAxios(url, params = {}) {
  return axios({
    url,
    method: "GET",
    params,
    crossDomain: true,
  }).then((response) => response.data);
}

/* >>>  Case 2: fetch requests from Open Weather API - async/ await <<< */

async function fetchWeather(city) {
  const endpoint = "https://api.openweathermap.org/data/2.5/weather";
  const query = `q=${city}&appid=${WEATHER_API_KEY}`;
  const response = await fetch(`${endpoint}?${query}`);

  if (!response.ok) {
    throw new Error(`${response.statusText} (${response.status})`);
  }
  return response.json();
}

async function fetchIpInfo() {
  const endpoint = "https://ipinfo.io";
  const query = `token=${IP_INFO_API_KEY}`;
  const response = await fetch(`${endpoint}?${query}`);

  if (!response.ok) {
    throw new Error(`${response.statusText} (${response.status})`);
  }
  return response.json();
}

async function init() {
  const { city, country } = await fetchIpInfo();
  const weatherData = await fetchWeather(`${city}, ${country}`);
  console.log(weatherData);
}

init();
