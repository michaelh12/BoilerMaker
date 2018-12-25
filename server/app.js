const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./db/db');
const passport = require('passport');

//configure and create our database session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbStore = new SequelizeStore({ db: db });
//sync so that our session table gets created
dbStore.sync();

//passport registration
passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

//logging middleware
app.use(morgan('dev'));
//static middleware to serve static files
app.use(express.static(path.join(__dirname, '../public')));
//parsing middleware to use req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Session Middleware
app.use(
  session({
    //set environment variable process.env.Session_Secret
    secret: 'a wildly insecure secret',
    store: dbStore,
    resave: false,
    saveUninitialized: false,
  })
);

//initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//api routes
app.use('/api', require('./api'));

//auth routes
app.use('/auth', require('./auth'));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;

//**moved to start.js */

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`Your server is listening for requrests on port ${port}`);
// });
