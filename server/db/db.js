const Sequelize = require('sequelize');

const db = new Sequelize(
  //need to createdb before starting*********
  process.env.Database_URL || 'postgres://localhost:5432/boilermaker',
  {
    logging: false, // unless you like the logs
    // ...and there are many other options you may want to play with
  }
);

module.exports = db;
