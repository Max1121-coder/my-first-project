
const app = require('./app');
const connectDB = require('./dbConnect');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});