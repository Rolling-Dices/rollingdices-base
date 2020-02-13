const express = require("express");

const routes = express.Router();

const UserController = require("../controllers/UserController");
const TableController = require("../controllers/TableController");

module.exports = routes;

routes.get("users/index/:slug", UserController.indexBySlug);
routes.post("users/store", UserController.store);

routes.post("tables/store", TableController.store);

module.exports = routes;
