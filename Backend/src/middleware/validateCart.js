const validateCart = (req, res, next) => {
  const items = req.body.items;
  console.log("validating  cart items ");

  // Check items exists and is an array
  if (!items || !Array.isArray(items)) {
    console.log("Invalid cart data");
    
    return res.status(400).json({
      message: "Invalid cart data"
    });
  }

  // Check each item
  for (let product of items) {
    if (!product.productId || product.quantity <= 0) {
         console.log("Invalid cart product");
      return res.status(400).json({
        message: "Invalid cart item"
      });
    }
  }

  next();
};

module.exports = validateCart;
