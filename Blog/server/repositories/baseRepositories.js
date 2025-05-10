
// Define basic CRUD operations (can be extended)
class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  // Find all records
  async findAll(query = {}) {
    return await this.model.find(query);
  }

  // Find a single record by ID
  async findById(id) {
    return await this.model.findById(id);
  }

  // Create a new record
  async create(data) {
    const newRecord = new this.model(data);
    return await newRecord.save();
  }

  // Update a record by ID
  async update(id, data) {
    return await this.model.findByIdAndUpdate(id, data, { new: true });
  }

  // Delete a record by ID
  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

module.exports = BaseRepository;
