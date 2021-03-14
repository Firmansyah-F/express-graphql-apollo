const express = require("express");
const { uploadCover } = require("../controllers/bookController ");
const router = express.Router();
const bookController = require("../controllers/bookController ");
const { uploadCovers } = require("../utils/helpers/uploadCover");
const {validateResource} =require("../utils/middleware/validator")
const { bookSchema} = require("../utils/helpers/validation")
const { verifikasiJwt, permit } = require("../utils/middleware/authjwt");
// const { test, coba, coba2 } = require ("../utils/middleware/test")

router.route("/books")
    .get(verifikasiJwt ,permit("guest"), bookController.getAll)
    .post(verifikasiJwt , validateResource(bookSchema),permit("admin"),  bookController.create)
    

router.route("/books/:id/upload")
      .post(uploadCovers.single("photo"),verifikasiJwt ,permit("guest"),  bookController.uploadCover);

router
    .route("/books/:id")
    .get(verifikasiJwt ,permit("guest"), bookController.getById)
    .put(verifikasiJwt ,permit("admin"), bookController.update)
    .delete(verifikasiJwt ,permit("admin"), bookController.delete);


module.exports = { router };
