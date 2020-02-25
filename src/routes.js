const express = require("express");

const routes = express.Router();

const UserController = require("../src/controllers/UserController");
const TableController = require("../src/controllers/TableController");
const AuthController = require("../src/controllers/AuthController")

module.exports = routes;

routes.get("user/index/:slug", UserController.indexBySlug);

routes.post("tables/store", TableController.store);

routes.post('/user/store', UserController.store);
routes.post('/user/authen', AuthController.authenticate)

module.exports = routes;
