const tasks = require("../data/tasks");

const getTasks = (req, res) => {
  res.json(tasks);
};

const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Tarea no encontrada"
    });
  }

  res.json(task);
};

const createTask = (req, res) => {
  const { title, completed } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "El título es obligatorio"
    });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    completed: completed || false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Tarea no encontrada"
    });
  }

  const { title, completed } = req.body;

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
};

const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);

  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Tarea no encontrada"
    });
  }

  tasks.splice(index, 1);

  res.json({
    message: "Tarea eliminada correctamente"
  });
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};