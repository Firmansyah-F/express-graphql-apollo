const { type, vehicle } = require("../db/models");
const { baseResponse } = require("../utils/helpers/baseResponse");

class TypeController {
  static async create(req, res, next) {
    try {
      const createType = await type.create({
        name: req.body.name,
      });
      return baseResponse({
        success: true,
        message: "create new type",
        data: createType,
      })(res);
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const getTypes = await type.findAll();
      return baseResponse({
        success: true,
        message: "get all type",
        data: getTypes,
      })(res);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const typeById = await type.findByPk(req.params.id, {
        include : vehicle
      });
      console.log(typeById);

      return baseResponse({
        success: true,
        message: "get type by Id",
        data: typeById,
      })(res);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const deleteType = await type.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (deleteType) {
        return res.status(204).json();
      }
      return res.status(404).json({
        succes: false,
        message: "type tidak ditemukan",
        data: [],
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const newType = {
        name: req.body.name,
      };
      const typeUpdate = await type.update(newType, {
        where: {
          id: req.params.id,
        },
      });
      if (typeUpdate[0]) {
        const getType = await type.findByPk(req.params.id);
        return baseResponse({
          success: true,
          message: "success update type",
          data: getType,
        })(res);
      }
      return res.status(404).json({
        succes: false,
        message: "data type tidak ditemukan",
        data: [],
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = TypeController;
