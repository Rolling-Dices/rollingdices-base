const express = require('express');
const cors = require('cors');

require('./src/database');

const app = express();
app.use(express.json());
app.use(cors());


app.use('/users', require('./src/routes/UserRoute'));
app.use('/tables', require('./src/routes/TableRoute'));

app.listen(process.env.PORT || 3333);

//yarn sequelize db:create
//yarn sequelize db:migrate