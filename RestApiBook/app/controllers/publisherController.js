
const { publisher, book } = require("../db/models");
const { Op } = require("sequelize")


class publisherController {
    static async create(req, res) {
        try {
            const createPublisher = await publisher.create({
                name: req.body.name,
                address: req.body.address,
                email: req.body.email,
                phone: req.body.phone,
                website: req.body.website
            });
            const payload = {
                succes: true,
                message: "success create new publisher",
                data: createPublisher,
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
                
                const publisherTitle = await publisher.findAll({
                    where: {
                        title: { [Op.substring]: req.query.title }
                    }
                });

                const payload = {
                    succes: true,
                    message: "success get publisher title",
                    data: publisherTitle,
                };
                return res.json(payload)
            
        }
            else {
                const publishers = await publisher.findAll();
                console.log(publishers);
                const payload = {
                    succes: true,
                    message: "success get all publishers",
                    data: publishers,
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

    static async getBook(req, res) {
        try {
            const publisherById = await publisher.findByPk(req.params.id, {
                include : book
            });
            console.log(publisherById);
            const payload = {
                succes: true,
                message: "success get publisher",
                data: publisherById,
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

    static async getById(req, res) {
        try {
            const publisherById = await publisher.findByPk(req.params.id)
            console.log(publisherById);
            const payload = {
                succes: true,
                message: "success get publisher",
                data: publisherById,
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
            const deletePublisher = await publisher.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (deletePublisher) {
                return res.status(204).json();
            }
            return res.status(404).json({
                succes: false,
                message: "publisher tidak ditemukan",
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
            const newPublisher = {
                name: req.body.name,
                address: req.body.address,
                email: req.body.email,
                phone: req.body.phone,
                website: req.body.website
            };
            const publisherUpdate = await publisher.update(newPublisher, {
                where: {
                    id: req.params.id,
                },
            });
            if (publisherUpdate[0]) {
                const getPublisher = await publisher.findByPk(req.params.id);
                const payload = {
                    succes: true,
                    message: "success update publisher",
                    data: getPublisher,
                };
                return res.json(payload);
            }
            return res.status(404).json({
                succes: false,
                message: "data publisher tidak ditemukan",
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

module.exports = publisherController;

