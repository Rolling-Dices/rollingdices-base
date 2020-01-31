const express = require('express');

const routes = express.Router();

const UserController = require('../controllers/UserController');

routes.get('/show/:slug', UserController.showBySlug);
routes.post('/store', UserController.store);

module.exports = routes;