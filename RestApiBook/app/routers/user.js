const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const { verifikasiJwt, permit } = require("../utils/middleware/authjwt");
const { uploadFotoUser }  = require("../utils/helpers/uploadFotoUser")


router.route("/users")
    .get( verifikasiJwt,permit("guest") ,UserController.getAll)
    .post(verifikasiJwt ,UserController.create)

router.route("/users/:id/upload")
      .post(uploadFotoUser.single("photo"), verifikasiJwt, permit("guest"), UserController.uploadUser);

router.route("/users/:id")
      .get( verifikasiJwt,permit("guest") ,UserController.getById)
      .put( verifikasiJwt,permit("admin") ,UserController.update)
      .delete(verifikasiJwt,permit("admin"),UserController.delete)
module.exports = { router}