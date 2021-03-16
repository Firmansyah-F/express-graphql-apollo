const { vehicle } = require("../db/models");
const { baseResponse } = require("../utils/helpers/baseResponse");

class VehicleController {
  static async create(req, res, next) {
    try {
      const createVehicle = await vehicle.create({
        name: req.body.name,
        typeId: req.body.typeId,
        hourlyPrice: req.body.hourlyPrice,
        licensePlate: req.body.licensePlate,
        status: req.body.status,
      });
      return baseResponse({
        success: true,
        message: "create new vehicle",
        data: createVehicle,
      })(res);
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {

      const getVehicles = await vehicle.findAll();
      return baseResponse({
        success: true,
        message: "get all vehicle",
        data: getVehicles,
      })(res);
    } catch (error) {
      next(error);
    }
  }
  static async uploadVehicle(req, res, next) {
    try {
      const file = req.file.path;
      const id = req.params.id;

      const dataVehicle = await vehicle.findByPk(id);

      const dataUrl = {
        name: dataVehicle.dataValues.name,
        typeId: dataVehicle.dataValues.typeId,
        hourlyPrice: dataVehicle.dataValues.hourlyPrice,
        licensePlate: dataVehicle.dataValues.licensePlate,
        status: dataVehicle.dataValues.status,
        photo: file,
      };
      if (dataVehicle) {
        const dataUpdate = await vehicle.update(dataUrl, {
          where: {
            id: id,
          },
        });
        const dataVehicle = await vehicle.findByPk(id);
        return baseResponse({
          success: true,
          message: "success",
          data: dataVehicle,
        })(res, 201);
      }
      return (
        baseResponse({ success: false, message: "data tidak ada", data: [] }),
        (res, 200)
      );
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const vehicleById = await vehicle.findByPk(req.params.id);
      console.log(vehicleById);

      return baseResponse({
        success: true,
        message: "get vehicle by Id",
        data: vehicleById,
      })(res);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const deleteVehicle = await vehicle.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (deleteVehicle) {
        return res.status(204).json();
      }
      return res.status(404).json({
        succes: false,
        message: "vehicle tidak ditemukan",
        data: [],
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const newVehicle = {
        name: req.body.name,
        typeId: req.body.typeId,
        hourlyPrice: req.body.hourlyPrice,
        licensePlate: req.body.licensePlate,
        status: req.body.status,
      };
      const vehicleUpdate = await vehicle.update(newVehicle, {
        where: {
          id: req.params.id,
        },
      });
      if (vehicleUpdate[0]) {
        const getVehicle = await vehicle.findByPk(req.params.id);
        return baseResponse({
          success: true,
          message: "success update vehicle",
          data: getVehicle,
        })(res);
      }
      return res.status(404).json({
        succes: false,
        message: "data vehicle tidak ditemukan",
        data: [],
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = VehicleController;
