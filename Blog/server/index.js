const appMain = require('./app');
const PORT = process.env.PORT || 5000;
appMain.listen(PORT, () => console.log(`Server running on port ${PORT}`));