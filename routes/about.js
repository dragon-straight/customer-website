var express = require('express');
var router = express.Router();
const productDao = require('../models/dao/productDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
    productDao.get_Manufacturer().then(result => {
        manufacturer = result;
        return productDao.get_Category();
    }).then(result => {
        category = result;
        res.render('about', {
            pageTitle: 'Liên hệ',
            manufacturerList: manufacturer,
            categoryList: category,
        });
    });
});

module.exports = router;
