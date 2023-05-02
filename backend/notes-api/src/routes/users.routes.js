const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

const usersController = new UsersController();

/*
-> Route params (values required in the route):
usersRoutes.get("/message/:id/:user", (req, res) => {
*/

// Query params (values NOT required in the query string)
usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;