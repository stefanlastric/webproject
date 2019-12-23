const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new mongoose.Schema(
  {
    genre: {
      type: String,
      required: true
    },
    description: {
      type: String,
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

module.exports = Category = mongoose.model('category', CategorySchema);
