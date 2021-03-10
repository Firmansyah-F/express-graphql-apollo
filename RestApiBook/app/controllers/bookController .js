
const { book } = require("../db/models");
const { Op } = require("sequelize")


class bookController {
    static async create(req, res) {
        try {
            const createBook = await book.create({
                authorId: req.body.authorId,
                publisherId: req.body.publisherId,
                title: req.body.title,
                price: req.body.price,
                year: req.body.year
            });
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

