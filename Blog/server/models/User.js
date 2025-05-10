const mongooseUser = require('mongoose');
const UserSchema = new mongooseUser.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
module.exports = mongooseUser.model('User', UserSchema);