const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(
  process.env.MONGO_URL, 
  {
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true 
  }
);

app.get('/', (req, res) => {
  return res.send('Rolling Dices');
});

app.listen(3000);