const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('express-handlebars');
//const http = require('http');
const port = process.env.PORT || 3000;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const homepageRouter = require('./routes/homepage');
const cartRouter = require('./routes/cart');
const checkoutRouter = require('./routes/checkout')
const listRouter = require('./routes/list');
const productRouter = require('./routes/single-product');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const forgotPasswordRouter = require('./routes/forgotPassword');
const userInfoUpdateRouter = require('./routes/userInfoUpdate');
const ordersRouter = require('./routes/orders');

var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/', partialsDir:[
    //  path to your partials
    path.join(__dirname, 'views/partials/')
  ]}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/index', indexRouter);
app.use('/', homepageRouter);
app.use('/users', usersRouter);
app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter);
app.use('/list', listRouter);
app.use('/single-product', productRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/forgotPassword', forgotPasswordRouter);
app.use('/userInfoUpdate', userInfoUpdateRouter);
app.use('/orders', ordersRouter);
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

app.listen(port, function () {
  console.log(`Server is running`);
});

module.exports = app;