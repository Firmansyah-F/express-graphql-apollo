const express = require("express");
const router = express.Router();
const AuthorController = require("../controllers/authorController");



router.route("/authors")
    .get(AuthorController.getAll)
    .post(AuthorController.create)
    
router.route("/authors/:id/book").get(AuthorController.getBook)

router
    .route("/authors/:id")
    .get(AuthorController.getById)
    .put(AuthorController.update)
    .delete(AuthorController.delete);


module.exports = { router };
