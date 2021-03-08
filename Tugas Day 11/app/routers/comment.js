const express = require("express");
const router = express.Router();
const CommentController = require("./../controllers/commentController");


router.route("/comment").get(CommentController.getAll).post(CommentController.create);

router
    .route("/comment/:id")
    .get(CommentController.getById)
    .put(CommentController.update)
    .delete(CommentController.delete);

module.exports = { router };
