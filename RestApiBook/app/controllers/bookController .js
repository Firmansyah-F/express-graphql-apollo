
const { book } = require("../db/models");
const { Op } = require("sequelize");
const { baseResponse } = require("../utils/helpers/baseResponse");
const { uploadCover } = require("../utils/helpers/uploadFoto")
const { bookSchema } = require("../utils/helpers/validation")
const { validateResource } = require("../utils/middleware/validator")
const yup = require('yup')
const joi = require('joi')


class bookController {
    static async create(req, res) {
        try {
            const createBook = await book.create({
                authorId: req.body.authorId,
                publisherId: req.body.publisherId,
                title: req.body.title,
                price: req.body.price,
                year: req.body.year,
                createAt:req.body.createAt,
                updateAt:req.body.updateAt
            });
            const bookSchema = yup.object({
                // authorId: joi.number().positive().required().message({
                //     'any.required': 'The `{{#label}}` field is required',
                //     'number.base': 'The `{{#label}}` field must be a number'}),
                // // publisherId: yup.number().positive().required(),
                // title: joi.string().required().message({
                //     'any.required': 'The `{{#label}}` field is required',
                //     'string.base': 'The `{{#label}}` field must be a string'
                // }),
                authorId:yup.number().positive().require(),
                publisherId:yup.number().positive().require(),
                title:yup.string().required(),
                price: yup.string().nullable(),
                year: yup.date().default(),
                createAt: yup.date().default(),
                updateAt: yup.date().default(),
              });
                            
              bookSchema
                .isValid(createBook)
                .then((isValid) => console.log(`data book valid? ${isValid}`));

            const payload = {
                succes: true,
                message: "success create new book",
                data: createBook,
            };
            return res.status(201).json(payload);

        } catch (error) {
            const payloadError = {
                success: false,
                message: error.message,
                data: error,
            };
            return res.status(500).json(payloadError);
        }
    }

    static async uploadCover(req, res, next) {
        try {
          const file = req.file.path;
          const id = req.params.id;
    
          const dataBook = await author.findByPk(id);
    
          const dataUrl = {
            authorId: dataBook.dataValues.authorId,
            publisherId: dataBook.dataValues.publisherId,
            title: dataBook.dataValues.title,
            price:dataBook.dataValues.price,
            year:dataBook.dataValues.year,
            foto: file,
          };
          if (dataBook) {
            const dataUpdate = await book.update(dataUrl, {
              where: {
                id: id,
              },
            });
            const dataBook = await author.findByPk(id);
            return baseResponse({
              success: true,
              message: "success",
              data: dataBook,
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

    static async getAll(req, res) {
        try {
          if (Object.keys(req.query).length !== 0){

                const bookTitle = await book.findAll({
                    where: {
                        title: { [Op.substring]: req.query.title }
                    }
                });

                const payload = {
                    succes: true,
                    message: "success get book title",
                    data: bookTitle,
                };
                return res.json(payload)

        }
            else {
                const books = await book.findAll();
                console.log(books);
                const payload = {
                    succes: true,
                    message: "success get all books",
                    data: books,
                };
                return res.json(payload);
            }

        } catch (error) {
            const payloadError = {
                success: false,
                message: error.message,
                data: error,
            };
            return res.status(500).json(payloadError);
        }
    }


    static async getById(req, res) {
        try {
            const bookById = await book.findByPk(req.params.id)
            console.log(bookById);
            const payload = {
                succes: true,
                message: "success get book",
                data: bookById,
            };
            return res.json(payload);
        } catch (error) {
            const payloadError = {
                success: false,
                message: error.message,
                data: error,
            };
            return res.status(500).json(payloadError);
        }
    }

    static async delete(req, res) {
        try {
            const deleteBook = await book.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (deleteBook) {
                return res.status(204).json();
            }
            return res.status(404).json({
                succes: false,
                message: "book tidak ditemukan",
                data: [],
            });
        } catch (error) {
            const payloadError = {
                success: false,
                message: error.message,
                data: error,
            };
            return res.status(500).json(payloadError);
        }
    }


    static async update(req, res) {
        try {
            const newBook = {
                authorId: req.body.authorId,
                publisherId: req.body.publisherId,
                title: req.body.title,
                price: req.body.price,
                year: req.body.year
            };
            const bookUpdate = await book.update(newBook, {
                where: {
                    id: req.params.id,
                },
            });
            if (bookUpdate[0]) {
                const getBook = await book.findByPk(req.params.id);
                const payload = {
                    succes: true,
                    message: "success update book",
                    data: getBook,
                };
                return res.json(payload);
            }
            return res.status(404).json({
                succes: false,
                message: "data book tidak ditemukan",
                data: [],
            });
        } catch (error) {
            const payloadError = {
                success: false,
                message: error.message,
                data: error,
            };
            return res.status(500).json(payloadError);
        }
    }
}

module.exports = bookController;

