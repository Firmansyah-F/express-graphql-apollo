const express = require("express");
const router = express.Router();
const {getAlltodos} = require ("./../controllers/todoController")

router.get("/todos", getAlltodos)

module.exports = {router}