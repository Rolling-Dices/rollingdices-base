const express = require("express");

const routes = express.Router();

const UserController = require("../src/controllers/UserController");
const TableController = require("../src/controllers/TableController");
const AuthController = require("../src/controllers/AuthController");

module.exports = routes;

//Autenticação
routes.post("/auth", AuthController.authenticate);

//Usuário
routes.get("user/index/:slug", UserController.indexBySlug);
routes.post("/user/store", UserController.store);

//Mesas
routes.post("tables/store", TableController.store);

module.exports = routes;
