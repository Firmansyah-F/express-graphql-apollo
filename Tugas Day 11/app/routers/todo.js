
const express = require("express");
const router = express.Router();
const TodoController = require("./../controllers/todoController");
// const { getAll } = require("./../controllers/todoController");

// router.get("/todos", TodoController.getAllTodos);
// router.get("/todos", TodoController.getAll);

// module.exports = { router };


router.route("/todos").get(TodoController.getAll).post(TodoController.create);

router
    .route("/todos/:id")
    .get(TodoController.getById)
    .put(TodoController.update)
    .delete(TodoController.delete);

module.exports = { router };
