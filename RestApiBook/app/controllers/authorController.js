const { author, book } = require("../db/models");
const { Op } = require("sequelize");
const { baseResponse } = require("../utils/helpers/baseResponse");



class AuthorController {
  static async create(req, res, next) {
    try {
      const createAuthor = await author.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      });

      return baseResponse({
        success: true,
        message: "create new author",
        data: createAuthor,
      })(res);

      // const payload = {
      //     succes: true,
      //     message: "success create new author",
      //     data: createAuthor,
      // };
      // return res.status(201).json(payload);
    } catch (error) {
      next(error);

      // const payloadError = {
      //     success: false,
      //     message: error.message,
      //     data: error,
      // };
      // return res.status(500).json(payloadError);
    }
  }

  static async uploadFoto(req, res, next) {
    try {
      const file = req.file.path;
      const id = req.params.id;

      const dataAuthor = await author.findByPk(id);

      const dataUrl = {
        firstName: dataAuthor.dataValues.firstName,
        lastName: dataAuthor.dataValues.lastName,
        email: dataAuthor.dataValues.email,
        foto: file,
      };
      if (dataAuthor) {
        const dataUpdate = await author.update(dataUrl, {
          where: {
            id: id,
          },
        });
        const dataAuthor = await author.findByPk(id);
        return baseResponse({
          success: true,
          message: "success",
          data: dataAuthor,
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

  static async getAll(req, res, next) {
    try {
      if (Object.keys(req.query).length !== 0) {
        const authorBook = await author.findAll({
          where: {
            title: { [Op.substring]: req.query.title },
          },
        });

        return baseResponse({
          success: true,
          message: "get author Book",
          data: authorBook,
        })(res);
      } else {
        const authors = await author.findAll();
        console.log(authors);

        return baseResponse({
          success: true,
          message: "get all authors",
          data: authors,
        })(res);
      }
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const authorById = await author.findByPk(req.params.id);
      console.log(authorById);

      return baseResponse({
        success: true,
        message: "get author by Id",
        data: authorById,
      })(res);
    } catch (error) {
      next(error);
    }
  }

  static async getBook(req, res, next) {
    try {
      const authorById = await author.findByPk(req.params.id, {
        include: book,
      });
      console.log(authorById);
      return baseResponse({
        success: true,
        message: "get author and book",
        data: authorById,
      })(res);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const deleteAuthor = await author.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (deleteAuthor) {
        return res.status(204).json();
      }
      return res.status(404).json({
        succes: false,
        message: "author tidak ditemukan",
        data: [],
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const newAuthor = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      };
      const authorUpdate = await author.update(newAuthor, {
        where: {
          id: req.params.id,
        },
      });
      if (authorUpdate[0]) {
        const getAuthor = await author.findByPk(req.params.id);
        return baseResponse({
          success: true,
          message: "success update author",
          data: getAuthor,
        })(res);
      }
      return res.status(404).json({
        succes: false,
        message: "data author tidak ditemukan",
        data: [],
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthorController;
