const express = require('express');
const db = require('../models/db');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/apply', auth, (req, res) => res.render('apply'));

router.post('/apply', auth, (req, res) => {
  const { amount, term, purpose } = req.body;
  const stmt = db.prepare('INSERT INTO loans (user_id, amount, term, purpose) VALUES (?, ?, ?, ?)');
  stmt.run(req.user.id, amount, term, purpose);
  res.redirect('/dashboard');
});

router.get('/dashboard', auth, (req, res) => {
  const loans = db.prepare('SELECT * FROM loans WHERE user_id = ?').all(req.user.id);
  res.render('dashboard', { loans });
});

module.exports = router;