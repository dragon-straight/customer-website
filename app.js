const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('express-handlebars');
const hbsHelpers = require('./handlebarsHelper');
//const http = require('http');
const port = process.env.PORT || 3000;

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://dragon-straight:8910JQKA@cluster0-dqpzz.mongodb.net/e-commerce';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const homeRouter = require('./routes/home');
const catalogRouter = require('./routes/catalog');
const aboutRouter = require('./routes/about');
const customerRouter = require('./routes/customer');

var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/', partialsDir:[
    //  path to your partials
    path.join(__dirname, 'views/partials/')
  ], helpers: hbsHelpers}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', homeRouter);
app.use('/', catalogRouter);
app.use('/about',aboutRouter);
app.use('/', customerRouter);

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

app.listen(port, function(){
  console.log('Server is running');
});

module.exports = app;