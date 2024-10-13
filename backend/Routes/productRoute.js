const express = require("express");
const product = require("../Models/products");
const router = express.Router();

router.get("/products", async (req, res) => {
  const getProducts = await product.find({});
  res.json({
    success: true,
    getProducts,
  });
});

router.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const getProducts = await product.findById(id);
    res.json({
      success: true,
      getProducts,
    });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "error in getProductsID", error });
  }
});

module.exports = router;
