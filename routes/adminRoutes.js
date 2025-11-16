// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// List/manage
router.get('/', async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.render('admin/manageProducts', { products });
});

// Add form
router.get('/add', (req, res) => res.render('admin/addProduct'));

// Submit add
router.post('/add', async (req, res) => {
  try {
    await Product.create(req.body);
    res.redirect('/admin');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Edit form
router.get('/edit/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.redirect('/admin');
  res.render('admin/editProduct', { product });
});

// Submit edit
router.post('/edit/:id', async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/admin');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Delete
router.post('/delete/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/admin');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
