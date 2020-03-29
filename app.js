/*eslint-disable no-global-assign */

global.rootRequire = (name) => require(`${__dirname}/${name}`);
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const app = require("express")();
const logger = rootRequire("config/logger");

if (typeof TextEncoder !== "function") {
  const TextEncodingPolyfill = require("text-encoding");
  TextEncoder = TextEncodingPolyfill.TextEncoder;
  TextDecoder = TextEncodingPolyfill.TextDecoder;
}

module.exports = app;

const port = process.env.PORT || 3001;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(methodOverride());
app.use((err, req, res) => {
  logger.error(err);
  if (
    err.response !== undefined &&
    err.response.request.res.statusCode !== undefined
  ) {
    res
      .status(err.response.request.res.statusCode)
      .send({ error: err.response.data });
  } else {
    res.status(500).send({ error: "Internal server error" });
  }
});

app.listen(port);
