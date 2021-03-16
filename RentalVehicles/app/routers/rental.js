const express = require("express");
const router = express.Router();
const RentalController = require("../controllers/rentalController");
const { verifikasiJwt, permit } = require("../utils/middleware/authjwt");


router
  .route("/rentals")
  .get(verifikasiJwt, permit("admin","guest"),RentalController.getAll)
  .post(verifikasiJwt, permit("admin"), RentalController.create);
  

// router.route("/types/:id/vehicles").get(verifikasiJwt, TypeController.getById)
router
  .route("/rentals/:id/status")
  .patch(permit("admin"),RentalController.getTotalPrice)


router
  .route("/rentals/:id")
  .get(verifikasiJwt, permit("admin","guest"), RentalController.getById)
  .delete(verifikasiJwt, permit("admin"), RentalController.delete)

//   .delete(verifikasiJwt, permit("admin"), TypeController.delete);

module.exports = { router };
