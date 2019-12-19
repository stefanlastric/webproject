const mongoose = require('mongoose');

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
      type: Int,
      required: true
    },
    dateAdded: {
      type: Date,
      default: Date.now
    },
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

module.exports = Movie = mongoose.model('movie', UserSchema);
