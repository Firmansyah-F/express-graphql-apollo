const express = require("express");
// const user = require("../db/models/user");
const router = express.Router();
const MovieController = require("../controllers/MovieController");



router.route("/movies")
    .get(MovieController.getAll)
    .post(MovieController.create)
    

// router.route("/moviesTitle").get(MovieController.getMovie)
// router.route("/moviesLanguage").get(MovieController.getLanguage)

router
    .route("/movies/:id")
    .get(MovieController.getById)
    .put(MovieController.update)
    .delete(MovieController.delete);

// router.route("/movies").get(MovieController.getMovie)
// router.route("/movies?lang=id").get(MovieController.getMovie)

module.exports = { router };
