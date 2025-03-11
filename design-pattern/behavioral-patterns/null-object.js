class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === 'Dios';
  }
}

const users = [new User(1, 'Dios'), new User(2, 'Alex')];

class NullUser {
  // create default values for falsy cases

  constructor() {
    this.id = -1;
    this.name = 'Guest';
  }

  hasAccess() {
    return false;
  }
}

function getUser(id) {
  const user = users.find((user) => user.id === id);
  return user == null ? new NullUser() : user;
}

function print(id) {
  const user = getUser(id);

  console.log(
    `Hello ${user.name}.
     ${user.hasAccess() ? 'You have access' : "You don't have access."}`
  );
}

console.log(print(3));
