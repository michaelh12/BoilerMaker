const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

//logging middleware
app.use(morgan('dev'));
//static middleware to serve static files
app.use(express.static(path.join(__dirname, '../public')));
//parsing middleware to use req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//api routes
app.use('/api', require('./api'));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Your server is listening for requrests on port ${port}`);
});
