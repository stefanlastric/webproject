
const express = require('express');
const mongojs = require('mongojs');
const bodyParser = require('body-parser');

var jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000

const db = mongojs('mongodb+srv://stefanlastric:stefan123@cluster0-1jeht.mongodb.net/test?retryWrites=true&w=majority', []); // heroku param config file

app.use(express.static('public'));
app.use(bodyParser.json());

var admin_router = express.Router()
require('./admin.js')(admin_router, db);

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
});

app.use('/admin', admin_router);