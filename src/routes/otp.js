const express = require('express');
const router = express.Router();

// GET /api/users - Retrieve list of users
router.get('/', (req, res) => {
  const otp = {
    otp: '123456'
  };
  res.json(otp);
});

// POST /api/users - Create a new user
router.post('/', (req, res) => {
  const newUser = req.body; // e.g., { id: 4, name: 'Dana' }
  // In a real app, save newUser to the database
  res.status(201).json({
    message: 'OTP sent successfully',
    user: newUser
  });
});

module.exports = router;