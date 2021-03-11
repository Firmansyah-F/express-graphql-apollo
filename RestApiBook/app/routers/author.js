const express = require("express");
const router = express.Router();
const AuthorController = require("../controllers/authorController");
const { uploadFoto } = require("../utils/helpers/uploadFoto");



router.route("/authors")
    .get(AuthorController.getAll)
    .post(AuthorController.create)
    
router.route("/authors/:id/book").get(AuthorController.getBook)

router.route("/authors/:id/upload")
      .post(uploadFoto.single("foto"), AuthorController.uploadFoto);

router
    .route("/authors/:id")
    .get(AuthorController.getById)
    .put(AuthorController.update)
    .delete(AuthorController.delete);


module.exports = { router };
