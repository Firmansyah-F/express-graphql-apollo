const express = require("express");
const router = express.Router();
const publisherController = require("../controllers/publisherController");
const { verifikasiJwt, permit } = require("../utils/middleware/authjwt");



router.route("/publishers")
    .get(verifikasiJwt,permit("guest"), publisherController.getAll)
    .post(verifikasiJwt,permit("admin"),publisherController.create)
    

router.route("/publishers/:id/book").get(verifikasiJwt,permit("guest"), publisherController.getBook)

router
    .route("/publishers/:id")
    .get(verifikasiJwt,permit("guest"), publisherController.getById)
    .put(verifikasiJwt,permit("admin"), publisherController.update)
    .delete(verifikasiJwt,permit("admin"), publisherController.delete);


module.exports = { router };
