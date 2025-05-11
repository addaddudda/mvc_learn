const { Router } = require('express');
const usercontroller = require('../controller/usercontroller');
const router = Router();

router.get('/', usercontroller.home);
router.get('/signup', usercontroller.signup);
router.post('/signup', usercontroller.submitsignup);
router.get('/login', usercontroller.login);
router.post('/login', usercontroller.submitlogin);

module.exports = router;