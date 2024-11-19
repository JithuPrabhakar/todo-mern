const router = require("express").Router();
const User = require("../models/user");
const Todo = require("../models/todo");

router.post("/addTask", async (req, res) => {
  try {
    const { title, description, email } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const newTodo = new Todo({ title, description, user: existingUser });
      await newTodo.save().then(() => res.status(200).json({ newTodo }));
      existingUser.todo.push(newTodo);
      existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
});

router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, description, email } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const todo = await Todo.findByIdAndUpdate(req.params.id, {
        title,
        description,
      });
      todo.save().then(() => res.status(200).json({ message: "Task updated" }));
    }
  } catch (error) {
    console.log(error);
  }
});

router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOneAndUpdate(
      { email },
      { $pull: { todo: req.params.id } }
    );

    if (existingUser) {
      await Todo.findByIdAndDelete(req.params.id).then(() =>
        res.status(200).json({ message: "Task deleted" })
      );
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("getTasks/:id", async (req, res) => {
  const todos = await Todo.find({ user: req.params.id }).sort({
    createdAt: -1,
  });
  if (todos.length !== 0) res.status(200).json({ todos });
  else res.status(200).json({ message: "No tasks" });
});

module.exports = router;
