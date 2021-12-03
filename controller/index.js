const { Router } = require("express");

const indexController = Router();

indexController.get("/", (req, res, next) => {
  res.render("home");
});

module.exports = indexController;
