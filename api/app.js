var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var petRouter = require('./routes/petRouter');
var app = express();
// view engine setup
//app.set('views', path.join(\_\_dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(\_\_dirname, 'public')));
module.exports = (app) => {
  var pet = require('./controllers/petController');
  app.post('/createpet', pet.create);
  app.get('/listpet', pet.findAll);
}
var config = require('./config');
var url = config.mongoUrl;
var connect = mongoose.connect(url, {
  useNewUrlParser: true
});
connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });
require('./routes/petRouter')(app);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
