const express = require("express");
const user = require("../db/models/user");
const userController = require("./../controllers/userController");
const router_users = express.Router();
const {getUser} = require ("./../controllers/userController");
const { router } = require("./todo");

router_users.get("/users", getUser)

router_users.route("/users").get(userController.getUser).post(userController.create);

router
    .route("/users/:id")
    // .get(userController.getUser)
    .put(userController.update)
    .delete(userController.delete)

module.exports = {router_users}