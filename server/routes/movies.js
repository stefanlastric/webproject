const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { check, validationResult } = require('express-validator');

const Movies = require('../models/Movies');
const User = require('../models/User');

//@route    GET movies
//@desc     Get all movies
//@access   public
router.get('/', async (req, res) => {
  try {
    const movies = await Movies.find().limit(20);
    res.json(movies);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

//@route    GET movies/id
//@desc     Get movies by id
//@access   public
router.get('/:id', async (req, res) => {
  try {
    const movies = await Movies.findById(req.params.id);
    //check if movie exist
    if (!movies) {
      return res.status(404).json({ msg: 'Movie does not exist' });
    }

    res.json(movies);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Server Error' });
  }
});

//TODO dodati za like-ove code

//@route    POST movies
//@desc     Create new movie
//@access   private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Title of movie is required')
        .not()
        .isEmpty(),
      check('year', 'Year of movie is required')
        .not()
        .isEmpty(),
      check('genre', 'Genre of movie is required')
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

      //Add other fields from movies schema
      const newMovies = new Movies({
        name: req.body.name,
        from: req.body.from,
        genre: req.body.genre,
        year: req.body.year,
        actors: { name: req.body.name }
      });

      const moviesFields = {};
      moviesFields.movies = req.movies.id;
      if (name) moviesFields.name = name;
      if (from) moviesFields.from = from;
      if (genre) moviesFields.genre = genre;
      if (year) moviesFields.year = year;
      if (actors) {
        moviesFields.actors = actors.split(',').map(actors => actors.trim());
      }

      const movies = await newMovies.save();

      res.json(movies);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: 'Server Error' });
    }
  }
);

//@route    DELETE movies/:id
//@desc     Delete movie by id
//@access   private
router.delete('/:id', auth, async (req, res) => {
  try {
    const movies = await Post.findById(req.params.id);

    if (!movies) {
      return res.status(404).json({ msg: 'Movie does not exist' });
    }

    const user = await User.findById(req.user.id).select('-password');
    //check if user is admin
    if (!user.usertype) {
      res.status(401).json({ msg: 'Unauthorised access' });
    }

    await movies.remove();

    res.status(200).json({ msg: 'Movie removed' });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
