const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController ");



router.route("/books")
    .get(bookController.getAll)
    .post(bookController.create)
    


router
    .route("/books/:id")
    .get(bookController.getById)
    .put(bookController.update)
    .delete(bookController.delete);


module.exports = { router };
