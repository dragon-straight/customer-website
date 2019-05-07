const Product = require('../models/product');

exports.product_list = function(req, res) {
    res.render('product/list', { pageTitle: 'Danh sách sản phẩm' });
};

exports.product_viewProduct = function(req, res) {
    res.render('product/single-product', { pageTitle: 'Chi tiết sản phẩm' });
};

exports.product_search = function(req, res) {
    res.render('product/result-search', { pageTitle: 'Kết quả tìm kiếm' });
};

exports.product_cart = function(req, res){
    res.render('product/cart', { pageTitle: 'Giỏ hàng' });
};

exports.product_addToCart = function(req, res) {
    res.send('NOT IMPLEMENTED: Add product into cart');
};

exports.product_removeFromCart = function(req, res) {
    res.send('NOT IMPLEMENTED: Remove product form cart');
};

exports.product_changeQuantity = function(req, res){
  res.send('NOT IMPLEMENTED: Change quantity of product in cart');
};

