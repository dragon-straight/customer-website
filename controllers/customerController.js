const Customer = require('../models/customer');

exports.register_index = function(req, res){
    res.render('customer/register', { pageTitle: 'Đăng ký' });
};

exports.login_index = function(req, res){
    res.render('customer/login', { pageTitle: 'Đăng nhập' });
};

exports.forgotPassword_index = function(req, res){
    res.render('customer/forgotPassword', { pageTitle: 'Phục hồi mật khẩu' });
};

exports.customer_viewOrders = function(req, res) {
    res.render('customer/orders', { pageTitle: 'Lịch sử và trạng thái mua hàng' });
};

exports.checkout_index = function(req, res){
    res.render('customer/checkout', { pageTitle: 'Thanh toán' });
};

exports.userInfoUpdate_index = function(req, res){
    res.render('customer/userInfoUpdate', { pageTitle: 'Cập nhật thông tin tài khoản' });
};

exports.customer_register = function(req, res){

};

exports.customer_login = function(req, res) {

};

exports.customer_logout = function(req, res) {

};

exports.customer_updateInfo = function(req, res) {

};

exports.customer_resetPassword = function(req, res) {

};


exports.customer_checkout = function(req, res) {

};