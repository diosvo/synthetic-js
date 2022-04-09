const METHOD = {
  GET: "GET",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

module.exports = {
  allowedDomains: ["https://config-proxy-demo.herokuapp.com"],
  proxies: [
    {
      route: "/weather",
      allowedMethods: [METHOD.GET],
      target: "https://api.openweathermap.org/data/2.5/weather",
      queryparams: {
        appid: process.env.WEATHER_API_KEY,
      },
    },
    {
      route: "/ipinfo",
      allowedMethods: [METHOD.GET],
      target: "https://ipinfo.io/",
      queryparams: {
        token: process.env.IP_INFO_API_KEY,
      },
    },
    {
      route: "/github",
      allowedMethods: [METHOD.GET],
      target: "https://api.github.com",
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Token ${process.env.GITHUB_TOKEN}`,
      },
    },
  ],
};
