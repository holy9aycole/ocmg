const { Router } = require("express");

const about_us = Router();

about_us.get("/", (req, res, next) => {
  /* Imagenes del Slide */
  const slides = [
    "/img/sobre-nosotros/sobre-nosotros-1",
    "/img/sobre-nosotros/sobre-nosotros-2",
  ];

  res.render("about_us", {
    currentPath: req.baseUrl + req.path,
    slides,
  });
});

module.exports = about_us;
