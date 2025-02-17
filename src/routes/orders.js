const express = require('express');
const router = express.Router();

// GET /api/orders - Retrieve list of orders
router.get('/', (req, res) => {
  const orders = [
    { id: 1, user: 'Alice', total: 29.99 },
    { id: 2, user: 'Bob', total: 49.99 }
  ];
  res.json(orders);
});

module.exports = router;