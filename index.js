import db from "mongoose";
import express from "express";
import cors from "cors";
import { sumar, restar, multi, div, modulo, ordenar } from "./matematicas.js";
import { saluda, randomData } from "./texto.js";
import { getImg } from "./pokeapi.js";

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/nombre", (req, res) => {
  const { nombre } = req.body;
  res.send("Hola, " + nombre);
});

app.get("/apellido", (req, res) => {
  const { apellido } = req.body;
  res.send("De apellido " + apellido);
});

app.get("/telefono", (req, res) => {
  const { telefono } = req.body;
  res.send("Llamame al " + telefono);
});

app.get("/mail", (req, res) => {
  const { mail } = req.body;
  res.send("O envia un mail a " + mail);
});

app.post("/suma", (req, res) => {
  const { num1 } = req.body;
  const { num2 } = req.body;
  res.send(sumar(num1, num2));
});

app.post("/resta", (req, res) => {
  const { num1 } = req.body;
  const { num2 } = req.body;
  res.send(restar(num1, num2));
});

app.post("/multi", (req, res) => {
  const { num1 } = req.body;
  const { num2 } = req.body;
  res.send(multi(num1, num2));
});

app.post("/div", (req, res) => {
  const { num1 } = req.body;
  const { num2 } = req.body;
  res.send(div(num1, num2));
});

app.post("/modulo", (req, res) => {
  const { num1 } = req.body;
  const { num2 } = req.body;
  res.send(modulo(num1, num2));
});

app.post("/ordenar", (req, res) => {
  const { num1 } = req.body;
  const { num2 } = req.body;
  const { num3 } = req.body;
  //res.send(ordenar(num1, num2, num3));
  res
    .status(200)
    .json({
      mayor: ordenar(num1, num2, num3)[2],
      menor: ordenar(num1, num2, num3)[0],
      medio: ordenar(num1, num2, num3)[1],
    });
});

app.post("/saluda", (req, res) => {
  const { nombre } = req.body;
  const { apellido } = req.body;
  res.send(saluda(nombre, apellido));
});

app.post("/randomData", (req, res) => {
  const { nombre } = req.body;
  const { apellido } = req.body;
  const { telefono } = req.body;
  const { mail } = req.body;
  res.send(
    "El dato aleatorio es " + randomData(nombre, apellido, telefono, mail),
  );
});

app.post("/pokeimg", async (req, res) => {
  const { pokenum } = req.body;
  const pokeImg = await getImg(pokenum);
  res.status(200).json({ respuesta: pokeImg });
});

app.listen(port, () => {
  console.log(`el servidor arranco en la url http://localhost:${port}`);
});
