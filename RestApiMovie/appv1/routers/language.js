const express = require("express");
const router = express.Router();
const languageController = require("../controllers/languangeController");


router.route("/languages").get(languageController.getAll)

module.exports = { router };
