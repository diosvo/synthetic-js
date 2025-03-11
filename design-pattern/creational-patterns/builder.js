class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  // optional properties

  constructor(name, { age, phone, address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

console.table([
  new User('Dios'),
  new User('Dios', { age: 23, address: new Address('0', 'AuCo') }),
  new User('Dios', { phone: 927, address: new Address('0', 'AuCo') }),
]);
