const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const { verifikasiJwt, permit } = require("../utils/middleware/authjwt");
const { uploadFoto } = require("../utils/helpers/uploadFoto");
const { validateResource } = require('../utils/middleware/validator')
const { userSchema } = require("../utils/helpers/validation");

router
  .route("/users")
  .get(verifikasiJwt,permit("admin","guest"),UserController.getAll)
  .post(verifikasiJwt ,permit("admin"),validateResource(userSchema), UserController.create);

router
  .route("/users/:id/upload")
  .post(
    uploadFoto.single("photo"),
    verifikasiJwt, permit("admin"), validateResource(userSchema),
    UserController.uploadUser
  );

router
  .route("/users/:id")
  .get(verifikasiJwt,permit("admin","guest"), UserController.getById)
  .put(verifikasiJwt, permit("admin"), validateResource(userSchema), UserController.update)
  .delete(verifikasiJwt, permit("admin"), UserController.delete);
module.exports = { router };
