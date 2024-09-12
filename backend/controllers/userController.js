// controllers/userController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser } = require('../models/User');

const register = async (req, res) => {
  const { email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await createUser(email, passwordHash);
  res.status(201).json(user);
};

module.exports = { register };
