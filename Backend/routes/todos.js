import express from "express";

import {
  getTodos,
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todos.js";

const router = express.Router();

router.get("/", getTodos);

router.post("/", createTodo);

router.get("/:id", getTodo);

router.delete("/:id", deleteTodo);

router.put("/:id", updateTodo);

export default router;
