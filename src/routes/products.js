const express = require('express');
const router = express.Router();

// GET /api/products - Retrieve list of products
router.get('/', (req, res) => {
  const products = [
    { id: 1, name: 'Widget', price: 9.99 },
    { id: 2, name: 'Gadget', price: 19.99 }
  ];
  res.json(products);
});

// PUT /api/products/:id - Update a product
router.put('/:id', (req, res) => {
  const productId = req.params.id;
  const updateData = req.body;
  // Update product in a database in a real app
  res.json({
    message: `Product ${productId} updated`,
    updateData
  });
});

// DELETE /api/products/:id - Delete a product
router.delete('/:id', (req, res) => {
  const productId = req.params.id;
  // Delete product from a database in a real app
  res.json({
    message: `Product ${productId} deleted`
  });
});

module.exports = router;