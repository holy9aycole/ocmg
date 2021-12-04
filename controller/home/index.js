const { Router } = require("express");

const home = Router();

home.get("/", (req, res, next) => {
  res.render("home", { currentPath: req.path });
});

module.exports = home;
