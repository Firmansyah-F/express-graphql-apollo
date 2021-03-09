
const { movie, language, genre } = require("../db/models");
const { Op } = require("sequelize")


class MovieController {
    static async create(req, res) {
        try {
            const createMovie = await movie.create({
                title: req.body.title,
                description: req.body.description,
                urlTrailer: req.body.urlTrailer,
                releaseDate: req.body.releaseDate,
                genreId: req.body.genreId,
                languageId: req.body.languageId
            });
            const payload = {
                succes: true,
                message: "success create new movie",
                data: createMovie,
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

            if (req.query.title) {

                
                const movieTitle = await movie.findAll({
                    where: {
                        title: { [Op.substring]: req.query.title }
                    }
                });

                const payload = {
                    succes: true,
                    message: "success get movie title",
                    data: movieTitle,
                };
                return res.json(payload)
            }
            else  {

                const movieLanguage = await movie.findAll({
                    where: {
                        languageId: { [Op.eq]: req.query.languageId }
                    },
                    include: language
                });
    
                const payload = {
                    succes: true,
                    message: "success get movie language",
                    data: movieLanguage,
                };
                return res.json(payload)
            }  
        }
            else {
                const movies = await movie.findAll();
                console.log(movies);
                const payload = {
                    succes: true,
                    message: "success get all movies",
                    data: movies,
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
            const movieById = await movie.findByPk(req.params.id)
            console.log(movieById);
            const payload = {
                succes: true,
                message: "success get movie",
                data: movieById,
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


    static async getMovie(req, res) {
        // console.log(req.query)
        try {

        } catch (error) {
            const payloadError = {
                success: false,
                message: error.message,
                data: error
            };
            return res.status(500).json(payloadError);
        }
    };


    static async getLanguage(req, res) {
        try {
            const { Op } = require("sequelize")


        } catch (error) {
            const payloadError = {
                success: false,
                message: error.message,
                data: error
            };
            return res.status(500).json(payloadError);

        }
    };


    static async delete(req, res) {
        try {
            const deleteMovie = await movie.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (deleteMovie) {
                return res.status(204).json();
            }
            return res.status(404).json({
                succes: false,
                message: "movie tidak ditemukan",
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
            const newMovie = {
                title: req.body.title,
                description: req.body.description,
                urlTrailer: req.body.urlTrailer,
                releaseDate: req.body.releaseDate
            };
            const movieUpdate = await movie.update(newMovie, {
                where: {
                    id: req.params.id,
                },
            });
            if (movieUpdate[0]) {
                const getMovie = await movie.findByPk(req.params.id);
                const payload = {
                    succes: true,
                    message: "success update movie",
                    data: getMovie,
                };
                return res.json(payload);
            }
            return res.status(404).json({
                succes: false,
                message: "data user tidak ditemukan",
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

module.exports = MovieController;

