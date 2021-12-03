const express = require("express");
const handlebars = require("express-handlebars");
const http = require("http");
const { HOST, PORT, PUBLIC_PATH } = require("./config");
const indexController = require("./controller");

const app = express();
const hbs = handlebars.create({
  extname: ".hbs",
  helpers: {},
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
app.use("/", indexController);

/* Manejador de errores */
app.use((err, req, res, next) => {
  console.log(err);
  res.send("Server Error");
});

http.createServer(app).listen(app.get("PORT"), app.get("HOST"), () => {
  console.log(`Server running on ${app.get("HOST")}:${app.get("PORT")}`);
});
