import Todos from "../models/todos.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todos.find({ user: req.header("user") }).sort({
      date: -1,
    });
    res.status(200).json({
      message: "success",
      data: todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

export const createTodo = async (req, res) => {
  try {
    const todo = await Todos.create(req.body);
    res.status(200).json({
      message: "success",
      data: todo,
    });
  } catch (error) {
    console.log(console.error());
    res.status(500).send("Server Error");
  }
};

export const getTodo = async (req, res) => {
  try {
    const todo = await Todos.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Not found " });
    }
    res.status(200).json({
      message: "success",
      data: todo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todos.findByIdAndRemove(req.params.id);
    console.log(todo);
    if (!todo) {
      return res.status(404).json({ message: "Not found " });
    }
    res.status(200).json({
      message: "success",
      data: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

export const updateTodo = async (req, res) => {
  try {
    let todo = await Todos.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Not found " });
    }

    todo = await Todos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      message: "success",
      data: todo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
