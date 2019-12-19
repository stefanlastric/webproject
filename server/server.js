const express = require('express');
const connectDB = require('./config/db');

// token kreira library unutar aplikacije
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

//define routes
app.get('/', (req, res) => res.send('Test 1!'));

app.listen(process.env.PORT || 3000, () => console.log('App je na portu 3000'));
