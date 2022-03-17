class Logger {
  constructor() {
    if (Logger.instance == null) {
      this.logs = [];
      this.logs = Logger.instance;
    }
    return Logger.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(message);
  }

  count() {
    console.log(`${this.logs.length} logs`);
  }
}

const logger = new Logger();
Object.freeze(logger);

export default logger;
