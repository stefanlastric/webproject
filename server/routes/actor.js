const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { check, validationResult } = require('express-validator');

const Actor = require('../models/Actor');
const User = require('../models/User');

//@route    GET actor
//@desc     Get all actors
//@access   public
router.get('/', async (req, res) => {
  try {
    const actors = await Actor.find().limit(20);
    res.json(actors);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

//@route    GET actor/id
//@desc     Get actors by id
//@access   public
router.get('/:id', async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);
    //check if actor exist
    if (!actor) {
      return res.status(404).json({ msg: 'actor does not exist' });
    }

    res.json(actor);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Server Error' });
  }
});

//@route    POST actor
//@desc     Create new actor
//@access   private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Title of actor is required')
        .not()
        .isEmpty(),
      check('from', 'Year of actor is required')
        .not()
        .isEmpty(),
      check('age', 'Genre of actor is required')
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

      //Add other fields from actors schema
      const newActors = new actors({
        name: req.body.name,
        from: req.body.from,
        age: req.body.age,
        movies: { name: req.body.name }
      });
      const { name, from, age, movies } = req.body;

      const actorFields = {};
      if (name) actorFields.name = name;
      if (from) actorFields.from = from;
      if (age) actorFields.age = age;
      if (movies) {
        actorFields.movies = movies.split(',').map(movies => movies.trim());
      }

      const actor = await newActors.save();

      res.json(actor);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: 'Server Error' });
    }
  }
);

//@route    DELETE actors/:id
//@desc     Delete actor by id
//@access   private
router.delete('/:id', auth, async (req, res) => {
  try {
    const actor = await Post.findById(req.params.id);

    if (!actor) {
      return res.status(404).json({ msg: 'actor does not exist' });
    }

    const user = await User.findById(req.user.id).select('-password');
    //check if user is admin
    if (!user.usertype) {
      res.status(401).json({ msg: 'Unauthorised access' });
    }
    await actor.remove();

    res.status(200).json({ msg: 'actor removed' });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
