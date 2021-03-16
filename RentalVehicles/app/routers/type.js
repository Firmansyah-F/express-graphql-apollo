const express = require("express");
const router = express.Router();
const TypeController = require("../controllers/typeController");
const { verifikasiJwt, permit } = require("../utils/middleware/authjwt");
const { validateResource } = require('../utils/middleware/validator')
const { typeSchema } = require("../utils/helpers/validation");

router
  .route("/types")
  .get(verifikasiJwt, TypeController.getAll)
  .post(verifikasiJwt, permit("admin"), validateResource(typeSchema), TypeController.create);

router
  .route("/types/:id")
  .get(verifikasiJwt, TypeController.getById)
  .put(verifikasiJwt, permit("admin"), validateResource(typeSchema), TypeController.update)
  .delete(verifikasiJwt, permit("admin"), TypeController.delete);

module.exports = { router };
