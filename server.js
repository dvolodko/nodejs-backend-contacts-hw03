const mongoose = require('mongoose');

const app = require('./app');

const DB_HOST =
  'mongodb+srv://dvolodko:lQD8jMQRrduyRvrl@dvolodkocluster.02yrt0o.mongodb.net/db_contacts?retryWrites=true&w=majority';

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
