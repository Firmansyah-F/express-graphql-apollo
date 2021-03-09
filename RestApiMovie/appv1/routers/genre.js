
const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genreController");


router.route("/genres").get(genreController.getAll)

module.exports = { router };