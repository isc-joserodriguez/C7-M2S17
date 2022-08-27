/**
 * 1.- Importamos Express
 * 2.- Instanciamos una nueva aplicación
 * // 3.- Configuración (Middlewares)
 * 4.- Diseño de las rutas
 * 5.- Levantar servidor
 */

const alumnos = ["Pedro", "Maria", "Jesus", "Luis"];

//! 1.- Importamos Express
const express = require("express");

//! 2.- Instanciamos una nueva aplicación
const app = express();

//! 3.- Configuración (Middlewares)
app.use(express.json());

//! 4.- Diseño de las rutas
app.get("/", (req, res) => {
  console.log("Entraste a la petición");
  res.send(alumnos);
});

//! Parametros de la ruta
app.get("/:saludo/:nombre", (req, res) => {
  console.log(req.params);
  res.send(`${req.params.saludo} ${req.params.nombre}`);
});

app.get("/coleccion/:coleccionId/registro/:registroId", (req, res) => {
  console.log(req.params);
  res.send(`${req.params.coleccionId} ${req.params.registroId}`);
});

app.get("/:index", (req, res) => {
  console.log(req.params);
  res.send(alumnos[req.params.index]);
});

//! Query Strings
app.get("/query", (req, res) => {
  console.log(req.query);
  res.send(`${req.query.saludo} ${req.query.nombre}`);
});

//! Body
app.get("/body", (req, res) => {
  console.log(req.body);
  res.send(`${req.body.saludo} ${req.body.nombre}`);
});

app.put("/", (req, res) => {
  alumnos[req.body.index] = req.body.nombre;
  res.send(alumnos);
});

//! 5.- Levantar servidor
app.listen(3001, () => {
  console.log("Servidor corriendo en el puerto 3001");
});
