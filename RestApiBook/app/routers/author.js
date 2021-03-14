const express = require("express");
const router = express.Router();
const AuthorController = require("../controllers/authorController");
const { uploadFoto } = require("../utils/helpers/uploadFoto");
const { verifikasiJwt, permit } = require("../utils/middleware/authjwt");



router.route("/authors")
    .get(verifikasiJwt,permit("guest"), AuthorController.getAll)
    .post(verifikasiJwt ,permit("admin"), AuthorController.create)
    
router.route("/authors/:id/book").get(verifikasiJwt ,permit("guest"),  AuthorController.getBook)

router.route("/authors/:id/upload")
      .post(uploadFoto.single("foto"), verifikasiJwt ,permit("admin"),  AuthorController.uploadFoto);

router
    .route("/authors/:id")
    .get(verifikasiJwt ,permit("guest"),  AuthorController.getById)
    .put(verifikasiJwt ,permit("admin"), AuthorController.update)
    .delete(verifikasiJwt ,permit("admin"), AuthorController.delete);


module.exports = { router };
