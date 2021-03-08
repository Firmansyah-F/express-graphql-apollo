
const { todo , comment} = require("./../db/models");

class TodoController {
    static async create(req, res) {
        try {
            const createTodo = await todo.create({
                title: req.body.title,
                description: req.body.description,
                userId: req.body.userId,
            });
            const payload = {
                succes: true,
                message: "success create todo",
                data: createTodo,
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
            const todos = await todo.findAll();
            console.log(todos);
            const payload = {
                succes: true,
                message: "success create todo",
                data: todos,
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
            const todoById = await todo.findByPk(req.params.id, {
                include : comment,
            });
            console.log(todoById);
            const payload = {
                succes: true,
                message: "success get todo",
                data: todoById,
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
        // raw query = delete from users where id = 1
        try {
            const deleteTodo = await todo.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (deleteTodo) {
                return res.status(204).json();
            }
            return res.status(404).json({
                succes: false,
                message: "todo tidak ditemukan",
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
            const newTodo = {
                title: req.body.title,
                description: req.body.description,
            };
            const todoUpdate = await todo.update(newTodo, {
                where: {
                    id: req.params.id,
                },
            });
            if (todoUpdate[0]) {
                const getTodo = await todo.findByPk(req.params.id);
                const payload = {
                    succes: true,
                    message: "success update todo",
                    data: getTodo,
                };
                return res.json(payload);
            }
            return res.status(404).json({
                succes: false,
                message: "todo tidak ditemukan",
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

module.exports = TodoController;

