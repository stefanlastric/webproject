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

//@route    PUT api/movies/like/:id
//@desc     Like a movie
//@access   Private
router.put('/like/:id', auth, async (req, res) => {
  try {
    const movies = await Movies.findById(req.params.id);

    //check if the movie has already been liked
    if (
      movies.likes.filter(like => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: 'Movie already liked' });
    }
    movies.likes.unshift({ user: req.user.id });

    await movies.save();

    res.json(movies.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    PUT api/movies/unlike/:id
//@desc     Unlike a movie
//@access   Private
router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const movies = await Movies.findById(req.params.id);

    //check if the movie has already been liked
    if (
      movies.likes.filter(like => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: 'Movie has not been liked' });
    }
    //Get remove index
    const removeIndex = movies.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);

    movies.likes.splice(removeIndex, 1);

    await movies.save();

    res.json(movies.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

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
    const movies = await Movies.findById(req.params.id);

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

//@route    POST movies/review/:id
//@desc     Review on a movie
//@access   Private
router.post(
  '/review/:id',
  [
    auth,
    [
      check('text', 'Text is required')
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
      const movies = await Movies.findById(req.params.id);

      const newReview = {
        text: req.body.text,
        name: user.name,
        user: req.user.id
      };

      movies.reviews.unshift(newReview);

      await movies.save();

      res.json(movies.reviews);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route    DELETE movies/review/:id/:review_id
//@desc     Delete review on a movie
//@access   Private
router.delete('/review/:id/:review_id', auth, async (req, res) => {
  try {
    const movies = await Movies.findById(req.params.id);

    //Take review from a movie
    const review = movies.reviews.find(
      review => review.id === req.params.review_id
    );

    if (!review) {
      return res.status(404).json({ msg: 'Review does not exist' });
    }

    if (review.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    //Get remove index
    const removeIndex = movies.reviews
      .map(review => review.user.toString())
      .indexOf(req.user.id);

    movies.reviews.splice(removeIndex, 1);

    await movies.save();

    res.json(movies.reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
