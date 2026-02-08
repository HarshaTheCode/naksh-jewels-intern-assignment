const products = require("../data/products");

const getAllProducts = (req, res) => {
  try {
    console.log("fetch all products");
    res.status(200).json({
      success: true,
      data: products
    });
  } catch (error) {
    console.error(" failed to fetch products", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch products"
    });
  }
};

module.exports =  getAllProducts;
