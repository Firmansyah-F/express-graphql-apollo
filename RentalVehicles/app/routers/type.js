const express = require("express");
const router = express.Router();
const TypeController = require("../controllers/typeController");
const { verifikasiJwt, permit } = require("../utils/middleware/authjwt");
const { validateResource } = require('../utils/middleware/validator')
const { typeSchema } = require("../utils/helpers/validation");

router
  .route("/types")
  .get(verifikasiJwt, permit("admin","guest"),TypeController.getAll)
  .post(verifikasiJwt, permit("admin"), validateResource(typeSchema), TypeController.create);

router.route("/types/:id/vehicles").get(verifikasiJwt, permit("admin","guest"),TypeController.getById)

router
  .route("/types/:id")
  .put(verifikasiJwt, permit("admin"), validateResource(typeSchema), TypeController.update)
  .delete(verifikasiJwt, permit("admin"), TypeController.delete);

module.exports = { router };
