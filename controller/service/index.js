const { Router } = require("express");

const service = Router();

service.get("/", (req, res, next) => {
  res.redirect(req.baseUrl + "/inmobiliaria");
});

service.get("/inmobiliaria", (req, res, next) => {
  /* Imagenes del Slide */
  const slides = [
    "/img/inmobiliaria/inmobiliaria-1",
    "/img/inmobiliaria/inmobiliaria-2",
    "/img/inmobiliaria/inmobiliaria-3",
  ];

  /* Titulo del main */
  const title = "Servicio de Inmobiliaria";

  /* Contenido del main */
  const contents = [
    {
      text:
        "OCMG se preocupa por aportar eficacia al momento de la " +
        "compra-venta o renta de los inmuebles para los clientes.",
      img: "/img/inmobiliaria/inmobiliaria-1",
      textFrom: "from-left",
      imgFrom: "from-right",
    },
    {
      text:
        "Tenemos una gran diversidad de inmuebles que se adaptan a cada uno " +
        "de nuestro clientes.",
      img: "/img/inmobiliaria/inmobiliaria-2",
      textFrom: "from-right",
      imgFrom: "from-left",
    },
    {
      text:
        "Brindamos confianza, efectividad, calidad y por sobre todo " +
        "viabilidad para los clientes y socios",
      img: "/img/inmobiliaria/inmobiliaria-3",
      textFrom: "from-left",
      imgFrom: "from-right",
    },
  ];

  res.render("inmobiliaria", {
    currentPath: req.baseUrl + req.path,
    slides,
    title,
    contents,
  });
});

service.get("/medico", (req, res, next) => {
  /* Imagenes del Slide */
  const slides = [
    "/img/medico/medico-1",
    "/img/medico/medico-2",
    "/img/medico/medico-3",
  ];

  /* Titulo del main */
  const title = "Servicio Médico";

  /* Contenido del main */
  const contents = [
    {
      text:
        "OCMG es una agencia que brinda apoyo total a la estadía médica " +
        "ya sea para cirugía, reconstrucción, de obesidad, así como " +
        "cirugía en general.",
      img: "/img/medico/medico-1",
      textFrom: "from-left",
      imgFrom: "from-right",
    },
    {
      text:
        "Ofrecemos atención médica especializada y cualificada a todos los " +
        "extranjeros y nacionales, debido a que contamos con los mejores " +
        "médicos y especialistas.",
      img: "/img/medico/medico-2",
      textFrom: "from-right",
      imgFrom: "from-left",
    },
    {
      text:
        "OCMG medical se ocupa de todos los aspectos de su viaje médico a " +
        "Marruecos.",
      img: "/img/medico/medico-3",
      textFrom: "from-left",
      imgFrom: "from-right",
    },
  ];

  res.render("medico", {
    currentPath: req.baseUrl + req.path,
    slides,
    title,
    contents,
  });
});

service.get("/turismo", (req, res, next) => {
  /* Imagenes del Slide */
  const slides = [
    "/img/turismo/turismo-1",
    "/img/turismo/turismo-2",
    "/img/turismo/turismo-3",
  ];

  /* Titulo del main */
  const title = "Servicio de Turismo";

  /* Contenido del main */
  const contents = [
    {
      text:
        "Nuestro objetivo es ofrecerle el mejor servicio, en las mejores " +
        "condiciones de precio y hacer que su instancia sea extraordinaria.",
      img: "/img/turismo/turismo-1",
      textFrom: "from-left",
      imgFrom: "from-right",
    },
    {
      text:
        "Nuestro viaje garantiza comodidad, y una acertada elección de " +
        "hoteles y restaurantes.",
      img: "/img/turismo/turismo-2",
      textFrom: "from-right",
      imgFrom: "from-left",
    },
    {
      text:
        "Nuevas ofertas son variadas: vacaciones familiares en el " +
        "mar, tours clásicos, tours a medida, fines de semana románticos, " +
        "incentivos para grupos, eventos, alquileres de autos, reservas de " +
        "hotel, traslados, etc.",
      img: "/img/turismo/turismo-3",
      textFrom: "from-left",
      imgFrom: "from-right",
    },
  ];

  res.render("turismo", {
    currentPath: req.baseUrl + req.path,
    slides,
    title,
    contents,
  });
});

service.get("/logistica-y-aduanas", (req, res, next) => {
  /* Imagenes del Slide */
  const slides = [
    "/img/logistica/logistica-1",
    "/img/logistica/logistica-2",
    "/img/logistica/logistica-3",
  ];

  /* Titulo del main */
  const title = "Servicio de Logística y Aduanas";

  /* Contenido del main */
  const contents = [
    {
      text:
        "OCMG ofrece un servicio de Agencia de transporte y operador " +
        "logístico, especializados en el transporte nacional e internacional.",
      img: "/img/logistica/logistica-1",
      textFrom: "from-left",
      imgFrom: "from-right",
    },
    {
      text:
        "Ofrecemos asesorarle sobre como exportar o importar su mercancía " +
        "o bienes personales por tierra, mar o aire desde o para cualquier " +
        "destino.",
      img: "/img/logistica/logistica-2",
      textFrom: "from-right",
      imgFrom: "from-left",
    },
    {
      text:
        "Le informamos sobre todos los tránsmites necesarios, y también nos " +
        "encargamos de todo el papeleo con las navieras, las compañías " +
        "aéreas y los transportistas.",
      img: "/img/logistica/logistica-3",
      textFrom: "from-left",
      imgFrom: "from-right",
    },
  ];

  res.render("logistica_y_aduanas", {
    currentPath: req.baseUrl + req.path,
    slides,
    title,
    contents,
  });
});

service.get("/gestoria", (req, res, next) => {
  /* Imagenes del Slide */
  const slides = [
    "/img/gestoria/gestoria-1",
    "/img/gestoria/gestoria-2",
    "/img/gestoria/gestoria-3",
  ];

  /* Titulo del main */
  const title = "Servicio de Gestorías";

  /* Contenido del main */
  const contents = [
    {
      text:
        "OCMG se encarga de realizar todas las documentaciones a nivel de " +
        "las instituciones jurídicas, económicas y privadas.",
      img: "/img/gestoria/gestoria-1",
      textFrom: "from-left",
      imgFrom: "from-right",
    },
    {
      text:
        "Si tienes un hijo o un ser querido y quieres matricularle en una " +
        "universidad o centro de formación profesional. La OCMG le " +
        "acompaña hasta el final del camino con una lista de los mejores " +
        "servicios en el marco de elección de universidades y centros de " +
        "formación profesional.",
      img: "/img/gestoria/gestoria-2",
      textFrom: "from-right",
      imgFrom: "from-left",
    },
    {
      text:
        "Si necesita una visa para visitar Marruecos como turista en la " +
        "propiedad para una visita de negocio, etc. La OCMG ofrece " +
        "asistencia en la obtención de su visado en el consulado del " +
        "Reino de Marruecos en Malabo, además puede acompañarle durante " +
        "todos sus desplazamientos.",
      img: "/img/gestoria/gestoria-3",
      textFrom: "from-left",
      imgFrom: "from-right",
    },
  ];

  res.render("gestoria", {
    currentPath: req.baseUrl + req.path,
    slides,
    title,
    contents,
  });
});

module.exports = service;
