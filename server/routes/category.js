const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

//@route    GET category
//@desc     Get all category
//@access   public
router.get('/', async (req, res) => {
  try {
    const category = await Category.find().limit(20);
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
