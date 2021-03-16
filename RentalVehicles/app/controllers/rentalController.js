const { vehicle, rental } = require("../db/models");
const { baseResponse } = require("../utils/helpers/baseResponse");

class RentalController {
  static async create(req, res, next) {
    try {
      const createRental = await rental.create({
        userId: req.body.userId,
        vehicleId: req.body.vehicleId,
        startAt: req.body.startAt,
        backAt: req.body.backAt,
        status: req.body.status,
        createdAt : req.body.createdAt,
        updatedAt : req.body.updatedAt
      });
      return baseResponse({
        success: true,
        message: "create new Rental",
        data: createRental,
      })(res);
    } catch (error) {
      next(error);
    }
  }

  static async getTotalPrice(req, res, next) {
    try {
      const getPrice = await vehicle.findByPk(req.params.id);
      const getRentals = await rental.findOne({
        where: {
          vehicleId: req.params.id,
        },
      });

      const biaya = getPrice.dataValues.hourlyPrice;
      const tanggalMulai = getRentals.dataValues.startAt;
      const tanggalSelesai = getRentals.dataValues.backAt;

      if (getPrice) {
        let totalPrice =
          ((tanggalSelesai - tanggalMulai) / 1000 / 3600) * biaya;

        const dataUpdate = {
          userId: getRentals.dataValues.userId,
          vehicleId: getRentals.dataValues.vehicleId,
          totalPrice: Math.ceil(totalPrice),
          startAt: tanggalMulai,
          backAt: tanggalSelesai,
          status: req.body.status,
        };
        console.log(dataUpdate)

        const rentalsUpdate = await rental.update(dataUpdate, {
          where: {
            vehicleId: req.params.id,
          },
        });

        const statusVehicle = {
          status: "off",
        };
        const dataVehicle = await vehicle.update(statusVehicle, {
          where: {
            id: req.params.id,
          },
        });

        const newData = await rental.findOne({
          where: {
            vehicleId: req.params.id,
          },
        });
        return baseResponse({
          success: true,
          message: "success update rental",
          data: newData,
        })(res, 200);
      }
      return baseResponse({
        success: false,
        message: "gagal update rental",
        data: newData,
      })(res, 200);
    } catch (error) {
      res.status(500);
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const getRentals = await rental.findAll();
      return baseResponse({
        success: true,
        message: "get all rental",
        data: getRentals,
      })(res);
    } catch (error) {
      next(error);
    }
  }
  static async getById(req, res, next) {
    try {
      const rentalById = await rental.findByPk(req.params.id);
      console.log(rentalById);

      return baseResponse({
        success: true,
        message: "get vehicle by Id",
        data: rentalById,
      })(res);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const deleteRental = await user.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (deleteRental) {
        return res.status(204).json();
      }
      return res.status(404).json({
        succes: false,
        message: "data Rental tidak ditemukan",
        data: [],
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = RentalController;
