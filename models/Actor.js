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
    }
  },
  { timestamps: true }
);

module.exports = Actor = mongoose.model('actor', UserSchema);
