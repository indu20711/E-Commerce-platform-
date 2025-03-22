const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) return res.status(403).json({ msg: 'Admin access required' });
  next();
};

// Get products with optional category filter
router.get('/products', async (req, res) => {
  const { category } = req.query;
  const filter = category ? { category } : {};
  try {
    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Add product (admin only)
router.post('/products', auth, isAdmin, async (req, res) => {
  const { name, price, category } = req.body;
  try {
    const product = new Product({ name, price, category });
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Register user
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });
    user = new User({ email, password });
    await user.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
