const express = require("express");

const app = express();

const productRoutes = require("./routes/product.routes");
const cartRoutes = require("./routes/cart.routes");

app.use(express.json());

app.use (productRoutes);
app.use(cartRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

module.exports = app;


