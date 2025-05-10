const taskRepository = require('../repositories/taskRepositoryMongo'); // or SQL based on env

exports.getTasks = async (userId) => {
  return await taskRepository.findAll({ userId });
};

exports.createTask = async (userId, taskData) => {
  return await taskRepository.create({ ...taskData, userId });
};

exports.updateTask = async (taskId, userId, updateData) => {
  const task = await taskRepository.findById(taskId);
  if (!task || task.userId.toString() !== userId.toString()) {
    return null;
  }
  return await taskRepository.update(taskId, updateData);
};

exports.deleteTask = async (taskId, userId) => {
  const task = await taskRepository.findById(taskId);
  if (!task || task.userId.toString() !== userId.toString()) {
    return null;
  }
  return await taskRepository.delete(taskId);
};