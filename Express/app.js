const express = require("express");
const products = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/products", (req, res) => {
  res.json(products);
});

//Params
app.get("/products/:productID", (req, res) => {
  const { productID } = req.params;
  const newProduct = products.filter((item) => item.id === Number(productID));
  res.json(newProduct);
});

//search query
app.get("/products/v1/query", (req, res) => {
  const { name } = req.query;

  let newProduct = { ...products };
  if (name) newProduct = products.filter((item) => item.name === name);
  res.json(newProduct);
});
// port listenting
app.listen(5000, () => {
  console.log("port is listeting at 5000");
});
