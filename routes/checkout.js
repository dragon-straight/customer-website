var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('checkout', { pageTitle: 'Thanh toán' });
});

module.exports = router;
