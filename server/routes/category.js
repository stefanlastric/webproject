const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { check, validationResult } = require('express-validator');

const Category = require('../models/Category');
const User = require('../models/User');

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

//@route    GET category/id
//@desc     Get category by id
//@access   public
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    //check if Category exist
    if (!category) {
      return res.status(404).json({ msg: 'Category does not exist' });
    }

    res.json(category);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Server Error' });
  }
});

//@route    POST category
//@desc     Create new Category
//@access   private
router.post(
  '/',
  [
    auth,
    [
      check('genre', 'Genre of Category is required')
        .not()
        .isEmpty(),
      check('description', 'Description of Category is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      //check if user is admin
      if (!user.usertype) {
        res.status(401).json({ msg: 'Unauthorised access' });
      }

      //Add other fields from category schema
      const newCategory = new Category({
        genre: req.body.genre,
        description: req.body.description,
        movies: { name: req.body.name }
      });

      const categoryFields = {};
      categoryFields.category = req.category.id;
      if (name) categoryFields.name = name;
      if (genre) categoryFields.genre = genre;
      if (movies) {
        categoryFields.movies = movies.split(',').map(movies => movies.trim());
      }

      const category = await newCategory.save();

      res.json(category);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: 'Server Error' });
    }
  }
);

//@route    DELETE category/:id
//@desc     Delete Category by id
//@access   private
router.delete('/:id', auth, async (req, res) => {
  try {
    const category = await Post.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ msg: 'Category does not exist' });
    }

    const user = await User.findById(req.user.id).select('-password');
    //check if user is admin
    if (!user.usertype) {
      res.status(401).json({ msg: 'Unauthorised access' });
    }

    await category.remove();

    res.status(200).json({ msg: 'Category removed' });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
