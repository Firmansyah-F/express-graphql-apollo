const express = require("express");
const router = express.Router();
const publisherController = require("../controllers/publisherController");



router.route("/publishers")
    .get(publisherController.getAll)
    .post(publisherController.create)
    

router.route("/publishers/:id/book").get(publisherController.getBook)

router
    .route("/publishers/:id")
    .get(publisherController.getById)
    .put(publisherController.update)
    .delete(publisherController.delete);


module.exports = { router };
