const mongoose = require('mongoose');

const connectDatabase = () => {
    console.log('db is called')
    console.log(process.env.MONGODB_URI);
  mongoose
    .connect(process.env.MONGODB_URI)
    .then((con) => {
      console.log(`MongoDB is connected ${con.connection.host}`);
    })
    .catch((err) => {
      console.log(`Error connect to DB ${err}`);
      process.exit() //immediately stops the Node.js process.
    });
};

module.exports = connectDatabase;