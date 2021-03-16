const express = require("express");
const router = express.Router();
const VehicleController = require("../controllers/vehicleController");
const { verifikasiJwt, permit } = require("../utils/middleware/authjwt");
const { uploadFoto } = require("../utils/helpers/uploadFoto");
const { validateResource } = require("../utils/middleware/validator");
const { vehicleSchema } = require("../utils/helpers/validation");

router
  .route("/vehicles")
  .get(verifikasiJwt,permit("admin","guest"), VehicleController.getAll)
  .post(
    verifikasiJwt,
    permit("admin"),
    validateResource(vehicleSchema),
    VehicleController.create
  );

router
  .route("/vehicles/:id/upload")
  .post(
    uploadFoto.single("photo"),
    verifikasiJwt,
    permit("admin"),
    validateResource(vehicleSchema),
    VehicleController.uploadVehicle
  );

router
  .route("/vehicles/:id")
  .get(verifikasiJwt, permit("admin","guest"),VehicleController.getById)

router
  .route("/vehicles/:id")
  .put(verifikasiJwt, permit("admin"), VehicleController.update)
  .delete(
    verifikasiJwt,
    permit("admin"),
    validateResource(vehicleSchema),
    VehicleController.delete
  );
module.exports = { router };
