"use strict";
const configDev = require("./config.dev.json");
const configProd = require("./config.prod.json");

const configEnv =
  process.env.NODE_ENV === "production" ? configProd : configDev;

const config = {
  ...configEnv,
};

module.exports = config;
