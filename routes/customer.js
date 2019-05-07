const express = require('express');
const router = express.Router();

//Require controller modules
const customer_Controller = require('../controllers/customerController');

//GET register page
router.get('/register', customer_Controller.register_index);

//GET login page
router.get('/login',customer_Controller.login_index);

//GET forgot password page
router.get('/forgotPassword', customer_Controller.forgotPassword_index);

//GET order page
router.get('/orders', customer_Controller.customer_viewOrders);

//GET checkout page
router.get('/checkout', customer_Controller.checkout_index);

//GET update user info page
router.get('/userInfoUpdate', customer_Controller.userInfoUpdate_index);

//POST register
router.post('/register/process',customer_Controller.customer_register);

//POST login
router.post('/login/process', customer_Controller.customer_login);

//GET logout
router.get('/logout/process', customer_Controller.customer_logout);

//POST update info
router.post('/userInfoUpdate/updateInfo', customer_Controller.customer_updateInfo);

//POST reset password
router.post('/forgotPassword/reset', customer_Controller.customer_resetPassword);

//POST checkout
router.post('/checkout/process', customer_Controller.customer_checkout);

module.exports = router;
