const express = require("express");
const people = require("./data");
const local = require("./middleware");
const app = express();

app.use(express.static("./"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/people", (req, res) => {
  res.status(200).json(people);
});
app.post("/people", (req, res) => {
  res.status(200).json(people);
});

//Params
// middle-ware used named as local
app.get("/people/:productID", local, (req, res) => {
  const { productID } = req.params;
  const newProduct = people.filter((item) => item.id === Number(productID));
  res.json(newProduct);
});

//search query

app.get("/people/v1/query", (req, res) => {
  const { name } = req.query;

  let newProduct = { ...people };
  if (name) newProduct = people.filter((item) => item.name === name);
  res.json(newProduct);
});

// login form

app.post("/login", (req, res) => {
  const name = req.body.Username;
  res.status(200).send(`hello ${name} welcome here`);
  console.log(req.body);
});
// port listenting
app.listen(5000, () => {
  console.log("port is listeting at 5000");
});
