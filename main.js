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

//! 4.- Diseño de las rutas
app.get("/", (req, res) => {
  console.log("Entraste a la petición");
  res.send(alumnos);
});

//! 5.- Levantar servidor
app.listen(3001, () => {
  console.log("Servidor corriendo en el puerto 3001");
});
