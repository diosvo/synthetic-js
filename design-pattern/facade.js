/*
 * use-case: Doing fetch requests
 * 🔥 Pros: 🔥
 */

/*  Case 1: fetch requests from jsonplaceholder.com */

function getUsers() {
  return getFetch("https://jsonplaceholder.typicode.com/users");
}

function getUserPosts(userId) {
  return getFetch("https://jsonplaceholder.typicode.com/posts", { userId });
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) =>
      console.table({ name: user.name, posts: posts.length })
    );
  });
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
