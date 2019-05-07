const Product = require('../models/product');
const Category = require('../models/category');
const Manufacturer = require('../models/manufacturer');

exports.home_index = function(req, res){
    res.render('home/homepage', { pageTitle: 'Trang chủ' });
};
