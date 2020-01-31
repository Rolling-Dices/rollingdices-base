const express = require('express');

const routes = express.Router();

const TableController = require('../controllers/TableController');

routes.post('/store', TableController.store);

module.exports = routes;