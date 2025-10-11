import { isAllLetters, isValidEmail } from './validator.mjs';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  age: 42,
  email: 'john@doe.com',
  // new Proxt(user.address, handler) to validate address object
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345',
  },
};

const userProxy = new Proxy(user, {
  get: (target, property) => {
    console.log(
      `${new Date()} | The value of ${property} is ${Reflect.get(
        target,
        property
      )}`
    );
  },
  set: (target, property, value) => {
    // 1. "username":
    // - At least 3 characters long.
    // - A string that only contains of letters.
    if (property === 'username') {
      if (value.length < 3) {
        throw new Error('Please use a longer username.');
      } else if (!isAllLetters(value)) {
        throw new Error('You can only use letters.');
      }
    }

    // 2. "email"
    // - A valid email address
    if (property === 'email') {
      if (!isValidEmail(value)) {
        throw new Error('Please provide a valid email.');
      }
    }

    // 3. "age"
    // - A number
    // - At least 18
    if (property === 'age') {
      if (typeof value !== 'number') {
        throw new Error('Please provide a valid age.');
      }
      if (value < 18) {
        throw new Error('User cannot be younger than 18.');
      }
    }

    console.log('Successfully updated!');

    return Reflect.set(target, property, value);
  },
});

// userProxy.username = 'a';
// userProxy.username = 'aaaa1';
// userProxy.email = '@gmail.com';
userProxy.age = 3;
