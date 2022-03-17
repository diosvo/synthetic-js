import logger from "./singleton.js";

function SecondLog() {
  logger.count();
  logger.log("second log");
  logger.count();
}

console.log(SecondLog());
