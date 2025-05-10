// controllers/taskController.js
const taskService = require('../services/taskService');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getTasks(req.user._id);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get tasks' });
  }
};

exports.createTask = async (req, res) => {
  try {
    const newTask = await taskService.createTask(req.user._id, req.body);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create task' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await taskService.updateTask(req.params.id, req.user._id, req.body);
    if (!updatedTask) return res.status(404).json({ message: 'Task not found or unauthorized' });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update task' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const deleted = await taskService.deleteTask(req.params.id, req.user._id);
    if (!deleted) return res.status(404).json({ message: 'Task not found or unauthorized' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete task' });
  }
};
