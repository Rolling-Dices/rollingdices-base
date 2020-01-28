const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');

//app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//db conection
const sequelize = require('./src/config/DBConnection.js');

//test route
app.get('/', (req, res) => {
  return res.send('Rolling Dices');
});

//server port
app.listen(3000);
console.log('Server UP!')