const Product = require('../models/product');
const Category = require('../models/category');
const Manufacturer = require('../models/manufacturer');
const productDao = require('../models/dao/productDao');

exports.home_index = function(req, res){
    productDao.get_Random_Product().
    then(result => {
        Random = result;
        return productDao.get_LatestProduct();
    }).then(result => {
            latest = result;
            return productDao.get_Manufacturer();
    }).then(result => {
        manufacturer = result;
        return productDao.get_Category();
    }).then(result => {
        category = result;
        return productDao.get_Most_Sold();
    }).then(result => {
        most_sold = result;
        return productDao.get_Most_Viewed();
    }).then(result => {
        most_viewed = result;
        res.render('home/homepage', {
            pageTitle: 'Trang chủ',
            randomProduct: Random,
            topLatest: latest,
            manufacturerList: manufacturer,
            categoryList: category,
            mostSold: most_sold,
            mostViewed: most_viewed
        });
    })
};

