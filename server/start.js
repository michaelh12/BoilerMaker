// The following is in the `start.js` file

// say our sequelize instance is create in 'db.js'
const { db } = require('./db/models');
// and our server that we already created and used as the previous entry point is 'server.js'
const app = require('./app');
const port = process.env.PORT || 3000;

/** 
 * sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  }); */

db.sync({ force: true }) // sync our database
  .then(() => {
    db.authenticate();
  })
  .then(() => {
    console.log('Connection to database has been established successfully.');
  })
  .then(function() {
    app.listen(port, () => {
      console.log(`Express Server is listening to requests on port ${port}`);
    }); // then start listening with our express server once we have synced
  })
  .catch(err => {
    console.log(err);
  });
