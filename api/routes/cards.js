const express = require("express");
const router = express.Router();
const cards = rootRequire("api/data/cards.js");

router.route("/").get((req, res) => {
  res.send(cards);
});

module.exports = router;
