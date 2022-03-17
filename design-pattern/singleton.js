class Logger {
  constructor() {
    this.logs = [];
  }

  log(message) {
    this.logs.push(message);
    console.log(message);
  }

  count() {
    console.log(`${this.logs.length}`);
  }
}

const firstInstance = new Logger();

function FirstDemo() {
  firstInstance.count();
  firstInstance.log("Demo 1");
  firstInstance.count();
}

const secondInstance = new Logger();

function SecondDemo() {
  secondInstance.count();
  secondInstance.log("Demo 2");
  secondInstance.count();
}

console.table(FirstDemo());
console.table(SecondDemo());

// export default logger;
