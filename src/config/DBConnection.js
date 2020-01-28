const Sequelize = require('sequelize');
const connection = new Sequelize(
    'rolling_dices',
    'postgres',
    2001,
        {
        host: 'localhost',
        dialect: 'postgres'
        }
    ).authenticate()
    .then(() => {
      console.log('Connected into DB');
    })
    .catch(err => {
      console.error('Unable to connect to the DB');
    });

module.exports = connection;