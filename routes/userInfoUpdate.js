var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('userInfoUpdate', { pageTitle: 'Cập nhật thông tin tài khoản' });
});

module.exports = router;
