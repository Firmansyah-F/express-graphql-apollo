const express = require("express");
const { uploadCover } = require("../controllers/bookController ");
const router = express.Router();
const bookController = require("../controllers/bookController ");
const { uploadCovers } = require("../utils/helpers/uploadCover");

router.route("/books")
    .get(bookController.getAll)
    .post(bookController.create)
    

router.route("/books/:id/upload")
    .post(uploadCovers.single("photo"), bookController.uploadCover);

router
    .route("/books/:id")
    .get(bookController.getById)
    .put(bookController.update)
    .delete(bookController.delete);


module.exports = { router };
