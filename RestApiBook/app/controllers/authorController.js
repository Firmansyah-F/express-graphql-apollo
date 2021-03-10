
const { author, book } = require("../db/models");
const { Op } = require("sequelize")


class AuthorController {
    static async create(req, res) {
        try {
            const createAuthor = await author.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            });
            // this.response(succes(createAuthor,res))
            const payload = {
                succes: true,
                message: "success create new author",
                data: createAuthor,
            };
            return res.status(201).json(payload);

        } catch (error) {
            // this.response(failed(res))
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

                const authorTitle = await author.findAll({
                    where: {
                        title: { [Op.substring]: req.query.title }
                    }
                });

                const payload = {
                    succes: true,
                    message: "success get author title",
                    data: authorTitle,
                };
                return res.json(payload)
            
 
        }
            else {
                const authors = await author.findAll();
                console.log(authors);
                const payload = {
                    succes: true,
                    message: "success get all authors",
                    data: authors,
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
            const authorById = await author.findByPk(req.params.id)
            console.log(authorById);
            const payload = {
                succes: true,
                message: "success get author",
                data: authorById,
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

    static async getBook(req, res) {
        try {
            const authorById = await author.findByPk(req.params.id, {
                include : book
            });
            console.log(authorById);
            const payload = {
                succes: true,
                message: "success get author",
                data: authorById,
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
            const newAuthor = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            };
            const authorUpdate = await author.update(newAuthor, {
                where: {
                    id: req.params.id,
                },
            });
            if (authorUpdate[0]) {
                const getAuthor = await author.findByPk(req.params.id);
                const payload = {
                    succes: true,
                    message: "success update author",
                    data: getAuthor,
                };
                return res.json(payload);
            }
            return res.status(404).json({
                succes: false,
                message: "data author tidak ditemukan",
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
    
    response(succes , failed) {
        function succes (method,res) {
            const payload = {
                succes: true,
                message: `success ${method} author`,
                data: method,
            };
            return res.json(payload);
        }
        function failed (res) {
            const payloadError = {
                success: false,
                message: error.message,
                data: error,
            };
            return res.status(500).json(payloadError);
        }
    }

}

module.exports = AuthorController;

