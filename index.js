const express = require("express");
const handlebars = require("express-handlebars");
const http = require("http");
const { HOST, PORT, PUBLIC_PATH } = require("./config");
const { pathActive, testContext } = require("./lib");
const home = require("./controller/home");
const service = require("./controller/service");
const about_us = require("./controller/about_us");

const app = express();
const hbs = handlebars.create({
  extname: ".hbs",
  helpers: { pathActive, testContext },
});

/* Establecer el Host y el Puesto */
app.set("HOST", HOST);
app.set("PORT", PORT);

/* Establecer el motor de vista */
app.set("view engine", ".hbs");
app.engine(".hbs", hbs.engine);

/* Carpeta publica */
app.use(express.static(PUBLIC_PATH));

/* Manejador de rutas */
app.use("/", home);
app.use("/servicio", service);
app.use("/sobre-nosotros", about_us);

app.use((req, res, next) => {
  res.send("Not Found");
});

/* Manejador de errores */
app.use((err, req, res, next) => {
  console.log(err);
  res.send("Server Error");
});

http.createServer(app).listen(app.get("PORT"), app.get("HOST"), () => {
  console.log(`Server running on ${app.get("HOST")}:${app.get("PORT")}`);
});
