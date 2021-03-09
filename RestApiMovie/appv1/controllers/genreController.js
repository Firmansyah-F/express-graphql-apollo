const { genre } = require("../db/models");

class genreController {

    static async getAll(req, res) {
        try {
            const genres = await genre.findAll();
            console.log(genres);
            const payload = {
                succes: true,
                message: "success get all genres",
                data: genres,
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
}

module.exports = genreController;