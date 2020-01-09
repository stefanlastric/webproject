const express = require('express');
const connectDB = require('./config/db');

// token kreira library unutar aplikacije
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

//zbog cors errora izmedju portova
const cors = require('cors');
app.use(cors());

//define routes
//app.use('/', express.static('../client/build'));
app.use('/users', require('./routes/users'));
app.use('/login', require('./routes/login'));
app.use('/movies', require('./routes/movies'));
app.use('/actor', require('./routes/actor'));
app.use('/profile', require('./routes/profile'));

app.listen(process.env.PORT || 4000, () => console.log('App je na portu 4000'));
