var createError = require('http-errors');
var express = require('express');
var path = require('path');
const Joi = require('joi');
//Joi.objectId = require('joi-objectid')(Joi);
var logger = require('morgan');
const mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const doctors = require("./routes/doctor");
const patients = require("./routes/patient");
const medicine = require("./routes/medicine");
const departments = require("./routes/department");
const healthcareassistants = require("./routes/healthcareassistants");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/hospital')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));
  
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/doctors", doctors);
app.use("/medicines", medicine);
app.use("/patients", patients);
app.use("/departments", departments);
app.use("/assistants", healthcareassistants);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
