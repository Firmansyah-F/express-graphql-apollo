const express = require("express");
// const user = require("../db/models/user");
const router = express.Router();
const userController = require("./../controllers/userController");



router.route("/users").get(userController.getAll).post(userController.create);

router
    .route("/users/:id")
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.delete);

router.route("/users/:id/todos").get(userController.getTodo)
module.exports = { router };
