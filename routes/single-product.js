var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('single-product', { pageTitle: 'Chi tiết sản phẩm' });
});

module.exports = router;
