const express = require("express");
const orders = require("../Models/order");
const router = express.Router();

router.post("/order",async (req, res) => {
  const cartItems = req.body;
  const amount = Number(
    cartItems
      .reduce((acc, items) => acc + items.products.prize * items.qyt, 0)
      .toFixed(2)
  );
  const status = "pending";

  const orderDetails = await orders.create({ cartItems, amount, status });

  res.json({ success: true, orderDetails });
});

module.exports = router;
