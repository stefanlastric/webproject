const mongoose = require('mongoose');

const ActorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    from: {
      type: String,
      required: true
    },
    age: {
      type: Int,
      required: true
    },
    dateAdded: {
      type: Date,
      default: Date.now
    },
    movies: [
      {
        movie: {
          type: Schema.Types.ObjectId,
          ref: 'movies'
        },
        name: { type: String, required: true }
      }
    ]
  },
  { timestamps: true }
);

module.exports = Actor = mongoose.model('actor', UserSchema);
