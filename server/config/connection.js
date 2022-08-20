const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://ekowbossman:bossman1982@cluster0.uewnktn.mongodb.net/book-search-engine?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
  
});

module.exports = mongoose.connection;
