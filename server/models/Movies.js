const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    from: {
      type: String,
      required: true
    },
    genre: {
      type: String
    },
    year: {
      type: Number,
      required: true
    },
    likes: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'users'
        }
      }
    ],
    review: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'users'
        },
        text: {
          type: String,
          required: true
        },
        name: {
          type: String
        }
      },
      { timestamps: true }
    ],
    dateAdded: {
      type: Date,
      default: Date.now
    },
    //TODO dodati za lajkove (LIKE)
    actors: [
      {
        actor: {
          type: Schema.Types.ObjectId,
          ref: 'actors'
        },
        name: { type: String, required: true }
      }
    ]
  },
  { timestamps: true }
);

module.exports = Movie = mongoose.model('movie', MovieSchema);
