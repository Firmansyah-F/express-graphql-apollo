// const todo = require("../db/models/todo");
const { user, todo } = require("./../db/models");

class UserController {
    static async create(req, res) {
        try {
            const createUser = await user.create({
                username: req.body.username,
                fullname: req.body.fullname,
                email: req.body.email,
                password: req.body.password,
            });
            const payload = {
                succes: true,
                message: "success create user",
                data: createUser,
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
            const users = await user.findAll();
            console.log(users);
            const payload = {
                succes: true,
                message: "success create user",
                data: users,
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
            const userById = await user.findByPk(req.params.id, {
                include : todo,
            });
            console.log(userById);
            const payload = {
                succes: true,
                message: "success get user",
                data: userById,
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
    
    static async getTodo (req, res) {
      try {
          const userTodo = await user.findOne ({
            where : {id : req.params.id}
          })
          // console.log(userTodo)
          return res.json(userTodo)
          console.log("test")
      } catch (error) {
        
      }
    } 

    static async delete(req, res) {
        // raw query = delete from users where id = 1
        try {
            const deleteUser = await user.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (deleteUser) {
                return res.status(204).json();
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

    static async update(req, res) {
        try {
            const newUser = {
                username: req.body.username,
                email: req.body.email,
            };
            const userUpdate = await user.update(newUser, {
                where: {
                    id: req.params.id,
                },
            });
            if (userUpdate[0]) {
                const getUser = await user.findByPk(req.params.id);
                const payload = {
                    succes: true,
                    message: "success update user",
                    data: getUser,
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

module.exports = UserController;

