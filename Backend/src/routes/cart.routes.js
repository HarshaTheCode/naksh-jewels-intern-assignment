const express = require("express");
const router = express.Router();

const validateCart = require("../middleware/validateCart");
const  saveCart  = require("../controllers/cart.controller");

router.post("/cart", validateCart, saveCart);

module.exports = router;
