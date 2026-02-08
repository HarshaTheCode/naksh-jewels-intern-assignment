const saveCart = (req, res) => {
  const { items } = req.body;

  console.log("products saved to  cart");
  res.status(200).json({
    success: true,
    message: "Cart received successfully",
    totalItems: items.length
  });
};

module.exports =   saveCart;
