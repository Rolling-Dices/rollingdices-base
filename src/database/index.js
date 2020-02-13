const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Table = require("../models/Table");

const connection = new Sequelize(dbConfig);

User.init(connection);
Table.init(connection);

module.exports = connection;
