const mongooseTask = require('mongoose');
const TaskSchema = new mongooseTask.Schema({
  userId: { type: mongooseTask.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  status: { type: String, default: 'pending' },
  dueDate: Date,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongooseTask.model('Task', TaskSchema);