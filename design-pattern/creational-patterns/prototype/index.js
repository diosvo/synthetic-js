// ⭕️ Potential drawback of creating methods directly on objects
// Each instance creates new function references in memory
const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  fullName: `${firstName} ${lastName}`,
  email,
  checkLastOnline: () =>
    console.log(`${this.fullName} was last online at ${Date.now()}`),
  sendEmail: () => console.log(`Email sent to ${email}`),
  delete: () => console.log('User removed'),
});

class User {
  constructor({ firstName, lastName, email }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  checkLastOnline() {
    console.log(`${this.fullName} was last online at ${Date.now()}`);
  }

  sendEmail() {
    console.log(`Email sent to ${this.email}`);
  }

  delete() {
    console.log('User removed');
  }
}

const user = createUser({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
});

const user1 = new User({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
});

const user2 = new User({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@doe.com',
});

console.log(user1.delete === user2.delete);
