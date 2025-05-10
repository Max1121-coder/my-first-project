const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user._id });
  res.send(tasks);
};

exports.createTask = async (req, res) => {
  const task = new Task({ ...req.body, userId: req.user._id });
  await task.save();
  res.send(task);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    req.body,
    { new: true }
  );
  res.send(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
  res.send('Deleted');
};