const { Router } = require("express");

const about_us = Router();

about_us.get("/", (req, res, next) => {
  /* Imagenes del Slide */
  const slides = [
    "/img/sobre-nosotros/sobre-nosotros-1",
    "/img/sobre-nosotros/sobre-nosotros-2",
  ];

  /* Titulo del main */
  const title = "Sobre nosotros";

  /* Contenido del main */
  const contents = [
    {
      text:
        "OCMG se preocupa por aportar eficacia al momento de la " +
        "compra-venta o renta de los inmuebles para los clientes.",
      img: "/img/sobre-nosotros/sobre-nosotros-1",
      textFrom: "from-left",
      imgFrom: "from-right",
    },
    {
      text:
        "Tenemos una gran diversidad de inmuebles que se adaptan a cada uno " +
        "de nuestro clientes.",
      img: "/img/sobre-nosotros/sobre-nosotros-2",
      textFrom: "from-right",
      imgFrom: "from-left",
    },
  ];

  res.render("about_us", {
    currentPath: req.baseUrl + req.path,
    slides,
    title,
    contents,
  });
});

module.exports = about_us;
