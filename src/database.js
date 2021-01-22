const mongoose = require('mongoose');
const config = require('./config');

mongoose
  .connect(config.mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
  })
  .then((db) => console.log('Db expensetracker is connected'))
  .catch((error) => console.log(error));
