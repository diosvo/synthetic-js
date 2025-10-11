class Logger {
  constructor() {
    this.logs = [];
  }

  log(message) {
    this.logs.push(message);
    console.log(message);
  }

  count() {
    console.log(this.logs.length);
  }
}

const firstInstance = new Logger();

function FirstDemo() {
  firstInstance.count();
  firstInstance.log('Demo 1');
  firstInstance.count();
}

const secondInstance = new Logger();

function SecondDemo() {
  secondInstance.count();
  secondInstance.log('Demo 2');
  secondInstance.count();
}

console.table(FirstDemo());
console.table(SecondDemo());

// ----------------------- //

let instance;

class DBConnection {
  constructor(uri) {
    if (instance) {
      throw new Error('You can only create one single DB connection!.');
    }
    this.uri = uri;
    instance = this;
  }

  connect() {
    console.log(`DB ${this.uri} has been connected`);
  }

  disconnect() {
    console.log('DB disconnected');
  }
}

const connection = Object.freeze(new DBConnection('mongodb://'));
// export default connection
