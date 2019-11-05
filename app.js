
const express = require('express');
const mongojs = require('mongojs');
const bodyParser = require('body-parser');

const app = express();
/*

const port = process.env.PORT || 3000

const db = mongojs('mongodb+srv://stefanlastric:stefan123@cluster0-1jeht.mongodb.net/test?retryWrites=true&w=majority', []); 

app.use(express.static('public'));
app.use(bodyParser.json());
*/

app.get('/',(req,res) => res.send('Test 1!'))

app.listen(process.env.PORT || 3000, () => console.log('App je na portu 3000'))