const express = require("express");

const cardRoutes = require("./cards");

const router = express.Router();

router.use("/cards", cardRoutes);

router.route("/").all((req, res) => {
  res.json({
    message: "Ceci est le point d'entrée de l'API",
  });
});

module.exports = router;
