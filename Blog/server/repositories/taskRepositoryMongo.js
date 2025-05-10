// repositories/taskRepositoryMongo.js
const Task = require('../models/Task'); // MongoDB model
const BaseRepository = require('./baseRepository');

// MongoDB specific repository extending the BaseRepository
class TaskRepositoryMongo extends BaseRepository {
  constructor() {
    super(Task); // Pass the MongoDB model to the base repository
  }

  // Add any MongoDB-specific methods if needed, otherwise inherit from BaseRepository
}

module.exports = new TaskRepositoryMongo();
