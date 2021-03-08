
const { comment} = require("./../db/models");

class CommentController {
    static async create(req, res) {
        try {
            const createComment = await comment.create({
                body: req.body.body,
                todoId: req.body.todoId,
            });
            const payload = {
                succes: true,
                message: "success create comment",
                data: createComment,
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
            const comments = await comment.findAll();
            console.log(comments);
            const payload = {
                succes: true,
                message: "success create comment",
                data: comments,
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
            const commentById = await comment.findByPk(req.params.id)
            console.log(commentById);
            const payload = {
                succes: true,
                message: "success get comment",
                data: commentById,
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
            const deleteComment = await comment.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (deleteComment) {
                return res.status(204).json();
            }
            return res.status(404).json({
                succes: false,
                message: "comment tidak ditemukan",
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
            const newComment = {
                body: req.body.body,
                commentId: req.body.commentId,
            };
            const commentUpdate = await comment.update(newComment, {
                where: {
                    id: req.params.id,
                },
            });
            if (commentUpdate[0]) {
                const getComment = await comment.findByPk(req.params.id);
                const payload = {
                    succes: true,
                    message: "success update comment",
                    data: getComment,
                };
                return res.json(payload);
            }
            return res.status(404).json({
                succes: false,
                message: "comment tidak ditemukan",
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

module.exports = CommentController;

