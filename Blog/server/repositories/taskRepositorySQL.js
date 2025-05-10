// repositories/taskRepositorySQL.js
const { TaskSQL } = require('../models/TaskSQL'); // SQL model (e.g., Sequelize ORM)
const BaseRepository = require('./baseRepository');

// SQL specific repository extending the BaseRepository
class TaskRepositorySQL extends BaseRepository {
  constructor() {
    super(TaskSQL); // Pass the SQL model to the base repository
  }

  // Add any SQL-specific methods if needed, otherwise inherit from BaseRepository
}

module.exports = new TaskRepositorySQL();
