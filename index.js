require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/arpit", (req, res) => {
  res.send("Hello  arpit World!");
});
app.get("/sharma", (req, res) => {
  res.send("sharma");
});
app.get("/udit", (req, res) => {
  res.send("udit");
});
app.get("/h1", (req, res) => {
  res.send("<h1>this is h1 tag in html</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
