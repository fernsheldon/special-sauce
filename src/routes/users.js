const express = require('express');
const router = express.Router();

// GET /api/users - Retrieve list of users
router.get('/', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  res.json(users);
});

// POST /api/users - Create a new user
router.post('/', (req, res) => {
  const newUser = req.body; // e.g., { id: 4, name: 'Dana' }
  // In a real app, save newUser to the database
  res.status(201).json({
    message: 'User created successfully',
    user: newUser
  });
});

module.exports = router;