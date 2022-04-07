import axios from "axios";

/*
 * use-case: Doing fetch requests
 * 🔥 Pros:
 * - it is a wrapper class used to hide the implementation details
 */

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