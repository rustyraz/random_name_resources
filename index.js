const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const DB_USER = 'upwork_dev';
const DB_PASS = 'dev_123';
const DB_URL = 'mongodb://'+DB_USER+':'+DB_PASS+'@ds133004.mlab.com:33004/random_names'
mongoose.connect(DB_URL,  { useMongoClient: true });

const app = express();

//middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//imports routes
const names = require('./routes/names');

//Routes
app.get('/', (req, res) => {
  res.status(200).json({
    appName: 'Random Names Resources',
    developer: "Peter Ngerere",
    email: "pngesh@gmail.com",
    version: 1.0,
    year: 2017
  });
});
app.use('/api/names', names);

//catch any 404 errors amd forward them to the error handler
app.use((req, res, next)=> {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

//Error handler function
app.use((err, req, res, next) => {
  //cehck if the enviroment is dev or production
  const error = app.get('env') === 'development' ? err : {};
  const status = err.status || 500;

  //respond to client
  res.status(status).json({
    error: {
      message: error.message
    }
  });

  //respond to ourselves
  console.log(err);
});

//Start the server
const PORT = process.env.PORT || app.get('port') || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`) );
