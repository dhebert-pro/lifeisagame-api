const winston = require("winston");
const config = rootRequire("config/env");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: config.logger.infoURL,
      level: "info",
    }),
    new winston.transports.File({
      filename: config.logger.errorURL,
      level: "error",
    }),
  ],
});
//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

module.exports = logger;
