var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('forgotPassword', { pageTitle: 'Phục hồi mật khẩu' });
});

module.exports = router;
