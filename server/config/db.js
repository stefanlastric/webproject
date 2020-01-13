const mongoose = require('mongoose');

let db;
if (!process.env.HEROKU) {
  const config = require('config');
  db = config.get('mongoURI');
} else {
  db = process.env.mongoURI;
}

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB database connection established');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
